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
import { DoubleclickbidmanagerQueriesCreateRequest, DoubleclickbidmanagerQueriesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DoubleclickbidmanagerQueriesCreateRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "2",
    accessToken: "alias",
    alt: "proto",
    callback: "commodi",
    fields: "sunt",
    key: "corrupti",
    oauthToken: "voluptatem",
    prettyPrint: false,
    quotaUser: "molestiae",
    uploadType: "asperiores",
    uploadProtocol: "consequatur",
  },
  request: {
    metadata: {
      dataRange: {
        customEndDate: {
          day: 6671789434805244583,
          month: 5212482904067058666,
          year: 6059164999202033981,
        },
        customStartDate: {
          day: 7939716795557568095,
          month: 4222494168206318085,
          year: 1307568881775119472,
        },
        range: "YEAR_TO_DATE",
      },
      format: "XLSX",
      sendNotification: false,
      shareEmailAddress: [
        "dolorem",
        "omnis",
        "delectus",
      ],
      title: "corrupti",
    },
    params: {
      filters: [
        {
          type: "nesciunt",
          value: "voluptatem",
        },
      ],
      groupBys: [
        "quo",
        "eaque",
      ],
      metrics: [
        "officiis",
        "asperiores",
      ],
      options: {
        includeOnlyTargetedUserLists: false,
        pathQueryOptions: {
          channelGrouping: {
            fallbackName: "qui",
            name: "corporis",
            rules: [
              {
                disjunctiveMatchStatements: [
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "ipsa",
                          match: "PARTIAL",
                          values: [
                            "possimus",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "illo",
                          match: "WILDCARD_EXPRESSION",
                          values: [
                            "aperiam",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "cumque",
                          match: "BEGINS_WITH",
                          values: [
                            "dolorum",
                            "et",
                          ],
                        },
                      },
                    ],
                  },
                ],
                name: "velit",
              },
              {
                disjunctiveMatchStatements: [
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "sequi",
                          match: "WILDCARD_EXPRESSION",
                          values: [
                            "modi",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "quia",
                          match: "UNKNOWN",
                          values: [
                            "accusantium",
                            "ut",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "modi",
                          match: "UNKNOWN",
                          values: [
                            "iusto",
                            "esse",
                            "repudiandae",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "consequatur",
                          match: "UNKNOWN",
                          values: [
                            "accusamus",
                            "iste",
                            "animi",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "iste",
                          match: "UNKNOWN",
                          values: [
                            "perspiciatis",
                            "deserunt",
                            "dolorem",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "sint",
                          match: "PARTIAL",
                          values: [
                            "vel",
                          ],
                        },
                      },
                    ],
                  },
                ],
                name: "quia",
              },
              {
                disjunctiveMatchStatements: [
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "est",
                          match: "UNKNOWN",
                          values: [
                            "sint",
                            "velit",
                            "et",
                          ],
                        },
                      },
                    ],
                  },
                ],
                name: "harum",
              },
            ],
          },
          pathFilters: [
            {
              eventFilters: [
                {
                  dimensionFilter: {
                    filter: "recusandae",
                    match: "EXACT",
                    values: [
                      "dolor",
                      "atque",
                      "mollitia",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "rerum",
                    match: "EXACT",
                    values: [
                      "distinctio",
                      "reprehenderit",
                      "dolorem",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "omnis",
                    match: "UNKNOWN",
                    values: [
                      "itaque",
                      "consequuntur",
                      "in",
                    ],
                  },
                },
              ],
              pathMatchPosition: "FIRST",
            },
          ],
        },
      },
      type: "STANDARD",
    },
    schedule: {
      endDate: {
        day: 1398871752352432732,
        month: 496797688226034688,
        year: 2217355476950766575,
      },
      frequency: "DAILY",
      nextRunTimezoneCode: "qui",
      startDate: {
        day: 1533745246519513631,
        month: 7560247571997630603,
        year: 8121837298909135117,
      },
    },
  },
};

sdk.queries.doubleclickbidmanagerQueriesCreate(req).then((res: DoubleclickbidmanagerQueriesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### queries

* `doubleclickbidmanagerQueriesCreate` - Creates a query.
* `doubleclickbidmanagerQueriesDelete` - Deletes a query as well as the associated reports.
* `doubleclickbidmanagerQueriesGet` - Retrieves a query.
* `doubleclickbidmanagerQueriesList` - Lists queries created by the current user.
* `doubleclickbidmanagerQueriesReportsGet` - Retrieves a report.
* `doubleclickbidmanagerQueriesReportsList` - Lists reports associated with a query.
* `doubleclickbidmanagerQueriesRun` - Runs a stored query to generate a report.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
