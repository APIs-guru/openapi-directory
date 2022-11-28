import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class V1:
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

    
    def cloudasset_analyze_iam_policy(self, request: operations.CloudassetAnalyzeIamPolicyRequest) -> operations.CloudassetAnalyzeIamPolicyResponse:
        r"""Analyzes IAM policies to answer which identities have what accesses on which resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{scope}:analyzeIamPolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetAnalyzeIamPolicyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyzeIamPolicyResponse])
                res.analyze_iam_policy_response = out

        return res

    
    def cloudasset_analyze_iam_policy_longrunning(self, request: operations.CloudassetAnalyzeIamPolicyLongrunningRequest) -> operations.CloudassetAnalyzeIamPolicyLongrunningResponse:
        r"""Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{scope}:analyzeIamPolicyLongrunning", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetAnalyzeIamPolicyLongrunningResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudasset_analyze_move(self, request: operations.CloudassetAnalyzeMoveRequest) -> operations.CloudassetAnalyzeMoveResponse:
        r"""Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resource}:analyzeMove", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetAnalyzeMoveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyzeMoveResponse])
                res.analyze_move_response = out

        return res

    
    def cloudasset_analyze_org_policies(self, request: operations.CloudassetAnalyzeOrgPoliciesRequest) -> operations.CloudassetAnalyzeOrgPoliciesResponse:
        r"""Analyzes organization policies under a scope.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{scope}:analyzeOrgPolicies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetAnalyzeOrgPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyzeOrgPoliciesResponse])
                res.analyze_org_policies_response = out

        return res

    
    def cloudasset_analyze_org_policy_governed_assets(self, request: operations.CloudassetAnalyzeOrgPolicyGovernedAssetsRequest) -> operations.CloudassetAnalyzeOrgPolicyGovernedAssetsResponse:
        r"""Analyzes organization policies governed assets (GCP resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either: * resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or * IAM policies.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{scope}:analyzeOrgPolicyGovernedAssets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetAnalyzeOrgPolicyGovernedAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyzeOrgPolicyGovernedAssetsResponse])
                res.analyze_org_policy_governed_assets_response = out

        return res

    
    def cloudasset_analyze_org_policy_governed_containers(self, request: operations.CloudassetAnalyzeOrgPolicyGovernedContainersRequest) -> operations.CloudassetAnalyzeOrgPolicyGovernedContainersResponse:
        r"""Analyzes organization policies governed containers (projects, folders or organization) under a scope.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{scope}:analyzeOrgPolicyGovernedContainers", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetAnalyzeOrgPolicyGovernedContainersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AnalyzeOrgPolicyGovernedContainersResponse])
                res.analyze_org_policy_governed_containers_response = out

        return res

    
    def cloudasset_batch_get_assets_history(self, request: operations.CloudassetBatchGetAssetsHistoryRequest) -> operations.CloudassetBatchGetAssetsHistoryResponse:
        r"""Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:batchGetAssetsHistory", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetBatchGetAssetsHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetAssetsHistoryResponse])
                res.batch_get_assets_history_response = out

        return res

    
    def cloudasset_export_assets(self, request: operations.CloudassetExportAssetsRequest) -> operations.CloudassetExportAssetsResponse:
        r"""Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:exportAssets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetExportAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudasset_query_assets(self, request: operations.CloudassetQueryAssetsRequest) -> operations.CloudassetQueryAssetsResponse:
        r"""Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}:queryAssets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetQueryAssetsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.QueryAssetsResponse])
                res.query_assets_response = out

        return res

    
    def cloudasset_search_all_iam_policies(self, request: operations.CloudassetSearchAllIamPoliciesRequest) -> operations.CloudassetSearchAllIamPoliciesResponse:
        r"""Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{scope}:searchAllIamPolicies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetSearchAllIamPoliciesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAllIamPoliciesResponse])
                res.search_all_iam_policies_response = out

        return res

    
    def cloudasset_search_all_resources(self, request: operations.CloudassetSearchAllResourcesRequest) -> operations.CloudassetSearchAllResourcesResponse:
        r"""Searches all Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{scope}:searchAllResources", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudassetSearchAllResourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchAllResourcesResponse])
                res.search_all_resources_response = out

        return res

    