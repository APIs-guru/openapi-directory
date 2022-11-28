# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
req = operations.CloudassetAssetsListRequest(
    security=operations.CloudassetAssetsListSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.CloudassetAssetsListPathParams(
        parent="consequatur",
    ),
    query_params=operations.CloudassetAssetsListQueryParams(
        dollar_xgafv="2",
        access_token="reiciendis",
        alt="json",
        asset_types=[
            "nihil",
        ],
        callback="optio",
        content_type="ACCESS_POLICY",
        fields="est",
        key="est",
        oauth_token="quibusdam",
        page_size=5280310489059282398,
        page_token="autem",
        pretty_print=False,
        quota_user="ut",
        read_time="molestias",
        relationship_types=[
            "sunt",
            "rerum",
        ],
        upload_type="quas",
        upload_protocol="ea",
    ),
)
    
res = s.assets.cloudasset_assets_list(req)

if res.list_assets_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### assets

* `cloudasset_assets_list` - Lists assets with time and resource types and returns paged results in response.

### effectiveIamPolicies

* `cloudasset_effective_iam_policies_batch_get` - Gets effective IAM policies for a batch of resources.

### feeds

* `cloudasset_feeds_create` - Creates a feed in a parent project/folder/organization to listen to its asset updates.
* `cloudasset_feeds_list` - Lists all asset feeds in a parent project/folder/organization.

### savedQueries

* `cloudasset_saved_queries_create` - Creates a saved query in a parent project/folder/organization.
* `cloudasset_saved_queries_delete` - Deletes a saved query.
* `cloudasset_saved_queries_get` - Gets details about a saved query.
* `cloudasset_saved_queries_list` - Lists all saved queries in a parent project/folder/organization.
* `cloudasset_saved_queries_patch` - Updates a saved query.

### v1

* `cloudasset_analyze_iam_policy` - Analyzes IAM policies to answer which identities have what accesses on which resources.
* `cloudasset_analyze_iam_policy_longrunning` - Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
* `cloudasset_analyze_move` - Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
* `cloudasset_analyze_org_policies` - Analyzes organization policies under a scope.
* `cloudasset_analyze_org_policy_governed_assets` - Analyzes organization policies governed assets (GCP resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either: * resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or * IAM policies.
* `cloudasset_analyze_org_policy_governed_containers` - Analyzes organization policies governed containers (projects, folders or organization) under a scope.
* `cloudasset_batch_get_assets_history` - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* `cloudasset_export_assets` - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* `cloudasset_query_assets` - Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.
* `cloudasset_search_all_iam_policies` - Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
* `cloudasset_search_all_resources` - Searches all Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
