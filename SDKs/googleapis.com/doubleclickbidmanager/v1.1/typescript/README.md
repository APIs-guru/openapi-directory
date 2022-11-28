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
import { DoubleclickbidmanagerQueriesCreatequeryRequest, DoubleclickbidmanagerQueriesCreatequeryResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: DoubleclickbidmanagerQueriesCreatequeryRequest = {
  security: {
    oauth2: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    }
    oauth2c: {
      authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
    },
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "ipsa",
    alt: "proto",
    asynchronous: false,
    callback: "et",
    fields: "ducimus",
    key: "maxime",
    oauthToken: "id",
    prettyPrint: true,
    quotaUser: "dolorem",
    uploadType: "omnis",
    uploadProtocol: "esse",
  },
  request: {
    kind: "ratione",
    metadata: {
      dataRange: "PREVIOUS_HALF_MONTH",
      format: "XLSX",
      googleCloudStoragePathForLatestReport: "quibusdam",
      googleDrivePathForLatestReport: "libero",
      latestReportRunTimeMs: "unde",
      locale: "laudantium",
      reportCount: 2054487096157752534,
      running: true,
      sendNotification: true,
      shareEmailAddress: [
        "atque",
        "et",
        "dolores",
      ],
      title: "voluptates",
    },
    params: {
      filters: [
        {
          type: "FILTER_AUDIENCE_TYPE",
          value: "et",
        },
      ],
      groupBys: [
        "FILTER_NOT_SUPPORTED",
      ],
      includeInviteData: false,
      metrics: [
        "METRIC_INVALID_BEGIN_TO_RENDER_IMPRESSIONS",
        "METRIC_ACTIVE_VIEW_PERCENT_VISIBLE_SECOND_QUAR",
        "METRIC_VENDOR_BLOCKED_ADS",
      ],
      options: {
        includeOnlyTargetedUserLists: true,
        pathQueryOptions: {
          channelGrouping: {
            fallbackName: "est",
            name: "asperiores",
            rules: [
              {
                disjunctiveMatchStatements: [
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "FILTER_EXTENSION_STATUS",
                          match: "UNKNOWN",
                          values: [
                            "rerum",
                            "repellat",
                            "sed",
                          ],
                        },
                      },
                    ],
                  },
                ],
                name: "at",
              },
              {
                disjunctiveMatchStatements: [
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "FILTER_ADVERTISER_CURRENCY",
                          match: "UNKNOWN",
                          values: [
                            "dolorem",
                            "id",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "FILTER_TRUEVIEW_DETAILED_DEMOGRAPHICS",
                          match: "EXACT",
                          values: [
                            "repudiandae",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "FILTER_AUDIENCE_LIST_COST",
                          match: "WILDCARD_EXPRESSION",
                          values: [
                            "sunt",
                            "sunt",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "FILTER_TRUEVIEW_IAR_CATEGORY",
                          match: "PARTIAL",
                          values: [
                            "sunt",
                          ],
                        },
                      },
                    ],
                  },
                ],
                name: "vel",
              },
            ],
          },
          pathFilters: [
            {
              eventFilters: [
                {
                  dimensionFilter: {
                    filter: "FILTER_DOMAIN",
                    match: "BEGINS_WITH",
                    values: [
                      "ut",
                      "quod",
                      "aperiam",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "FILTER_VERIFICATION_AUDIBILITY_COMPLETE",
                    match: "UNKNOWN",
                    values: [
                      "dolores",
                      "quo",
                    ],
                  },
                },
              ],
              pathMatchPosition: "FIRST",
            },
            {
              eventFilters: [
                {
                  dimensionFilter: {
                    filter: "FILTER_CREATIVE",
                    match: "WILDCARD_EXPRESSION",
                    values: [
                      "magni",
                      "error",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "FILTER_GMAIL_AGE",
                    match: "PARTIAL",
                    values: [
                      "placeat",
                      "vel",
                    ],
                  },
                },
              ],
              pathMatchPosition: "LAST",
            },
            {
              eventFilters: [
                {
                  dimensionFilter: {
                    filter: "FILTER_PLATFORM",
                    match: "WILDCARD_EXPRESSION",
                    values: [
                      "fugit",
                      "accusamus",
                      "quas",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "FILTER_TRUEVIEW_AD",
                    match: "WILDCARD_EXPRESSION",
                    values: [
                      "in",
                      "maxime",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "FILTER_ADVERTISER",
                    match: "UNKNOWN",
                    values: [
                      "assumenda",
                      "molestias",
                    ],
                  },
                },
              ],
              pathMatchPosition: "ANY",
            },
          ],
        },
      },
      type: "TYPE_NIELSEN_DAILY_REACH_BUILD",
    },
    queryId: "totam",
    reportDataEndTimeMs: "facilis",
    reportDataStartTimeMs: "cumque",
    schedule: {
      endTimeMs: "aut",
      frequency: "SEMI_MONTHLY",
      nextRunMinuteOfDay: 1566211064787120766,
      nextRunTimezoneCode: "ducimus",
      startTimeMs: "possimus",
    },
    timezoneCode: "qui",
  },
};

sdk.queries.doubleclickbidmanagerQueriesCreatequery(req).then((res: DoubleclickbidmanagerQueriesCreatequeryResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### queries

* `doubleclickbidmanagerQueriesCreatequery` - Creates a query.
* `doubleclickbidmanagerQueriesDeletequery` - Deletes a stored query as well as the associated stored reports.
* `doubleclickbidmanagerQueriesGetquery` - Retrieves a stored query.
* `doubleclickbidmanagerQueriesListqueries` - Retrieves stored queries.
* `doubleclickbidmanagerQueriesRunquery` - Runs a stored query to generate a report.

### reports

* `doubleclickbidmanagerReportsListreports` - Retrieves stored reports.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
