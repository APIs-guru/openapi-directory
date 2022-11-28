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

    
    def managedidentities_projects_locations_global_domains_attach_trust(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse:
        r"""Adds AD trust in a given domain. Operation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:attachTrust", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsAttachTrustResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_backups_create(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateResponse:
        r"""Creates a Backup for a domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/backups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_backups_list(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListResponse:
        r"""Lists Backup in a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/backups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsBackupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBackupsResponse])
                res.list_backups_response = out

        return res

    
    def managedidentities_projects_locations_global_domains_check_migration_permission(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionResponse:
        r"""AuditMigration API gets the current state of DomainMigration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{domain}:checkMigrationPermission", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsCheckMigrationPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckMigrationPermissionResponse])
                res.check_migration_permission_response = out

        return res

    
    def managedidentities_projects_locations_global_domains_create(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse:
        r"""Creates a Microsoft AD Domain in a given project. Operation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/domains", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_detach_trust(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustResponse:
        r"""Removes identified trust. Operation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:detachTrust", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsDetachTrustResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_disable_migration(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse:
        r"""Disable Domain Migration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{domain}:disableMigration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsDisableMigrationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_enable_migration(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationResponse:
        r"""Enable Domain Migration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{domain}:enableMigration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_extend_schema(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaResponse:
        r"""Extend Schema for Domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{domain}:extendSchema", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsExtendSchemaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_get_ldapssettings(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse:
        r"""Gets the domain ldaps settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}/ldapssettings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsGetLdapssettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LdapsSettings])
                res.ldaps_settings = out

        return res

    
    def managedidentities_projects_locations_global_domains_list(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsListRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsListResponse:
        r"""Lists Domains in a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/domains", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDomainsResponse])
                res.list_domains_response = out

        return res

    
    def managedidentities_projects_locations_global_domains_reconfigure_trust(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustResponse:
        r"""Updates the dns conditional forwarder. Operation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:reconfigureTrust", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsReconfigureTrustResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_reset_admin_password(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordResponse:
        r"""Resets managed identities admin password identified by managed_identities_admin_name
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:resetAdminPassword", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsResetAdminPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResetAdminPasswordResponse])
                res.reset_admin_password_response = out

        return res

    
    def managedidentities_projects_locations_global_domains_restore(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreResponse:
        r"""RestoreDomain restores domain backup mentioned in the RestoreDomainRequest
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:restore", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsRestoreResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_sql_integrations_list(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsListRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsListResponse:
        r"""Lists SQLIntegrations in a given domain.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/sqlIntegrations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsSQLIntegrationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSQLIntegrationsResponse])
                res.list_sql_integrations_response = out

        return res

    
    def managedidentities_projects_locations_global_domains_update_ldapssettings(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsResponse:
        r"""Patches a single ldaps settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}/ldapssettings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsUpdateLdapssettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_domains_validate_trust(self, request: operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustResponse:
        r"""Validate the trust state Operation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:validateTrust", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalDomainsValidateTrustResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_operations_cancel(self, request: operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def managedidentities_projects_locations_global_operations_list(self, request: operations.ManagedidentitiesProjectsLocationsGlobalOperationsListRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    def managedidentities_projects_locations_global_peerings_create(self, request: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse:
        r"""Creates a Peering for Managed AD instance.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/peerings", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalPeeringsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_peerings_delete(self, request: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteResponse:
        r"""Deletes identified Peering.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalPeeringsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_peerings_get(self, request: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetResponse:
        r"""Gets details of a single Peering.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Peering])
                res.peering = out

        return res

    
    def managedidentities_projects_locations_global_peerings_get_iam_policy(self, request: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyResponse:
        r"""Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{resource}:getIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalPeeringsGetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def managedidentities_projects_locations_global_peerings_list(self, request: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListResponse:
        r"""Lists Peerings in a given project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/peerings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalPeeringsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPeeringsResponse])
                res.list_peerings_response = out

        return res

    
    def managedidentities_projects_locations_global_peerings_patch(self, request: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchResponse:
        r"""Updates the labels for specified Peering.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalPeeringsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def managedidentities_projects_locations_global_peerings_set_iam_policy(self, request: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse:
        r"""Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{resource}:setIamPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalPeeringsSetIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Policy])
                res.policy = out

        return res

    
    def managedidentities_projects_locations_global_peerings_test_iam_permissions(self, request: operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsRequest) -> operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse:
        r"""Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may \"fail open\" without warning.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{resource}:testIamPermissions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsGlobalPeeringsTestIamPermissionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TestIamPermissionsResponse])
                res.test_iam_permissions_response = out

        return res

    
    def managedidentities_projects_locations_list(self, request: operations.ManagedidentitiesProjectsLocationsListRequest) -> operations.ManagedidentitiesProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ManagedidentitiesProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    