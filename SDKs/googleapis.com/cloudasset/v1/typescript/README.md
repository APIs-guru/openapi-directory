# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { CloudassetAssetsListRequest, CloudassetAssetsListResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: CloudassetAssetsListRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "consequatur",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "reiciendis",
    alt: "json",
    assetTypes: [
      "nihil",
    ],
    callback: "optio",
    contentType: "ACCESS_POLICY",
    fields: "est",
    key: "est",
    oauthToken: "quibusdam",
    pageSize: 5280310489059282398,
    pageToken: "autem",
    prettyPrint: false,
    quotaUser: "ut",
    readTime: "molestias",
    relationshipTypes: [
      "sunt",
      "rerum",
    ],
    uploadType: "quas",
    uploadProtocol: "ea",
  },
};

sdk.assets.cloudassetAssetsList(req).then((res: CloudassetAssetsListResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### assets

* `cloudassetAssetsList` - Lists assets with time and resource types and returns paged results in response.

### effectiveIamPolicies

* `cloudassetEffectiveIamPoliciesBatchGet` - Gets effective IAM policies for a batch of resources.

### feeds

* `cloudassetFeedsCreate` - Creates a feed in a parent project/folder/organization to listen to its asset updates.
* `cloudassetFeedsList` - Lists all asset feeds in a parent project/folder/organization.

### savedQueries

* `cloudassetSavedQueriesCreate` - Creates a saved query in a parent project/folder/organization.
* `cloudassetSavedQueriesDelete` - Deletes a saved query.
* `cloudassetSavedQueriesGet` - Gets details about a saved query.
* `cloudassetSavedQueriesList` - Lists all saved queries in a parent project/folder/organization.
* `cloudassetSavedQueriesPatch` - Updates a saved query.

### v1

* `cloudassetAnalyzeIamPolicy` - Analyzes IAM policies to answer which identities have what accesses on which resources.
* `cloudassetAnalyzeIamPolicyLongrunning` - Analyzes IAM policies asynchronously to answer which identities have what accesses on which resources, and writes the analysis results to a Google Cloud Storage or a BigQuery destination. For Cloud Storage destination, the output format is the JSON format that represents a AnalyzeIamPolicyResponse. This method implements the google.longrunning.Operation, which allows you to track the operation status. We recommend intervals of at least 2 seconds with exponential backoff retry to poll the operation result. The metadata contains the metadata for the long-running operation.
* `cloudassetAnalyzeMove` - Analyze moving a resource to a specified destination without kicking off the actual move. The analysis is best effort depending on the user's permissions of viewing different hierarchical policies and configurations. The policies and configuration are subject to change before the actual resource migration takes place.
* `cloudassetAnalyzeOrgPolicies` - Analyzes organization policies under a scope.
* `cloudassetAnalyzeOrgPolicyGovernedAssets` - Analyzes organization policies governed assets (GCP resources or policies) under a scope. This RPC supports custom constraints and the following 10 canned constraints: * storage.uniformBucketLevelAccess * iam.disableServiceAccountKeyCreation * iam.allowedPolicyMemberDomains * compute.vmExternalIpAccess * appengine.enforceServiceAccountActAsCheck * gcp.resourceLocations * compute.trustedImageProjects * compute.skipDefaultNetworkCreation * compute.requireOsLogin * compute.disableNestedVirtualization This RPC only returns either: * resources of types supported by [searchable asset types](https://cloud.google.com/asset-inventory/docs/supported-asset-types#searchable_asset_types), or * IAM policies.
* `cloudassetAnalyzeOrgPolicyGovernedContainers` - Analyzes organization policies governed containers (projects, folders or organization) under a scope.
* `cloudassetBatchGetAssetsHistory` - Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.
* `cloudassetExportAssets` - Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset Protobuf as columns. This API implements the google.longrunning.Operation API, which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.
* `cloudassetQueryAssets` - Issue a job that queries assets using a SQL statement compatible with [BigQuery Standard SQL](http://cloud/bigquery/docs/reference/standard-sql/enabling-standard-sql). If the query execution finishes within timeout and there's no pagination, the full query results will be returned in the `QueryAssetsResponse`. Otherwise, full query results can be obtained by issuing extra requests with the `job_reference` from the a previous `QueryAssets` call. Note, the query result has approximately 10 GB limitation enforced by BigQuery https://cloud.google.com/bigquery/docs/best-practices-performance-output, queries return larger results will result in errors.
* `cloudassetSearchAllIamPolicies` - Searches all IAM policies within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllIamPolicies` permission on the desired scope, otherwise the request will be rejected.
* `cloudassetSearchAllResources` - Searches all Cloud resources within the specified scope, such as a project, folder, or organization. The caller must be granted the `cloudasset.assets.searchAllResources` permission on the desired scope, otherwise the request will be rejected.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
