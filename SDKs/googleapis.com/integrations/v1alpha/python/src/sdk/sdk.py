import warnings
import requests
from typing import Any,Enum,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://integrations.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def integrations_callback_generate_token(self, request: operations.IntegrationsCallbackGenerateTokenRequest) -> operations.IntegrationsCallbackGenerateTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha/callback:generateToken"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsCallbackGenerateTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaGenerateTokenResponse])
                res.google_cloud_integrations_v1alpha_generate_token_response = out

        return res

    
    def integrations_connector_platform_regions_enumerate(self, request: operations.IntegrationsConnectorPlatformRegionsEnumerateRequest) -> operations.IntegrationsConnectorPlatformRegionsEnumerateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1alpha/connectorPlatformRegions:enumerate"

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsConnectorPlatformRegionsEnumerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaEnumerateConnectorPlatformRegionsResponse])
                res.google_cloud_integrations_v1alpha_enumerate_connector_platform_regions_response = out

        return res

    
    def integrations_projects_locations_apps_script_projects_create(self, request: operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest) -> operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appsScriptProjects", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse])
                res.google_cloud_integrations_v1alpha_create_apps_script_project_response = out

        return res

    
    def integrations_projects_locations_apps_script_projects_link(self, request: operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest) -> operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appsScriptProjects:link", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse])
                res.google_cloud_integrations_v1alpha_link_apps_script_project_response = out

        return res

    
    def integrations_projects_locations_connections_list(self, request: operations.IntegrationsProjectsLocationsConnectionsListRequest) -> operations.IntegrationsProjectsLocationsConnectionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/connections", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListConnectionsResponse])
                res.google_cloud_integrations_v1alpha_list_connections_response = out

        return res

    
    def integrations_projects_locations_connections_runtime_action_schemas_list(self, request: operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest) -> operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/runtimeActionSchemas", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse])
                res.google_cloud_integrations_v1alpha_list_runtime_action_schemas_response = out

        return res

    
    def integrations_projects_locations_connections_runtime_entity_schemas_list(self, request: operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest) -> operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/runtimeEntitySchemas", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse])
                res.google_cloud_integrations_v1alpha_list_runtime_entity_schemas_response = out

        return res

    
    def integrations_projects_locations_products_auth_configs_create(self, request: operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest) -> operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/authConfigs", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaAuthConfig])
                res.google_cloud_integrations_v1alpha_auth_config = out

        return res

    
    def integrations_projects_locations_products_auth_configs_list(self, request: operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest) -> operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/authConfigs", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListAuthConfigsResponse])
                res.google_cloud_integrations_v1alpha_list_auth_configs_response = out

        return res

    
    def integrations_projects_locations_products_certificates_create(self, request: operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest) -> operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/certificates", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaCertificate])
                res.google_cloud_integrations_v1alpha_certificate = out

        return res

    
    def integrations_projects_locations_products_certificates_list(self, request: operations.IntegrationsProjectsLocationsProductsCertificatesListRequest) -> operations.IntegrationsProjectsLocationsProductsCertificatesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/certificates", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsCertificatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListCertificatesResponse])
                res.google_cloud_integrations_v1alpha_list_certificates_response = out

        return res

    
    def integrations_projects_locations_products_create_bundle(self, request: operations.IntegrationsProjectsLocationsProductsCreateBundleRequest) -> operations.IntegrationsProjectsLocationsProductsCreateBundleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}:createBundle", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsCreateBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaCreateBundleResponse])
                res.google_cloud_integrations_v1alpha_create_bundle_response = out

        return res

    
    def integrations_projects_locations_products_integrations_archive_bundle(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:archiveBundle", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_archive_bundle_response = out

        return res

    
    def integrations_projects_locations_products_integrations_execute(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:execute", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse])
                res.google_cloud_integrations_v1alpha_execute_integrations_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_cancel(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:cancel", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaCancelExecutionResponse])
                res.google_cloud_integrations_v1alpha_cancel_execution_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/executions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse])
                res.google_cloud_integrations_v1alpha_list_executions_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_suspensions_lift(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:lift", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaLiftSuspensionResponse])
                res.google_cloud_integrations_v1alpha_lift_suspension_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_suspensions_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/suspensions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListSuspensionsResponse])
                res.google_cloud_integrations_v1alpha_list_suspensions_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_suspensions_resolve(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:resolve", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_resolve_suspension_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executionsnapshots_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/executionsnapshots", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse])
                res.google_cloud_integrations_v1alpha_list_execution_snapshots_response = out

        return res

    
    def integrations_projects_locations_products_integrations_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/integrations", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListIntegrationsResponse])
                res.google_cloud_integrations_v1alpha_list_integrations_response = out

        return res

    
    def integrations_projects_locations_products_integrations_monitorexecutionstats(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}:monitorexecutionstats", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse])
                res.google_cloud_integrations_v1alpha_monitor_execution_stats_response = out

        return res

    
    def integrations_projects_locations_products_integrations_schedule(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:schedule", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse])
                res.google_cloud_integrations_v1alpha_schedule_integrations_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_archive(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:archive", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_archive_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_deactivate(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:deactivate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_deactivate_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_download(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:download", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse])
                res.google_cloud_integrations_v1alpha_download_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_get_bundle(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:getBundle", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaGetBundleResponse])
                res.google_cloud_integrations_v1alpha_get_bundle_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_publish(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:publish", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_publish_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_takeover_edit_lock(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{integrationVersion}:takeoverEditLock", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse])
                res.google_cloud_integrations_v1alpha_takeover_edit_lock_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_update_bundle(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:updateBundle", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaUpdateBundleResponse])
                res.google_cloud_integrations_v1alpha_update_bundle_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_upload(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/versions:upload", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse])
                res.google_cloud_integrations_v1alpha_upload_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_validate(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:validate", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_validate_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrationtemplates_versions_create(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/versions", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion])
                res.google_cloud_integrations_v1alpha_integration_template_version = out

        return res

    
    def integrations_projects_locations_products_integrationtemplates_versions_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/versions", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse])
                res.google_cloud_integrations_v1alpha_list_integration_template_versions_response = out

        return res

    
    def integrations_projects_locations_products_list_task_entities(self, request: operations.IntegrationsProjectsLocationsProductsListTaskEntitiesRequest) -> operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}:listTaskEntities", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse])
                res.google_cloud_integrations_v1alpha_list_task_entities_response = out

        return res

    
    def integrations_projects_locations_sfdc_instances_create(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/sfdcInstances", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaSfdcInstance])
                res.google_cloud_integrations_v1alpha_sfdc_instance = out

        return res

    
    def integrations_projects_locations_sfdc_instances_list(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesListRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/sfdcInstances", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse])
                res.google_cloud_integrations_v1alpha_list_sfdc_instances_response = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_create(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/sfdcChannels", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaSfdcChannel])
                res.google_cloud_integrations_v1alpha_sfdc_channel = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_delete(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_get(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaSfdcChannel])
                res.google_cloud_integrations_v1alpha_sfdc_channel = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_list(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/sfdcChannels", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse])
                res.google_cloud_integrations_v1alpha_list_sfdc_channels_response = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_patch(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaSfdcChannel])
                res.google_cloud_integrations_v1alpha_sfdc_channel = out

        return res

    