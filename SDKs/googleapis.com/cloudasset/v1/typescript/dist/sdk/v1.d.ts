import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class V1 {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudassetAnalyzeIamPolicy - Analyzes IAM policies to answer which identities have what accesses on which resources.
    **/
    cloudassetAnalyzeIamPolicy(req: operations.CloudassetAnalyzeIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetAnalyzeIamPolicyResponse>;
    /**
     * cloudassetAnalyzeIamPolicyLongrunning - Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
    **/
    cloudassetAnalyzeIamPolicyLongrunning(req: operations.CloudassetAnalyzeIamPolicyLongrunningRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetAnalyzeIamPolicyLongrunningResponse>;
    /**
     * cloudassetAnalyzeMove - Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
    **/
    cloudassetAnalyzeMove(req: operations.CloudassetAnalyzeMoveRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetAnalyzeMoveResponse>;
    /**
     * cloudassetAnalyzeOrgPolicies - Analyzes organization policies under a scope.
    **/
    cloudassetAnalyzeOrgPolicies(req: operations.CloudassetAnalyzeOrgPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetAnalyzeOrgPoliciesResponse>;
    /**
     * cloudassetAnalyzeOrgPolicyGovernedAssets - Analyzes organization policies governed assets (GCP resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either: * resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or * IAM policies.
    **/
    cloudassetAnalyzeOrgPolicyGovernedAssets(req: operations.CloudassetAnalyzeOrgPolicyGovernedAssetsRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetAnalyzeOrgPolicyGovernedAssetsResponse>;
    /**
     * cloudassetAnalyzeOrgPolicyGovernedContainers - Analyzes organization policies governed containers (projects, folders or organization) under a scope.
    **/
    cloudassetAnalyzeOrgPolicyGovernedContainers(req: operations.CloudassetAnalyzeOrgPolicyGovernedContainersRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetAnalyzeOrgPolicyGovernedContainersResponse>;
    /**
     * cloudassetBatchGetAssetsHistory - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
    **/
    cloudassetBatchGetAssetsHistory(req: operations.CloudassetBatchGetAssetsHistoryRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetBatchGetAssetsHistoryResponse>;
    /**
     * cloudassetExportAssets - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
    **/
    cloudassetExportAssets(req: operations.CloudassetExportAssetsRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetExportAssetsResponse>;
    /**
     * cloudassetQueryAssets - Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.
    **/
    cloudassetQueryAssets(req: operations.CloudassetQueryAssetsRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetQueryAssetsResponse>;
    /**
     * cloudassetSearchAllIamPolicies - Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
    **/
    cloudassetSearchAllIamPolicies(req: operations.CloudassetSearchAllIamPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetSearchAllIamPoliciesResponse>;
    /**
     * cloudassetSearchAllResources - Searches all Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.
    **/
    cloudassetSearchAllResources(req: operations.CloudassetSearchAllResourcesRequest, config?: AxiosRequestConfig): Promise<operations.CloudassetSearchAllResourcesResponse>;
}
