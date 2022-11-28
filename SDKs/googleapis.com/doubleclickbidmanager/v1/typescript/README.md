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
    accessToken: "omnis",
    alt: "json",
    asynchronous: true,
    callback: "est",
    fields: "impedit",
    key: "ut",
    oauthToken: "ad",
    prettyPrint: false,
    quotaUser: "et",
    uploadType: "tempore",
    uploadProtocol: "molestiae",
  },
  request: {
    kind: "similique",
    metadata: {
      dataRange: "LAST_7_DAYS",
      format: "XLSX",
      googleCloudStoragePathForLatestReport: "voluptatem",
      googleDrivePathForLatestReport: "illum",
      latestReportRunTimeMs: "soluta",
      locale: "ut",
      reportCount: 2930063880160599793,
      running: false,
      sendNotification: false,
      shareEmailAddress: [
        "totam",
        "repellat",
      ],
      title: "molestiae",
    },
    params: {
      filters: [
        {
          type: "FILTER_OS",
          value: "ad",
        },
      ],
      groupBys: [
        "FILTER_DATA_SOURCE",
        "FILTER_INSERTION_ORDER_GOAL_VALUE",
      ],
      includeInviteData: true,
      metrics: [
        "METRIC_ACTIVE_VIEW_DISTRIBUTION_VIEWABLE",
        "METRIC_CLICKS",
        "METRIC_WIN_LOSS_DEAL_TARGETED_IMPRESSIONS",
      ],
      options: {
        includeOnlyTargetedUserLists: true,
        pathQueryOptions: {
          channelGrouping: {
            fallbackName: "itaque",
            name: "eligendi",
            rules: [
              {
                disjunctiveMatchStatements: [
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "FILTER_CITY_NAME",
                          match: "EXACT",
                          values: [
                            "alias",
                            "a",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "FILTER_REMARKETING_LIST",
                          match: "UNKNOWN",
                          values: [
                            "ut",
                            "autem",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "FILTER_VIDEO_DURATION_SECONDS",
                          match: "PARTIAL",
                          values: [
                            "sunt",
                            "autem",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "FILTER_TRUEVIEW_IAR_REMARKETING_LIST",
                          match: "PARTIAL",
                          values: [
                            "sunt",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "FILTER_TRUEVIEW_KEYWORD",
                          match: "WILDCARD_EXPRESSION",
                          values: [
                            "eligendi",
                            "magni",
                          ],
                        },
                      },
                      {
                        dimensionFilter: {
                          filter: "FILTER_AGE",
                          match: "EXACT",
                          values: [
                            "rerum",
                            "perferendis",
                            "aspernatur",
                          ],
                        },
                      },
                    ],
                  },
                  {
                    eventFilters: [
                      {
                        dimensionFilter: {
                          filter: "FILTER_PLACEMENT_ALL_YOUTUBE_CHANNELS",
                          match: "EXACT",
                          values: [
                            "aperiam",
                            "minima",
                            "illo",
                          ],
                        },
                      },
                    ],
                  },
                ],
                name: "quam",
              },
            ],
          },
          pathFilters: [
            {
              eventFilters: [
                {
                  dimensionFilter: {
                    filter: "FILTER_MOBILE_GEO",
                    match: "WILDCARD_EXPRESSION",
                    values: [
                      "sunt",
                      "sed",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "FILTER_YOUTUBE_AD_VIDEO_ID",
                    match: "EXACT",
                    values: [
                      "impedit",
                      "provident",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "FILTER_DEVICE_MODEL",
                    match: "PARTIAL",
                    values: [
                      "nihil",
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
                    filter: "FILTER_CM360_PLACEMENT_ID",
                    match: "EXACT",
                    values: [
                      "distinctio",
                      "velit",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "FILTER_TRUEVIEW_CONVERSION_TYPE",
                    match: "EXACT",
                    values: [
                      "vel",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "FILTER_BUDGET_SEGMENT_END_DATE",
                    match: "PARTIAL",
                    values: [
                      "dolor",
                      "iure",
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
                    filter: "FILTER_ZIP_CODE",
                    match: "WILDCARD_EXPRESSION",
                    values: [
                      "qui",
                      "libero",
                    ],
                  },
                },
                {
                  dimensionFilter: {
                    filter: "FILTER_CREATIVE_WIDTH",
                    match: "WILDCARD_EXPRESSION",
                    values: [
                      "totam",
                    ],
                  },
                },
              ],
              pathMatchPosition: "FIRST",
            },
          ],
        },
      },
      type: "TYPE_INVENTORY_AVAILABILITY",
    },
    queryId: "ullam",
    reportDataEndTimeMs: "rem",
    reportDataStartTimeMs: "at",
    schedule: {
      endTimeMs: "aut",
      frequency: "WEEKLY",
      nextRunMinuteOfDay: 8789873767134667831,
      nextRunTimezoneCode: "eveniet",
      startTimeMs: "est",
    },
    timezoneCode: "ut",
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
