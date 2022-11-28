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

    
    def container_projects_aggregated_usable_subnetworks_list(self, request: operations.ContainerProjectsAggregatedUsableSubnetworksListRequest) -> operations.ContainerProjectsAggregatedUsableSubnetworksListResponse:
        r"""Lists subnetworks that are usable for creating clusters in a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/aggregated/usableSubnetworks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsAggregatedUsableSubnetworksListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListUsableSubnetworksResponse])
                res.list_usable_subnetworks_response = out

        return res

    
    def container_projects_locations_clusters_complete_ip_rotation(self, request: operations.ContainerProjectsLocationsClustersCompleteIPRotationRequest) -> operations.ContainerProjectsLocationsClustersCompleteIPRotationResponse:
        r"""Completes master IP rotation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:completeIpRotation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersCompleteIPRotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_create(self, request: operations.ContainerProjectsLocationsClustersCreateRequest) -> operations.ContainerProjectsLocationsClustersCreateResponse:
        r"""Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/clusters", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_get_jwks(self, request: operations.ContainerProjectsLocationsClustersGetJwksRequest) -> operations.ContainerProjectsLocationsClustersGetJwksResponse:
        r"""Gets the public component of the cluster signing keys in JSON Web Key format. This API is not yet intended for general use, and is not available for all clusters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/jwks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersGetJwksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetJSONWebKeysResponse])
                res.get_json_web_keys_response = out

        return res

    
    def container_projects_locations_clusters_list(self, request: operations.ContainerProjectsLocationsClustersListRequest) -> operations.ContainerProjectsLocationsClustersListResponse:
        r"""Lists all clusters owned by a project in either the specified zone or all zones.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/clusters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClustersResponse])
                res.list_clusters_response = out

        return res

    
    def container_projects_locations_clusters_node_pools_complete_upgrade(self, request: operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeRequest) -> operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeResponse:
        r"""CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:completeUpgrade", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersNodePoolsCompleteUpgradeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def container_projects_locations_clusters_node_pools_create(self, request: operations.ContainerProjectsLocationsClustersNodePoolsCreateRequest) -> operations.ContainerProjectsLocationsClustersNodePoolsCreateResponse:
        r"""Creates a node pool for a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/nodePools", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersNodePoolsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_node_pools_delete(self, request: operations.ContainerProjectsLocationsClustersNodePoolsDeleteRequest) -> operations.ContainerProjectsLocationsClustersNodePoolsDeleteResponse:
        r"""Deletes a node pool from a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersNodePoolsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_node_pools_list(self, request: operations.ContainerProjectsLocationsClustersNodePoolsListRequest) -> operations.ContainerProjectsLocationsClustersNodePoolsListResponse:
        r"""Lists the node pools for a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/nodePools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersNodePoolsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNodePoolsResponse])
                res.list_node_pools_response = out

        return res

    
    def container_projects_locations_clusters_node_pools_rollback(self, request: operations.ContainerProjectsLocationsClustersNodePoolsRollbackRequest) -> operations.ContainerProjectsLocationsClustersNodePoolsRollbackResponse:
        r"""Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:rollback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersNodePoolsRollbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_node_pools_set_autoscaling(self, request: operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingRequest) -> operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingResponse:
        r"""Sets the autoscaling settings for the specified node pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setAutoscaling", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersNodePoolsSetAutoscalingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_node_pools_set_management(self, request: operations.ContainerProjectsLocationsClustersNodePoolsSetManagementRequest) -> operations.ContainerProjectsLocationsClustersNodePoolsSetManagementResponse:
        r"""Sets the NodeManagement options for a node pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setManagement", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersNodePoolsSetManagementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_node_pools_set_size(self, request: operations.ContainerProjectsLocationsClustersNodePoolsSetSizeRequest) -> operations.ContainerProjectsLocationsClustersNodePoolsSetSizeResponse:
        r"""Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setSize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersNodePoolsSetSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_node_pools_update(self, request: operations.ContainerProjectsLocationsClustersNodePoolsUpdateRequest) -> operations.ContainerProjectsLocationsClustersNodePoolsUpdateResponse:
        r"""Updates the version and/or image type for the specified node pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersNodePoolsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_set_addons(self, request: operations.ContainerProjectsLocationsClustersSetAddonsRequest) -> operations.ContainerProjectsLocationsClustersSetAddonsResponse:
        r"""Sets the addons for a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setAddons", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersSetAddonsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_set_legacy_abac(self, request: operations.ContainerProjectsLocationsClustersSetLegacyAbacRequest) -> operations.ContainerProjectsLocationsClustersSetLegacyAbacResponse:
        r"""Enables or disables the ABAC authorization mechanism on a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setLegacyAbac", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersSetLegacyAbacResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_set_locations(self, request: operations.ContainerProjectsLocationsClustersSetLocationsRequest) -> operations.ContainerProjectsLocationsClustersSetLocationsResponse:
        r"""Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setLocations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersSetLocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_set_logging(self, request: operations.ContainerProjectsLocationsClustersSetLoggingRequest) -> operations.ContainerProjectsLocationsClustersSetLoggingResponse:
        r"""Sets the logging service for a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setLogging", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersSetLoggingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_set_maintenance_policy(self, request: operations.ContainerProjectsLocationsClustersSetMaintenancePolicyRequest) -> operations.ContainerProjectsLocationsClustersSetMaintenancePolicyResponse:
        r"""Sets the maintenance policy for a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setMaintenancePolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersSetMaintenancePolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_set_master_auth(self, request: operations.ContainerProjectsLocationsClustersSetMasterAuthRequest) -> operations.ContainerProjectsLocationsClustersSetMasterAuthResponse:
        r"""Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setMasterAuth", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersSetMasterAuthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_set_monitoring(self, request: operations.ContainerProjectsLocationsClustersSetMonitoringRequest) -> operations.ContainerProjectsLocationsClustersSetMonitoringResponse:
        r"""Sets the monitoring service for a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setMonitoring", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersSetMonitoringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_set_network_policy(self, request: operations.ContainerProjectsLocationsClustersSetNetworkPolicyRequest) -> operations.ContainerProjectsLocationsClustersSetNetworkPolicyResponse:
        r"""Enables or disables Network Policy for a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setNetworkPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersSetNetworkPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_set_resource_labels(self, request: operations.ContainerProjectsLocationsClustersSetResourceLabelsRequest) -> operations.ContainerProjectsLocationsClustersSetResourceLabelsResponse:
        r"""Sets labels on a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:setResourceLabels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersSetResourceLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_start_ip_rotation(self, request: operations.ContainerProjectsLocationsClustersStartIPRotationRequest) -> operations.ContainerProjectsLocationsClustersStartIPRotationResponse:
        r"""Starts master IP rotation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:startIpRotation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersStartIPRotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_update_master(self, request: operations.ContainerProjectsLocationsClustersUpdateMasterRequest) -> operations.ContainerProjectsLocationsClustersUpdateMasterResponse:
        r"""Updates the master for a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:updateMaster", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersUpdateMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_clusters_well_known_get_openid_configuration(self, request: operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationRequest) -> operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse:
        r"""Gets the OIDC discovery document for the cluster. See the [OpenID Connect Discovery 1.0 specification](https://openid.net/specs/openid-connect-discovery-1_0.html) for details. This API is not yet intended for general use, and is not available for all clusters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/.well-known/openid-configuration", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsClustersWellKnownGetOpenidConfigurationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOpenIDConfigResponse])
                res.get_open_id_config_response = out

        return res

    
    def container_projects_locations_get_server_config(self, request: operations.ContainerProjectsLocationsGetServerConfigRequest) -> operations.ContainerProjectsLocationsGetServerConfigResponse:
        r"""Returns configuration info about the Google Kubernetes Engine service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/serverConfig", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsGetServerConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServerConfig])
                res.server_config = out

        return res

    
    def container_projects_locations_operations_cancel(self, request: operations.ContainerProjectsLocationsOperationsCancelRequest) -> operations.ContainerProjectsLocationsOperationsCancelResponse:
        r"""Cancels the specified operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def container_projects_locations_operations_get(self, request: operations.ContainerProjectsLocationsOperationsGetRequest) -> operations.ContainerProjectsLocationsOperationsGetResponse:
        r"""Gets the specified operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_locations_operations_list(self, request: operations.ContainerProjectsLocationsOperationsListRequest) -> operations.ContainerProjectsLocationsOperationsListResponse:
        r"""Lists all operations in a project in a specific zone or all zones.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsLocationsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    
    def container_projects_zones_clusters_addons(self, request: operations.ContainerProjectsZonesClustersAddonsRequest) -> operations.ContainerProjectsZonesClustersAddonsResponse:
        r"""Sets the addons for a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersAddonsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_complete_ip_rotation(self, request: operations.ContainerProjectsZonesClustersCompleteIPRotationRequest) -> operations.ContainerProjectsZonesClustersCompleteIPRotationResponse:
        r"""Completes master IP rotation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersCompleteIPRotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_create(self, request: operations.ContainerProjectsZonesClustersCreateRequest) -> operations.ContainerProjectsZonesClustersCreateResponse:
        r"""Creates a cluster, consisting of the specified number and type of Google Compute Engine instances. By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks). One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster. Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_delete(self, request: operations.ContainerProjectsZonesClustersDeleteRequest) -> operations.ContainerProjectsZonesClustersDeleteResponse:
        r"""Deletes the cluster, including the Kubernetes endpoint and all worker nodes. Firewalls and routes that were configured during cluster creation are also deleted. Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_get(self, request: operations.ContainerProjectsZonesClustersGetRequest) -> operations.ContainerProjectsZonesClustersGetResponse:
        r"""Gets the details of a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cluster])
                res.cluster = out

        return res

    
    def container_projects_zones_clusters_legacy_abac(self, request: operations.ContainerProjectsZonesClustersLegacyAbacRequest) -> operations.ContainerProjectsZonesClustersLegacyAbacResponse:
        r"""Enables or disables the ABAC authorization mechanism on a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersLegacyAbacResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_list(self, request: operations.ContainerProjectsZonesClustersListRequest) -> operations.ContainerProjectsZonesClustersListResponse:
        r"""Lists all clusters owned by a project in either the specified zone or all zones.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListClustersResponse])
                res.list_clusters_response = out

        return res

    
    def container_projects_zones_clusters_locations(self, request: operations.ContainerProjectsZonesClustersLocationsRequest) -> operations.ContainerProjectsZonesClustersLocationsResponse:
        r"""Sets the locations for a specific cluster. Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersLocationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_logging(self, request: operations.ContainerProjectsZonesClustersLoggingRequest) -> operations.ContainerProjectsZonesClustersLoggingResponse:
        r"""Sets the logging service for a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersLoggingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_master(self, request: operations.ContainerProjectsZonesClustersMasterRequest) -> operations.ContainerProjectsZonesClustersMasterResponse:
        r"""Updates the master for a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersMasterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_monitoring(self, request: operations.ContainerProjectsZonesClustersMonitoringRequest) -> operations.ContainerProjectsZonesClustersMonitoringResponse:
        r"""Sets the monitoring service for a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersMonitoringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_node_pools_autoscaling(self, request: operations.ContainerProjectsZonesClustersNodePoolsAutoscalingRequest) -> operations.ContainerProjectsZonesClustersNodePoolsAutoscalingResponse:
        r"""Sets the autoscaling settings for the specified node pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersNodePoolsAutoscalingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_node_pools_create(self, request: operations.ContainerProjectsZonesClustersNodePoolsCreateRequest) -> operations.ContainerProjectsZonesClustersNodePoolsCreateResponse:
        r"""Creates a node pool for a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersNodePoolsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_node_pools_delete(self, request: operations.ContainerProjectsZonesClustersNodePoolsDeleteRequest) -> operations.ContainerProjectsZonesClustersNodePoolsDeleteResponse:
        r"""Deletes a node pool from a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersNodePoolsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_node_pools_get(self, request: operations.ContainerProjectsZonesClustersNodePoolsGetRequest) -> operations.ContainerProjectsZonesClustersNodePoolsGetResponse:
        r"""Retrieves the requested node pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersNodePoolsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NodePool])
                res.node_pool = out

        return res

    
    def container_projects_zones_clusters_node_pools_list(self, request: operations.ContainerProjectsZonesClustersNodePoolsListRequest) -> operations.ContainerProjectsZonesClustersNodePoolsListResponse:
        r"""Lists the node pools for a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersNodePoolsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListNodePoolsResponse])
                res.list_node_pools_response = out

        return res

    
    def container_projects_zones_clusters_node_pools_rollback(self, request: operations.ContainerProjectsZonesClustersNodePoolsRollbackRequest) -> operations.ContainerProjectsZonesClustersNodePoolsRollbackResponse:
        r"""Rolls back a previously Aborted or Failed NodePool upgrade. This makes no changes if the last upgrade successfully completed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersNodePoolsRollbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_node_pools_set_management(self, request: operations.ContainerProjectsZonesClustersNodePoolsSetManagementRequest) -> operations.ContainerProjectsZonesClustersNodePoolsSetManagementResponse:
        r"""Sets the NodeManagement options for a node pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersNodePoolsSetManagementResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_node_pools_set_size(self, request: operations.ContainerProjectsZonesClustersNodePoolsSetSizeRequest) -> operations.ContainerProjectsZonesClustersNodePoolsSetSizeResponse:
        r"""Sets the size for a specific node pool. The new size will be used for all replicas, including future replicas created by modifying NodePool.locations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersNodePoolsSetSizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_node_pools_update(self, request: operations.ContainerProjectsZonesClustersNodePoolsUpdateRequest) -> operations.ContainerProjectsZonesClustersNodePoolsUpdateResponse:
        r"""Updates the version and/or image type for the specified node pool.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersNodePoolsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_resource_labels(self, request: operations.ContainerProjectsZonesClustersResourceLabelsRequest) -> operations.ContainerProjectsZonesClustersResourceLabelsResponse:
        r"""Sets labels on a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersResourceLabelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_set_maintenance_policy(self, request: operations.ContainerProjectsZonesClustersSetMaintenancePolicyRequest) -> operations.ContainerProjectsZonesClustersSetMaintenancePolicyResponse:
        r"""Sets the maintenance policy for a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersSetMaintenancePolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_set_master_auth(self, request: operations.ContainerProjectsZonesClustersSetMasterAuthRequest) -> operations.ContainerProjectsZonesClustersSetMasterAuthResponse:
        r"""Sets master auth materials. Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersSetMasterAuthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_set_network_policy(self, request: operations.ContainerProjectsZonesClustersSetNetworkPolicyRequest) -> operations.ContainerProjectsZonesClustersSetNetworkPolicyResponse:
        r"""Enables or disables Network Policy for a cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersSetNetworkPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_start_ip_rotation(self, request: operations.ContainerProjectsZonesClustersStartIPRotationRequest) -> operations.ContainerProjectsZonesClustersStartIPRotationResponse:
        r"""Starts master IP rotation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersStartIPRotationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_clusters_update(self, request: operations.ContainerProjectsZonesClustersUpdateRequest) -> operations.ContainerProjectsZonesClustersUpdateResponse:
        r"""Updates the settings of a specific cluster.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesClustersUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_get_serverconfig(self, request: operations.ContainerProjectsZonesGetServerconfigRequest) -> operations.ContainerProjectsZonesGetServerconfigResponse:
        r"""Returns configuration info about the Google Kubernetes Engine service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/serverconfig", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesGetServerconfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ServerConfig])
                res.server_config = out

        return res

    
    def container_projects_zones_operations_cancel(self, request: operations.ContainerProjectsZonesOperationsCancelRequest) -> operations.ContainerProjectsZonesOperationsCancelResponse:
        r"""Cancels the specified operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def container_projects_zones_operations_get(self, request: operations.ContainerProjectsZonesOperationsGetRequest) -> operations.ContainerProjectsZonesOperationsGetResponse:
        r"""Gets the specified operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/operations/{operationId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def container_projects_zones_operations_list(self, request: operations.ContainerProjectsZonesOperationsListRequest) -> operations.ContainerProjectsZonesOperationsListResponse:
        r"""Lists all operations in a project in a specific zone or all zones.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/projects/{projectId}/zones/{zone}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContainerProjectsZonesOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOperationsResponse])
                res.list_operations_response = out

        return res

    