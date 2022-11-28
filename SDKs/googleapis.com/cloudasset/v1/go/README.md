# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    req := operations.CloudassetAssetsListRequest{
        Security: operations.CloudassetAssetsListSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.CloudassetAssetsListPathParams{
            Parent: "consequatur",
        },
        QueryParams: operations.CloudassetAssetsListQueryParams{
            DollarXgafv: "2",
            AccessToken: "reiciendis",
            Alt: "json",
            AssetTypes: []string{
                "nihil",
            },
            Callback: "optio",
            ContentType: "ACCESS_POLICY",
            Fields: "est",
            Key: "est",
            OauthToken: "quibusdam",
            PageSize: 5280310489059282398,
            PageToken: "autem",
            PrettyPrint: false,
            QuotaUser: "ut",
            ReadTime: "molestias",
            RelationshipTypes: []string{
                "sunt",
                "rerum",
            },
            UploadType: "quas",
            UploadProtocol: "ea",
        },
    }
    
    res, err := s.Assets.CloudassetAssetsList(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.ListAssetsResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### assets

* `CloudassetAssetsList` - Lists assets with time and resource types and returns paged results in response.

### effectiveIamPolicies

* `CloudassetEffectiveIamPoliciesBatchGet` - Gets effective IAM policies for a batch of resources.

### feeds

* `CloudassetFeedsCreate` - Creates a feed in a parent project/folder/organization to listen to its asset updates.
* `CloudassetFeedsList` - Lists all asset feeds in a parent project/folder/organization.

### savedQueries

* `CloudassetSavedQueriesCreate` - Creates a saved query in a parent project/folder/organization.
* `CloudassetSavedQueriesDelete` - Deletes a saved query.
* `CloudassetSavedQueriesGet` - Gets details about a saved query.
* `CloudassetSavedQueriesList` - Lists all saved queries in a parent project/folder/organization.
* `CloudassetSavedQueriesPatch` - Updates a saved query.

### v1

* `CloudassetAnalyzeIamPolicy` - Analyzes IAM policies to answer which identities have what accesses on which resources.
* `CloudassetAnalyzeIamPolicyLongrunning` - Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
* `CloudassetAnalyzeMove` - Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
* `CloudassetAnalyzeOrgPolicies` - Analyzes organization policies under a scope.
* `CloudassetAnalyzeOrgPolicyGovernedAssets` - Analyzes organization policies governed assets (GCP resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either: * resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or * IAM policies.
* `CloudassetAnalyzeOrgPolicyGovernedContainers` - Analyzes organization policies governed containers (projects, folders or organization) under a scope.
* `CloudassetBatchGetAssetsHistory` - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* `CloudassetExportAssets` - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* `CloudassetQueryAssets` - Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.
* `CloudassetSearchAllIamPolicies` - Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
* `CloudassetSearchAllResources` - Searches all Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
