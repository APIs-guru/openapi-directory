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
import { RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest, RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  pathParams: {
    parent: "aut",
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "nobis",
    alt: "media",
    callback: "est",
    fields: "magnam",
    key: "consequuntur",
    oauthToken: "ut",
    prettyPrint: false,
    quotaUser: "earum",
    uploadType: "porro",
    uploadProtocol: "dolorem",
  },
  request: {
    categoryHierarchies: [
      {
        categories: [
          "aut",
        ],
      },
      {
        categories: [
          "odit",
          "quis",
        ],
      },
    ],
    description: "maiores",
    id: "cumque",
    itemAttributes: {
      categoricalFeatures: {
        "labore": {
          value: [
            "sint",
          ],
        },
        "nihil": {
          value: [
            "sint",
            "est",
          ],
        },
      },
      numericalFeatures: {
        "officiis": {
          value: [
            11.100000,
            8.200000,
            97.099998,
          ],
        },
        "voluptatem": {
          value: [
            8.200000,
          ],
        },
      },
    },
    itemGroupId: "dolorum",
    languageCode: "harum",
    productMetadata: {
      availableQuantity: "officiis",
      canonicalProductUri: "corrupti",
      costs: {
        "sunt": 90.199997,
        "voluptate": 37.200001,
        "ea": 90.199997,
      },
      currencyCode: "explicabo",
      exactPrice: {
        displayPrice: 25.200001,
        originalPrice: 99.199997,
      },
      images: [
        {
          height: 7746893585940478322,
          uri: "atque",
          width: 5348356178737988486,
        },
        {
          height: 401863722195270076,
          uri: "et",
          width: 6249467380623826659,
        },
        {
          height: 5112485330184857086,
          uri: "ipsum",
          width: 4962516065621625535,
        },
      ],
      priceRange: {
        max: 57.099998,
        min: 16.200001,
      },
      stockState: "PREORDER",
    },
    tags: [
      "deserunt",
      "expedita",
      "illum",
    ],
    title: "vitae",
  },
};

sdk.projects.recommendationengineProjectsLocationsCatalogsCatalogItemsCreate(req).then((res: RecommendationengineProjectsLocationsCatalogsCatalogItemsCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `recommendationengineProjectsLocationsCatalogsCatalogItemsCreate` - Creates a catalog item.
* `recommendationengineProjectsLocationsCatalogsCatalogItemsImport` - Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.
* `recommendationengineProjectsLocationsCatalogsCatalogItemsList` - Gets a list of catalog items.
* `recommendationengineProjectsLocationsCatalogsCatalogItemsPatch` - Updates a catalog item. Partial updating is supported. Non-existing items will be created.
* `recommendationengineProjectsLocationsCatalogsEventStoresPlacementsPredict` - Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).
* `recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsCreate` - Register an API key for use with predict method.
* `recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsDelete` - Unregister an apiKey from using for predict method.
* `recommendationengineProjectsLocationsCatalogsEventStoresPredictionApiKeyRegistrationsList` - List the registered apiKeys for use with predict method.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsCollect` - Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsImport` - Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsList` - Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsPurge` - Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsRejoin` - Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.
* `recommendationengineProjectsLocationsCatalogsEventStoresUserEventsWrite` - Writes a single user event.
* `recommendationengineProjectsLocationsCatalogsList` - Lists all the catalog configurations associated with the project.
* `recommendationengineProjectsLocationsCatalogsOperationsGet` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `recommendationengineProjectsLocationsCatalogsOperationsList` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
