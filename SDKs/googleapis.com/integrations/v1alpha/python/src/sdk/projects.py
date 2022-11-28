import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def integrations_projects_locations_apps_script_projects_create(self, request: operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateRequest) -> operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse:
        r"""Creates an Apps Script project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appsScriptProjects", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsAppsScriptProjectsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaCreateAppsScriptProjectResponse])
                res.google_cloud_integrations_v1alpha_create_apps_script_project_response = out

        return res

    
    def integrations_projects_locations_apps_script_projects_link(self, request: operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkRequest) -> operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse:
        r"""Links a existing Apps Script project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/appsScriptProjects:link", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsAppsScriptProjectsLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaLinkAppsScriptProjectResponse])
                res.google_cloud_integrations_v1alpha_link_apps_script_project_response = out

        return res

    
    def integrations_projects_locations_connections_list(self, request: operations.IntegrationsProjectsLocationsConnectionsListRequest) -> operations.IntegrationsProjectsLocationsConnectionsListResponse:
        r"""Lists Connections in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/connections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsConnectionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListConnectionsResponse])
                res.google_cloud_integrations_v1alpha_list_connections_response = out

        return res

    
    def integrations_projects_locations_connections_runtime_action_schemas_list(self, request: operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListRequest) -> operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse:
        r"""Lists the JSON schemas for the inputs and outputs of actions, filtered by action name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/runtimeActionSchemas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsConnectionsRuntimeActionSchemasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListRuntimeActionSchemasResponse])
                res.google_cloud_integrations_v1alpha_list_runtime_action_schemas_response = out

        return res

    
    def integrations_projects_locations_connections_runtime_entity_schemas_list(self, request: operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest) -> operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse:
        r"""Lists the JSON schemas for the properties of runtime entities, filtered by entity name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/runtimeEntitySchemas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListRuntimeEntitySchemasResponse])
                res.google_cloud_integrations_v1alpha_list_runtime_entity_schemas_response = out

        return res

    
    def integrations_projects_locations_products_auth_configs_create(self, request: operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateRequest) -> operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse:
        r"""Creates an auth config record. Fetch corresponding credentials for specific auth types, e.g. access token for OAuth 2.0, JWT token for JWT. Encrypt the auth config with Cloud KMS and store the encrypted credentials in Spanner. Returns the encrypted auth config.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/authConfigs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsAuthConfigsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaAuthConfig])
                res.google_cloud_integrations_v1alpha_auth_config = out

        return res

    
    def integrations_projects_locations_products_auth_configs_list(self, request: operations.IntegrationsProjectsLocationsProductsAuthConfigsListRequest) -> operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse:
        r"""Lists all auth configs that match the filter. Restrict to auth configs belong to the current client only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/authConfigs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsAuthConfigsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListAuthConfigsResponse])
                res.google_cloud_integrations_v1alpha_list_auth_configs_response = out

        return res

    
    def integrations_projects_locations_products_certificates_create(self, request: operations.IntegrationsProjectsLocationsProductsCertificatesCreateRequest) -> operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse:
        r"""Creates a new certificate. The certificate will be registered to the trawler service and will be encrypted using cloud KMS and stored in Spanner Returns the certificate.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/certificates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsCertificatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaCertificate])
                res.google_cloud_integrations_v1alpha_certificate = out

        return res

    
    def integrations_projects_locations_products_certificates_list(self, request: operations.IntegrationsProjectsLocationsProductsCertificatesListRequest) -> operations.IntegrationsProjectsLocationsProductsCertificatesListResponse:
        r"""List all the certificates that match the filter. Restrict to certificate of current client only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/certificates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsCertificatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListCertificatesResponse])
                res.google_cloud_integrations_v1alpha_list_certificates_response = out

        return res

    
    def integrations_projects_locations_products_create_bundle(self, request: operations.IntegrationsProjectsLocationsProductsCreateBundleRequest) -> operations.IntegrationsProjectsLocationsProductsCreateBundleResponse:
        r"""PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Create a bundle.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}:createBundle", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsCreateBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaCreateBundleResponse])
                res.google_cloud_integrations_v1alpha_create_bundle_response = out

        return res

    
    def integrations_projects_locations_products_integrations_archive_bundle(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse:
        r"""PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. Soft-deletes the bundle.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:archiveBundle", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsArchiveBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_archive_bundle_response = out

        return res

    
    def integrations_projects_locations_products_integrations_execute(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse:
        r"""Executes integrations synchronously by passing the trigger id in the request body. The request is not returned until the requested executions are either fulfilled or experienced an error. If the integration name is not specified (passing `-`), all of the associated integration under the given trigger_id will be executed. Otherwise only the specified integration for the given `trigger_id` is executed. This is helpful for execution the integration from UI.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:execute", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecuteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaExecuteIntegrationsResponse])
                res.google_cloud_integrations_v1alpha_execute_integrations_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_cancel(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse:
        r"""Cancellation of an execution
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaCancelExecutionResponse])
                res.google_cloud_integrations_v1alpha_cancel_execution_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse:
        r"""Lists the status of the integration executions.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/executions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListExecutionsResponse])
                res.google_cloud_integrations_v1alpha_list_executions_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_suspensions_lift(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse:
        r"""* Lifts suspension for advanced suspension task. Fetch corresponding suspension with provided suspension Id, resolve suspension, and set up suspension result for the Suspension Task.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:lift", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsLiftResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaLiftSuspensionResponse])
                res.google_cloud_integrations_v1alpha_lift_suspension_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_suspensions_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse:
        r"""* Lists suspensions associated with a specific execution. Only those with permissions to resolve the relevant suspensions will be able to view them.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/suspensions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListSuspensionsResponse])
                res.google_cloud_integrations_v1alpha_list_suspensions_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executions_suspensions_resolve(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse:
        r"""* Resolves (lifts/rejects) any number of suspensions. If the integration is already running, only the status of the suspension is updated. Otherwise, the suspended integration will begin execution again.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:resolve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsSuspensionsResolveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_resolve_suspension_response = out

        return res

    
    def integrations_projects_locations_products_integrations_executionsnapshots_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse:
        r"""Lists the snapshots of a given integration executions. This RPC is not being used.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/executionsnapshots", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsExecutionsnapshotsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListExecutionSnapshotsResponse])
                res.google_cloud_integrations_v1alpha_list_execution_snapshots_response = out

        return res

    
    def integrations_projects_locations_products_integrations_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse:
        r"""Returns the list of all integrations in the specified project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/integrations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListIntegrationsResponse])
                res.google_cloud_integrations_v1alpha_list_integrations_response = out

        return res

    
    def integrations_projects_locations_products_integrations_monitorexecutionstats(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse:
        r"""Get execution stats
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}:monitorexecutionstats", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsMonitorexecutionstatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse])
                res.google_cloud_integrations_v1alpha_monitor_execution_stats_response = out

        return res

    
    def integrations_projects_locations_products_integrations_schedule(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse:
        r"""Schedules an integration for execution by passing the trigger id and the scheduled time in the request body.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:schedule", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaScheduleIntegrationsResponse])
                res.google_cloud_integrations_v1alpha_schedule_integrations_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_archive(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse:
        r"""Soft-deletes the integration. Changes the status of the integration to ARCHIVED. If the integration being ARCHIVED is tagged as \"HEAD\", the tag is removed from this snapshot and set to the previous non-ARCHIVED snapshot. The PUBLISH_REQUESTED, DUE_FOR_DELETION tags are removed too. This RPC throws an exception if the version being archived is DRAFT, and if the `locked_by` user is not the same as the user performing the Archive. Audit fields updated include last_modified_timestamp, last_modified_by. Any existing lock is released when Archiving a integration. Currently, there is no unarchive mechanism.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:archive", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_archive_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_deactivate(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse:
        r"""Sets the status of the ACTIVE integration to SNAPSHOT with a new tag \"PREVIOUSLY_PUBLISHED\" after validating it. The \"HEAD\" and \"PUBLISH_REQUESTED\" tags do not change. This RPC throws an exception if the version being snapshot is not ACTIVE. Audit fields added include action, action_by, action_timestamp.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:deactivate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDeactivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_deactivate_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_download(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse:
        r"""Downloads an integration. Retrieves the `IntegrationVersion` for a given `integration_id` and returns the response as a string.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:download", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsDownloadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaDownloadIntegrationVersionResponse])
                res.google_cloud_integrations_v1alpha_download_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_get_bundle(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse:
        r"""PROTECT WITH A VISIBILITY LABEL. THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to get details of the Bundle
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:getBundle", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsGetBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaGetBundleResponse])
                res.google_cloud_integrations_v1alpha_get_bundle_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_publish(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse:
        r"""This RPC throws an exception if the integration is in ARCHIVED or ACTIVE state. This RPC throws an exception if the version being published is DRAFT, and if the `locked_by` user is not the same as the user performing the Publish. Audit fields updated include last_published_timestamp, last_published_by, last_modified_timestamp, last_modified_by. Any existing lock is on this integration is released.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:publish", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsPublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_publish_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_takeover_edit_lock(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse:
        r"""Clears the `locked_by` and `locked_at_timestamp`in the DRAFT version of this integration. It then performs the same action as the CreateDraftIntegrationVersion (i.e., copies the DRAFT version of the integration as a SNAPSHOT and then creates a new DRAFT version with the `locked_by` set to the `user_taking_over` and the `locked_at_timestamp` set to the current timestamp). Both the `locked_by` and `user_taking_over` are notified via email about the takeover. This RPC throws an exception if the integration is not in DRAFT status or if the `locked_by` and `locked_at_timestamp` fields are not set.The TakeoverEdit lock is treated the same as an edit of the integration, and hence shares ACLs with edit. Audit fields updated include last_modified_timestamp, last_modified_by.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{integrationVersion}:takeoverEditLock", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsTakeoverEditLockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaTakeoverEditLockResponse])
                res.google_cloud_integrations_v1alpha_takeover_edit_lock_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_update_bundle(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse:
        r"""THIS METHOD WILL BE MOVED TO A SEPARATE SERVICE. RPC to update the Bundle
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:updateBundle", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUpdateBundleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaUpdateBundleResponse])
                res.google_cloud_integrations_v1alpha_update_bundle_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_upload(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse:
        r"""Uploads an integration. The content can be a previously downloaded integration. Performs the same function as CreateDraftIntegrationVersion, but accepts input in a string format, which holds the complete representation of the IntegrationVersion content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/versions:upload", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsUploadResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaUploadIntegrationVersionResponse])
                res.google_cloud_integrations_v1alpha_upload_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrations_versions_validate(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse:
        r"""Validates the given integration. If the id doesn't exist, a NotFoundException is thrown. If validation fails a CanonicalCodeException is thrown. If there was no failure an empty response is returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:validate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationsVersionsValidateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_cloud_integrations_v1alpha_validate_integration_version_response = out

        return res

    
    def integrations_projects_locations_products_integrationtemplates_versions_create(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse:
        r"""Creates an IntegrationTemplateVersion.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/versions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion])
                res.google_cloud_integrations_v1alpha_integration_template_version = out

        return res

    
    def integrations_projects_locations_products_integrationtemplates_versions_list(self, request: operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListRequest) -> operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse:
        r"""Returns the list of all IntegrationTemplateVersions in the specified project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/versions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsIntegrationtemplatesVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListIntegrationTemplateVersionsResponse])
                res.google_cloud_integrations_v1alpha_list_integration_template_versions_response = out

        return res

    
    def integrations_projects_locations_products_list_task_entities(self, request: operations.IntegrationsProjectsLocationsProductsListTaskEntitiesRequest) -> operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse:
        r"""This is a UI only method and will be moved away. Returns a list of common tasks.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}:listTaskEntities", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsProductsListTaskEntitiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListTaskEntitiesResponse])
                res.google_cloud_integrations_v1alpha_list_task_entities_response = out

        return res

    
    def integrations_projects_locations_sfdc_instances_create(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesCreateRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse:
        r"""Creates an sfdc instance record. Store the sfdc instance in Spanner. Returns the sfdc instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/sfdcInstances", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaSfdcInstance])
                res.google_cloud_integrations_v1alpha_sfdc_instance = out

        return res

    
    def integrations_projects_locations_sfdc_instances_list(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesListRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesListResponse:
        r"""Lists all sfdc instances that match the filter. Restrict to sfdc instances belonging to the current client only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/sfdcInstances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse])
                res.google_cloud_integrations_v1alpha_list_sfdc_instances_response = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_create(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse:
        r"""Creates an sfdc channel record. Store the sfdc channel in Spanner. Returns the sfdc channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/sfdcChannels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaSfdcChannel])
                res.google_cloud_integrations_v1alpha_sfdc_channel = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_delete(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse:
        r"""Deletes an sfdc channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_get(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse:
        r"""Gets an sfdc channel. If the channel doesn't exist, Code.NOT_FOUND exception will be thrown.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaSfdcChannel])
                res.google_cloud_integrations_v1alpha_sfdc_channel = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_list(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse:
        r"""Lists all sfdc channels that match the filter. Restrict to sfdc channels belonging to the current client only.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/sfdcChannels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaListSfdcChannelsResponse])
                res.google_cloud_integrations_v1alpha_list_sfdc_channels_response = out

        return res

    
    def integrations_projects_locations_sfdc_instances_sfdc_channels_patch(self, request: operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchRequest) -> operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse:
        r"""Updates an sfdc channel. Updates the sfdc channel in spanner. Returns the sfdc channel.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IntegrationsProjectsLocationsSfdcInstancesSfdcChannelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIntegrationsV1alphaSfdcChannel])
                res.google_cloud_integrations_v1alpha_sfdc_channel = out

        return res

    