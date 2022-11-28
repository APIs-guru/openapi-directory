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
    
req = operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeRequest(
    security=operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributePathParams(
        attributes_config="quia",
    ),
    query_params=operations.RetailProjectsLocationsCatalogsAttributesConfigAddCatalogAttributeQueryParams(
        dollar_xgafv="1",
        access_token="aperiam",
        alt="json",
        callback="et",
        fields="quia",
        key="laudantium",
        oauth_token="rerum",
        pretty_print=True,
        quota_user="soluta",
        upload_type="qui",
        upload_protocol="nihil",
    ),
    request=shared.GoogleCloudRetailV2betaAddCatalogAttributeRequestInput(
        catalog_attribute=shared.GoogleCloudRetailV2betaCatalogAttributeInput(
            dynamic_facetable_option="DYNAMIC_FACETABLE_ENABLED",
            exact_searchable_option="EXACT_SEARCHABLE_OPTION_UNSPECIFIED",
            indexable_option="INDEXABLE_DISABLED",
            key="sint",
            recommendations_filtering_option="RECOMMENDATIONS_FILTERING_ENABLED",
            retrievable_option="RETRIEVABLE_OPTION_UNSPECIFIED",
            searchable_option="SEARCHABLE_OPTION_UNSPECIFIED",
        ),
    ),
)
    
res = s.projects.retail_projects_locations_catalogs_attributes_config_add_catalog_attribute(req)

if res.google_cloud_retail_v2beta_attributes_config is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `retail_projects_locations_catalogs_attributes_config_add_catalog_attribute` - Adds the specified CatalogAttribute to the AttributesConfig. If the CatalogAttribute to add already exists, an ALREADY_EXISTS error is returned.
* `retail_projects_locations_catalogs_attributes_config_batch_remove_catalog_attributes` - Removes all specified CatalogAttributes from the AttributesConfig.
* `retail_projects_locations_catalogs_attributes_config_remove_catalog_attribute` - Removes the specified CatalogAttribute from the AttributesConfig. If the CatalogAttribute to remove does not exist, a NOT_FOUND error is returned.
* `retail_projects_locations_catalogs_attributes_config_replace_catalog_attribute` - Replaces the specified CatalogAttribute in the AttributesConfig by updating the catalog attribute with the same CatalogAttribute.key. If the CatalogAttribute to replace does not exist, a NOT_FOUND error is returned.
* `retail_projects_locations_catalogs_branches_products_add_fulfillment_places` - Incrementally adds place IDs to Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the added place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retail_projects_locations_catalogs_branches_products_add_local_inventories` - Updates local inventory information for a Product at a list of places, while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating inventory information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be modified using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retail_projects_locations_catalogs_branches_products_create` - Creates a Product.
* `retail_projects_locations_catalogs_branches_products_import` - Bulk import of multiple Products. Request processing may be synchronous. Non-existing items are created. Note that it is possible for a subset of the Products to be successfully updated.
* `retail_projects_locations_catalogs_branches_products_list` - Gets a list of Products.
* `retail_projects_locations_catalogs_branches_products_remove_fulfillment_places` - Incrementally removes place IDs from a Product.fulfillment_info.place_ids. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update will be enqueued and processed downstream. As a consequence, when a response is returned, the removed place IDs are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retail_projects_locations_catalogs_branches_products_remove_local_inventories` - Remove local inventory information for a Product at a list of places at a removal timestamp. This process is asynchronous. If the request is valid, the removal will be enqueued and processed downstream. As a consequence, when a response is returned, removals are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. Local inventory information can only be removed using this method. ProductService.CreateProduct and ProductService.UpdateProduct has no effect on local inventories. The returned Operations will be obsolete after 1 day, and GetOperation API will return NOT_FOUND afterwards. If conflicting updates are issued, the Operations associated with the stale updates will not be marked as done until being obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retail_projects_locations_catalogs_branches_products_set_inventory` - Updates inventory information for a Product while respecting the last update timestamps of each inventory field. This process is asynchronous and does not require the Product to exist before updating fulfillment information. If the request is valid, the update is enqueued and processed downstream. As a consequence, when a response is returned, updates are not immediately manifested in the Product queried by ProductService.GetProduct or ProductService.ListProducts. When inventory is updated with ProductService.CreateProduct and ProductService.UpdateProduct, the specified inventory field value(s) overwrite any existing value(s) while ignoring the last update time for this field. Furthermore, the last update times for the specified inventory fields are overwritten by the times of the ProductService.CreateProduct or ProductService.UpdateProduct request. If no inventory fields are set in CreateProductRequest.product, then any pre-existing inventory information for this product is used. If no inventory fields are set in SetInventoryRequest.set_mask, then any existing inventory information is preserved. Pre-existing inventory information can only be updated with ProductService.SetInventory, ProductService.AddFulfillmentPlaces, and ProductService.RemoveFulfillmentPlaces. The returned Operations is obsolete after one day, and the GetOperation API returns `NOT_FOUND` afterwards. If conflicting updates are issued, the Operations associated with the stale updates are not marked as done until they are obsolete. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retail_projects_locations_catalogs_complete_query` - Completes the specified prefix with keyword suggestions. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retail_projects_locations_catalogs_completion_data_import` - Bulk import of processed completion dataset. Request processing is asynchronous. Partial updating is not supported. The operation is successfully finished only after the imported suggestions are indexed successfully and ready for serving. The process takes hours. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retail_projects_locations_catalogs_controls_create` - Creates a Control. If the Control to create already exists, an ALREADY_EXISTS error is returned.
* `retail_projects_locations_catalogs_controls_list` - Lists all Controls by their parent Catalog.
* `retail_projects_locations_catalogs_get_default_branch` - Get which branch is currently default branch set by CatalogService.SetDefaultBranch method under a specified parent catalog.
* `retail_projects_locations_catalogs_list` - Lists all the Catalogs associated with the project.
* `retail_projects_locations_catalogs_models_create` - Creates a new model.
* `retail_projects_locations_catalogs_models_list` - Lists all the models linked to this event store.
* `retail_projects_locations_catalogs_models_pause` - Pauses the training of an existing model.
* `retail_projects_locations_catalogs_models_resume` - Resumes the training of an existing model.
* `retail_projects_locations_catalogs_models_tune` - Tunes an existing model.
* `retail_projects_locations_catalogs_serving_configs_add_control` - Enables a Control on the specified ServingConfig. The control is added in the last position of the list of controls it belongs to (e.g. if it's a facet spec control it will be applied in the last position of servingConfig.facetSpecIds) Returns a ALREADY_EXISTS error if the control has already been applied. Returns a FAILED_PRECONDITION error if the addition could exceed maximum number of control allowed for that type of control.
* `retail_projects_locations_catalogs_serving_configs_create` - Creates a ServingConfig. A maximum of 100 ServingConfigs are allowed in a Catalog, otherwise a FAILED_PRECONDITION error is returned.
* `retail_projects_locations_catalogs_serving_configs_delete` - Deletes a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
* `retail_projects_locations_catalogs_serving_configs_list` - Lists all ServingConfigs linked to this catalog.
* `retail_projects_locations_catalogs_serving_configs_patch` - Updates a ServingConfig.
* `retail_projects_locations_catalogs_serving_configs_predict` - Makes a recommendation prediction.
* `retail_projects_locations_catalogs_serving_configs_remove_control` - Disables a Control on the specified ServingConfig. The control is removed from the ServingConfig. Returns a NOT_FOUND error if the Control is not enabled for the ServingConfig.
* `retail_projects_locations_catalogs_serving_configs_search` - Performs a search. This feature is only available for users who have Retail Search enabled. Enable Retail Search on Cloud Console before using this feature.
* `retail_projects_locations_catalogs_set_default_branch` - Set a specified branch id as default branch. API methods such as SearchService.Search, ProductService.GetProduct, ProductService.ListProducts will treat requests using "default_branch" to the actual branch id set as default. For example, if `projects/*/locations/*/catalogs/*/branches/1` is set as default, setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/default_branch` is equivalent to setting SearchRequest.branch to `projects/*/locations/*/catalogs/*/branches/1`. Using multiple branches can be useful when developers would like to have a staging branch to test and verify for future usage. When it becomes ready, developers switch on the staging branch using this API while keeping using `projects/*/locations/*/catalogs/*/branches/default_branch` as SearchRequest.branch to route the traffic to this staging branch. CAUTION: If you have live predict/search traffic, switching the default branch could potentially cause outages if the ID space of the new branch is very different from the old one. More specifically: * PredictionService will only return product IDs from branch {newBranch}. * SearchService will only return product IDs from branch {newBranch} (if branch is not explicitly set). * UserEventService will only join events with products from branch {newBranch}.
* `retail_projects_locations_catalogs_user_events_collect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Retail API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
* `retail_projects_locations_catalogs_user_events_import` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. `Operation.response` is of type `ImportResponse`. Note that it is possible for a subset of the items to be successfully inserted. `Operation.metadata` is of type `ImportMetadata`.
* `retail_projects_locations_catalogs_user_events_purge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `retail_projects_locations_catalogs_user_events_rejoin` - Starts a user-event rejoin operation with latest product catalog. Events are not annotated with detailed product information for products that are missing from the catalog when the user event is ingested. These events are stored as unjoined events with limited usage on training and serving. You can use this method to start a join operation on specified events with the latest version of product catalog. You can also use this method to correct events joined with the wrong product catalog. A rejoin operation can take hours or days to complete.
* `retail_projects_locations_catalogs_user_events_write` - Writes a single user event.
* `retail_projects_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `retail_projects_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
