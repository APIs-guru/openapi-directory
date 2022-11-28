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
    
req = operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest(
    security=operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams(
        parent="aut",
    ),
    query_params=operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams(
        dollar_xgafv="2",
        access_token="nobis",
        alt="media",
        callback="est",
        fields="magnam",
        key="consequuntur",
        oauth_token="ut",
        pretty_print=False,
        quota_user="earum",
        upload_type="porro",
        upload_protocol="dolorem",
    ),
    request=shared.GoogleCloudRecommendationengineV1beta1CatalogItem(
        category_hierarchies=[
            shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(
                categories=[
                    "aut",
                ],
            ),
            shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy(
                categories=[
                    "odit",
                    "quis",
                ],
            ),
        ],
        description="maiores",
        id="cumque",
        item_attributes=shared.GoogleCloudRecommendationengineV1beta1FeatureMap(
            categorical_features={
                "labore": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList(
                    value=[
                        "sint",
                    ],
                ),
                "nihil": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList(
                    value=[
                        "sint",
                        "est",
                    ],
                ),
            },
            numerical_features={
                "officiis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(
                    value=[
                        11.100000,
                        8.200000,
                        97.099998,
                    ],
                ),
                "voluptatem": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList(
                    value=[
                        8.200000,
                    ],
                ),
            },
        ),
        item_group_id="dolorum",
        language_code="harum",
        product_metadata=shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem(
            available_quantity="officiis",
            canonical_product_uri="corrupti",
            costs={
                "sunt": 90.199997,
                "voluptate": 37.200001,
                "ea": 90.199997,
            },
            currency_code="explicabo",
            exact_price=shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice(
                display_price=25.200001,
                original_price=99.199997,
            ),
            images=[
                shared.GoogleCloudRecommendationengineV1beta1Image(
                    height=7746893585940478322,
                    uri="atque",
                    width=5348356178737988486,
                ),
                shared.GoogleCloudRecommendationengineV1beta1Image(
                    height=401863722195270076,
                    uri="et",
                    width=6249467380623826659,
                ),
                shared.GoogleCloudRecommendationengineV1beta1Image(
                    height=5112485330184857086,
                    uri="ipsum",
                    width=4962516065621625535,
                ),
            ],
            price_range=shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange(
                max=57.099998,
                min=16.200001,
            ),
            stock_state="PREORDER",
        ),
        tags=[
            "deserunt",
            "expedita",
            "illum",
        ],
        title="vitae",
    ),
)
    
res = s.projects.recommendationengine_projects_locations_catalogs_catalog_items_create(req)

if res.google_cloud_recommendationengine_v1beta1_catalog_item is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `recommendationengine_projects_locations_catalogs_catalog_items_create` - Creates a catalog item.
* `recommendationengine_projects_locations_catalogs_catalog_items_import` - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* `recommendationengine_projects_locations_catalogs_catalog_items_list` - Gets a list of catalog items.
* `recommendationengine_projects_locations_catalogs_catalog_items_patch` - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* `recommendationengine_projects_locations_catalogs_event_stores_placements_predict` - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* `recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_create` - Register an API key for use with predict method.
* `recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_delete` - Unregister an apiKey from using for predict method.
* `recommendationengine_projects_locations_catalogs_event_stores_prediction_api_key_registrations_list` - List the registered apiKeys for use with predict method.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_collect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_import` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_list` - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_purge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_rejoin` - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* `recommendationengine_projects_locations_catalogs_event_stores_user_events_write` - Writes a single user event.
* `recommendationengine_projects_locations_catalogs_list` - Lists all the catalog configurations associated with the project.
* `recommendationengine_projects_locations_catalogs_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `recommendationengine_projects_locations_catalogs_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
