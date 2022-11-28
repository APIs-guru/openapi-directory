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
    
    req := operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest{
        Security: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams{
            AttributesConfig: "asperiores",
        },
        QueryParams: operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams{
            DollarXgafv: "1",
            AccessToken: "qui",
            Alt: "proto",
            Callback: "ipsum",
            Fields: "vel",
            Key: "repellendus",
            OauthToken: "molestiae",
            PrettyPrint: true,
            QuotaUser: "qui",
            UploadType: "ratione",
            UploadProtocol: "sit",
        },
        Request: &shared.GoogleCloudRetailV2alphaAddCatalogAttributeRequestInput{
            CatalogAttribute: &shared.GoogleCloudRetailV2alphaCatalogAttributeInput{
                DynamicFacetableOption: "DYNAMIC_FACETABLE_OPTION_UNSPECIFIED",
                ExactSearchableOption: "EXACT_SEARCHABLE_DISABLED",
                IndexableOption: "INDEXABLE_DISABLED",
                Key: "fugit",
                RecommendationsFilteringOption: "RECOMMENDATIONS_FILTERING_DISABLED",
                RetrievableOption: "RETRIEVABLE_OPTION_UNSPECIFIED",
                SearchableOption: "SEARCHABLE_ENABLED",
            },
        },
    }
    
    res, err := s.Projects.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRetailV2alphaAttributesConfig != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttribute` - Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
* `RetailProjectsLocationsCatalogsAttributesConfigBatchRemoveCatalogAttributes` - Removes all specified CatalogAttributes from the AttributesConfig.
* `RetailProjectsLocationsCatalogsAttributesConfigRemoveCatalogAttribute` - Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
* `RetailProjectsLocationsCatalogsAttributesConfigReplaceCatalogAttribute` - Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
* `RetailProjectsLocationsCatalogsBranchesProductsAddFulfillmentPlaces` - Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `RetailProjectsLocationsCatalogsBranchesProductsAddLocalInventories` - Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `RetailProjectsLocationsCatalogsBranchesProductsCreate` - Creates a Product.
* `RetailProjectsLocationsCatalogsBranchesProductsImport` - Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
* `RetailProjectsLocationsCatalogsBranchesProductsList` - Gets a list of Products.
* `RetailProjectsLocationsCatalogsBranchesProductsPurge` - Permanently deletes all selected Products under a branch. This process is asynchronous. If the request is valid, the removal will be enqueued and processed offline. Depending on the number of Products, this operation could take hours to complete. Before the operation completes, some Products may still be returned by ProductService.GetProduct or ProductService.ListProducts. Depending on the number of Products, this operation could take hours to complete. To get a sample of Products that would be deleted, set PurgeProductsRequest.force to false.
* `RetailProjectsLocationsCatalogsBranchesProductsRemoveFulfillmentPlaces` - Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `RetailProjectsLocationsCatalogsBranchesProductsRemoveLocalInventories` - Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `RetailProjectsLocationsCatalogsBranchesProductsSetInventory` - Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `RetailProjectsLocationsCatalogsCompleteQuery` - Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `RetailProjectsLocationsCatalogsCompletionDataImport` - Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `RetailProjectsLocationsCatalogsControlsCreate` - Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
* `RetailProjectsLocationsCatalogsControlsList` - Lists all Controls by their parent Catalog.
* `RetailProjectsLocationsCatalogsGetDefaultBranch` - Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
* `RetailProjectsLocationsCatalogsList` - Lists all the Catalogs associated with the project.
* `RetailProjectsLocationsCatalogsModelsCreate` - Creates a new model.
* `RetailProjectsLocationsCatalogsModelsList` - Lists all the models linked to this event store.
* `RetailProjectsLocationsCatalogsModelsPause` - Pauses the training of an existing model.
* `RetailProjectsLocationsCatalogsModelsResume` - Resumes the training of an existing model.
* `RetailProjectsLocationsCatalogsModelsTune` - Tunes an existing model.
* `RetailProjectsLocationsCatalogsServingConfigsAddControl` - Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
* `RetailProjectsLocationsCatalogsServingConfigsCreate` - Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
* `RetailProjectsLocationsCatalogsServingConfigsDelete` - Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
* `RetailProjectsLocationsCatalogsServingConfigsList` - Lists all ServingConfigs linked to this catalog.
* `RetailProjectsLocationsCatalogsServingConfigsPatch` - Updates a ServingConfig.
* `RetailProjectsLocationsCatalogsServingConfigsPredict` - Makes a recommendation prediction.
* `RetailProjectsLocationsCatalogsServingConfigsRemoveControl` - Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
* `RetailProjectsLocationsCatalogsServingConfigsSearch` - Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `RetailProjectsLocationsCatalogsSetDefaultBranch` - Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
* `RetailProjectsLocationsCatalogsUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* `RetailProjectsLocationsCatalogsUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
* `RetailProjectsLocationsCatalogsUserEventsPurge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `RetailProjectsLocationsCatalogsUserEventsRejoin` - Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
* `RetailProjectsLocationsCatalogsUserEventsWrite` - Writes a single user event.
* `RetailProjectsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `RetailProjectsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
