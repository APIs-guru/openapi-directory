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
    
    req := operations.CloudsearchDebugDatasourcesItemsCheckAccessRequest{
        Security: operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurity{
            Option1: &operations.CloudsearchDebugDatasourcesItemsCheckAccessSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.CloudsearchDebugDatasourcesItemsCheckAccessPathParams{
            Name: "et",
        },
        QueryParams: operations.CloudsearchDebugDatasourcesItemsCheckAccessQueryParams{
            DollarXgafv: "2",
            AccessToken: "expedita",
            Alt: "json",
            Callback: "aut",
            DebugOptionsEnableDebugging: true,
            Fields: "optio",
            Key: "sit",
            OauthToken: "sed",
            PrettyPrint: true,
            QuotaUser: "deserunt",
            UploadType: "quis",
            UploadProtocol: "sunt",
        },
        Request: &shared.Principal{
            GroupResourceName: "illo",
            GsuitePrincipal: &shared.GSuitePrincipal{
                GsuiteDomain: false,
                GsuiteGroupEmail: "asperiores",
                GsuiteUserEmail: "est",
            },
            UserResourceName: "nam",
        },
    }
    
    res, err := s.Debug.CloudsearchDebugDatasourcesItemsCheckAccess(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CheckAccessResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### debug

* `CloudsearchDebugDatasourcesItemsCheckAccess` - Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
* `CloudsearchDebugDatasourcesItemsSearchByViewURL` - Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
* `CloudsearchDebugIdentitysourcesItemsListForunmappedidentity` - Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
* `CloudsearchDebugIdentitysourcesUnmappedidsList` - Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

### indexing

* `CloudsearchIndexingDatasourcesDeleteSchema` - Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
* `CloudsearchIndexingDatasourcesGetSchema` - Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
* `CloudsearchIndexingDatasourcesItemsDelete` - Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `CloudsearchIndexingDatasourcesItemsDeleteQueueItems` - Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `CloudsearchIndexingDatasourcesItemsGet` - Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `CloudsearchIndexingDatasourcesItemsIndex` - Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `CloudsearchIndexingDatasourcesItemsList` - Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `CloudsearchIndexingDatasourcesItemsPoll` - Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `CloudsearchIndexingDatasourcesItemsPush` - Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `CloudsearchIndexingDatasourcesItemsUnreserve` - Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `CloudsearchIndexingDatasourcesItemsUpload` - Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
* `CloudsearchIndexingDatasourcesUpdateSchema` - Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

### media

* `CloudsearchMediaUpload` - Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.

### operations

* `CloudsearchOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `CloudsearchOperationsLroList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

### query

* `CloudsearchQuerySearch` - The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* `CloudsearchQuerySourcesList` - Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
* `CloudsearchQuerySuggest` - Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

### settings

* `CloudsearchSettingsDatasourcesCreate` - Creates a datasource. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsDatasourcesList` - Lists datasources. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsGetCustomer` - Get customer settings. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsSearchapplicationsCreate` - Creates a search application. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsSearchapplicationsDelete` - Deletes a search application. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsSearchapplicationsGet` - Gets the specified search application. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsSearchapplicationsList` - Lists all search applications. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsSearchapplicationsPatch` - Updates a search application. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsSearchapplicationsReset` - Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsSearchapplicationsUpdate` - Updates a search application. **Note:** This API requires an admin account to execute.
* `CloudsearchSettingsUpdateCustomer` - Update customer settings. **Note:** This API requires an admin account to execute.

### stats

* `CloudsearchStatsGetIndex` - Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
* `CloudsearchStatsGetQuery` - Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
* `CloudsearchStatsGetSearchapplication` - Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
* `CloudsearchStatsGetSession` - Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
* `CloudsearchStatsGetUser` - Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
* `CloudsearchStatsIndexDatasourcesGet` - Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
* `CloudsearchStatsQuerySearchapplicationsGet` - Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
* `CloudsearchStatsSessionSearchapplicationsGet` - Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
* `CloudsearchStatsUserSearchapplicationsGet` - Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

### v1

* `CloudsearchInitializeCustomer` - Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
