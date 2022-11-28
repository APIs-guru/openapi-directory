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
    
    req := operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest{
        Security: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateSecurity{
            Oauth2: shared.SchemeOauth2{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            }
            Oauth2c: shared.SchemeOauth2c{
                Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
            },
        },
        PathParams: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreatePathParams{
            Parent: "aut",
        },
        QueryParams: operations.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateQueryParams{
            DollarXgafv: "2",
            AccessToken: "nobis",
            Alt: "media",
            Callback: "est",
            Fields: "magnam",
            Key: "consequuntur",
            OauthToken: "ut",
            PrettyPrint: false,
            QuotaUser: "earum",
            UploadType: "porro",
            UploadProtocol: "dolorem",
        },
        Request: &shared.GoogleCloudRecommendationengineV1beta1CatalogItem{
            CategoryHierarchies: []shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "aut",
                    },
                },
                shared.GoogleCloudRecommendationengineV1beta1CatalogItemCategoryHierarchy{
                    Categories: []string{
                        "odit",
                        "quis",
                    },
                },
            },
            Description: "maiores",
            ID: "cumque",
            ItemAttributes: &shared.GoogleCloudRecommendationengineV1beta1FeatureMap{
                CategoricalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                    "labore": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "sint",
                        },
                    },
                    "nihil": shared.GoogleCloudRecommendationengineV1beta1FeatureMapStringList{
                        Value: []string{
                            "sint",
                            "est",
                        },
                    },
                },
                NumericalFeatures: map[string]shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                    "officiis": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            11.100000,
                            8.200000,
                            97.099998,
                        },
                    },
                    "voluptatem": shared.GoogleCloudRecommendationengineV1beta1FeatureMapFloatList{
                        Value: []float32{
                            8.200000,
                        },
                    },
                },
            },
            ItemGroupID: "dolorum",
            LanguageCode: "harum",
            ProductMetadata: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItem{
                AvailableQuantity: "officiis",
                CanonicalProductURI: "corrupti",
                Costs: map[string]float32{
                    "sunt": 90.199997,
                    "voluptate": 37.200001,
                    "ea": 90.199997,
                },
                CurrencyCode: "explicabo",
                ExactPrice: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemExactPrice{
                    DisplayPrice: 25.200001,
                    OriginalPrice: 99.199997,
                },
                Images: []shared.GoogleCloudRecommendationengineV1beta1Image{
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 7746893585940478322,
                        URI: "atque",
                        Width: 5348356178737988486,
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 401863722195270076,
                        URI: "et",
                        Width: 6249467380623826659,
                    },
                    shared.GoogleCloudRecommendationengineV1beta1Image{
                        Height: 5112485330184857086,
                        URI: "ipsum",
                        Width: 4962516065621625535,
                    },
                },
                PriceRange: &shared.GoogleCloudRecommendationengineV1beta1ProductCatalogItemPriceRange{
                    Max: 57.099998,
                    Min: 16.200001,
                },
                StockState: "PREORDER",
            },
            Tags: []string{
                "deserunt",
                "expedita",
                "illum",
            },
            Title: "vitae",
        },
    }
    
    res, err := s.Projects.RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.GoogleCloudRecommendationengineV1beta1CatalogItem != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `RecommendationengineProjectsLocationsCatalogsCatalogItemsCreate` - Creates a catalog item.
* `RecommendationengineProjectsLocationsCatalogsCatalogItemsImport` - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* `RecommendationengineProjectsLocationsCatalogsCatalogItemsList` - Gets a list of catalog items.
* `RecommendationengineProjectsLocationsCatalogsCatalogItemsPatch` - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* `RecommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict` - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* `RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsCreate` - Register an API key for use with predict method.
* `RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsDelete` - Unregister an apiKey from using for predict method.
* `RecommendationengineProjectsLocationsCatalogsEventStoresPredictionAPIKeyRegistrationsList` - List the registered apiKeys for use with predict method.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsList` - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin` - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* `RecommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite` - Writes a single user event.
* `RecommendationengineProjectsLocationsCatalogsList` - Lists all the catalog configurations associated with the project.
* `RecommendationengineProjectsLocationsCatalogsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `RecommendationengineProjectsLocationsCatalogsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
