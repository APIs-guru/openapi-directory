import requests
from typing import Optional
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

    
    def vmmigration_projects_locations_groups_add_group_migration(self, request: operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationRequest) -> operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse:
        r"""Adds a MigratingVm to a Group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{group}:addGroupMigration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsGroupsAddGroupMigrationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_groups_create(self, request: operations.VmmigrationProjectsLocationsGroupsCreateRequest) -> operations.VmmigrationProjectsLocationsGroupsCreateResponse:
        r"""Creates a new Group in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/groups", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_groups_list(self, request: operations.VmmigrationProjectsLocationsGroupsListRequest) -> operations.VmmigrationProjectsLocationsGroupsListResponse:
        r"""Lists Groups in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/groups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGroupsResponse])
                res.list_groups_response = out

        return res

    
    def vmmigration_projects_locations_groups_remove_group_migration(self, request: operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationRequest) -> operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse:
        r"""Removes a MigratingVm from a Group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{group}:removeGroupMigration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsGroupsRemoveGroupMigrationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_list(self, request: operations.VmmigrationProjectsLocationsListRequest) -> operations.VmmigrationProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLocationsResponse])
                res.list_locations_response = out

        return res

    
    def vmmigration_projects_locations_operations_list(self, request: operations.VmmigrationProjectsLocationsOperationsListRequest) -> operations.VmmigrationProjectsLocationsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    def vmmigration_projects_locations_sources_create(self, request: operations.VmmigrationProjectsLocationsSourcesCreateRequest) -> operations.VmmigrationProjectsLocationsSourcesCreateResponse:
        r"""Creates a new Source in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/sources", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_datacenter_connectors_create(self, request: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateRequest) -> operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateResponse:
        r"""Creates a new DatacenterConnector in a given Source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/datacenterConnectors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_datacenter_connectors_list(self, request: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListRequest) -> operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse:
        r"""Lists DatacenterConnectors in a given Source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/datacenterConnectors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDatacenterConnectorsResponse])
                res.list_datacenter_connectors_response = out

        return res

    
    def vmmigration_projects_locations_sources_datacenter_connectors_upgrade_appliance(self, request: operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceRequest) -> operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceResponse:
        r"""Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{datacenterConnector}:upgradeAppliance", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesDatacenterConnectorsUpgradeApplianceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_fetch_inventory(self, request: operations.VmmigrationProjectsLocationsSourcesFetchInventoryRequest) -> operations.VmmigrationProjectsLocationsSourcesFetchInventoryResponse:
        r"""List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{source}:fetchInventory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesFetchInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FetchInventoryResponse])
                res.fetch_inventory_response = out

        return res

    
    def vmmigration_projects_locations_sources_list(self, request: operations.VmmigrationProjectsLocationsSourcesListRequest) -> operations.VmmigrationProjectsLocationsSourcesListResponse:
        r"""Lists Sources in a given project and location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/sources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSourcesResponse])
                res.list_sources_response = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_clone_jobs_create(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateResponse:
        r"""Initiates a Clone of a specific migrating VM.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/cloneJobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_clone_jobs_list(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse:
        r"""Lists CloneJobs of a given migrating VM.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/cloneJobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsCloneJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCloneJobsResponse])
                res.list_clone_jobs_response = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_create(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateResponse:
        r"""Creates a new MigratingVm in a given Source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/migratingVms", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_cutover_jobs_cancel(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelResponse:
        r"""Initiates the cancellation of a running cutover job.
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

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_cutover_jobs_create(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateResponse:
        r"""Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/cutoverJobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_cutover_jobs_list(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse:
        r"""Lists CutoverJobs of a given migrating VM.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/cutoverJobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsCutoverJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListCutoverJobsResponse])
                res.list_cutover_jobs_response = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_finalize_migration(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse:
        r"""Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{migratingVm}:finalizeMigration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsFinalizeMigrationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_list(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsListRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsListResponse:
        r"""Lists MigratingVms in a given Source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/migratingVms", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMigratingVmsResponse])
                res.list_migrating_vms_response = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_pause_migration(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse:
        r"""Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{migratingVm}:pauseMigration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsPauseMigrationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_replication_cycles_list(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse:
        r"""Lists ReplicationCycles in a given MigratingVM.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/replicationCycles", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsReplicationCyclesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListReplicationCyclesResponse])
                res.list_replication_cycles_response = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_resume_migration(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationResponse:
        r"""Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{migratingVm}:resumeMigration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsResumeMigrationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_migrating_vms_start_migration(self, request: operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationRequest) -> operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse:
        r"""Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{migratingVm}:startMigration", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesMigratingVmsStartMigrationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_utilization_reports_create(self, request: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateRequest) -> operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse:
        r"""Creates a new UtilizationReport.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/utilizationReports", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesUtilizationReportsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_sources_utilization_reports_list(self, request: operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListRequest) -> operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse:
        r"""Lists Utilization Reports of the given Source.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/utilizationReports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsSourcesUtilizationReportsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUtilizationReportsResponse])
                res.list_utilization_reports_response = out

        return res

    
    def vmmigration_projects_locations_target_projects_create(self, request: operations.VmmigrationProjectsLocationsTargetProjectsCreateRequest) -> operations.VmmigrationProjectsLocationsTargetProjectsCreateResponse:
        r"""Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/targetProjects", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsTargetProjectsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_target_projects_delete(self, request: operations.VmmigrationProjectsLocationsTargetProjectsDeleteRequest) -> operations.VmmigrationProjectsLocationsTargetProjectsDeleteResponse:
        r"""Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsTargetProjectsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def vmmigration_projects_locations_target_projects_get(self, request: operations.VmmigrationProjectsLocationsTargetProjectsGetRequest) -> operations.VmmigrationProjectsLocationsTargetProjectsGetResponse:
        r"""Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsTargetProjectsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TargetProject])
                res.target_project = out

        return res

    
    def vmmigration_projects_locations_target_projects_list(self, request: operations.VmmigrationProjectsLocationsTargetProjectsListRequest) -> operations.VmmigrationProjectsLocationsTargetProjectsListResponse:
        r"""Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha1/{parent}/targetProjects", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VmmigrationProjectsLocationsTargetProjectsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListTargetProjectsResponse])
                res.list_target_projects_response = out

        return res

    
    def vmmigration_projects_locations_target_projects_patch(self, request: operations.VmmigrationProjectsLocationsTargetProjectsPatchRequest) -> operations.VmmigrationProjectsLocationsTargetProjectsPatchResponse:
        r"""Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
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

        res = operations.VmmigrationProjectsLocationsTargetProjectsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    