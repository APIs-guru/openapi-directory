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
import { MonitoringProjectsAlertPoliciesCreateRequest, MonitoringProjectsAlertPoliciesCreateResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();
    
const req: MonitoringProjectsAlertPoliciesCreateRequest = {
  security: {
    option1: {
      oauth2: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
      oauth2c: {
        authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
      }
    },
  },
  pathParams: {
    name: "veritatis",
  },
  queryParams: {
    dollarXgafv: "1",
    accessToken: "ut",
    alt: "json",
    callback: "atque",
    fields: "molestiae",
    key: "sed",
    oauthToken: "incidunt",
    prettyPrint: false,
    quotaUser: "facere",
    uploadType: "nemo",
    uploadProtocol: "et",
  },
  request: {
    alertStrategy: {
      autoClose: "molestiae",
      notificationRateLimit: {
        period: "molestiae",
      },
    },
    combiner: "COMBINE_UNSPECIFIED",
    conditions: [
      {
        conditionAbsent: {
          aggregations: [
            {
              alignmentPeriod: "autem",
              crossSeriesReducer: "REDUCE_SUM",
              groupByFields: [
                "culpa",
                "facilis",
              ],
              perSeriesAligner: "ALIGN_MAX",
            },
          ],
          duration: "voluptates",
          filter: "in",
          trigger: {
            count: 1708228167426671314,
            percent: 58.099998,
          },
        },
        conditionMatchedLog: {
          filter: "accusamus",
          labelExtractors: {
            "debitis": "dolorem",
            "cumque": "est",
            "eum": "blanditiis",
          },
        },
        conditionMonitoringQueryLanguage: {
          duration: "alias",
          evaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
          query: "ratione",
          trigger: {
            count: 5591437500593183472,
            percent: 2.200000,
          },
        },
        conditionThreshold: {
          aggregations: [
            {
              alignmentPeriod: "ea",
              crossSeriesReducer: "REDUCE_PERCENTILE_99",
              groupByFields: [
                "doloremque",
              ],
              perSeriesAligner: "ALIGN_MIN",
            },
          ],
          comparison: "COMPARISON_GT",
          denominatorAggregations: [
            {
              alignmentPeriod: "at",
              crossSeriesReducer: "REDUCE_MAX",
              groupByFields: [
                "sed",
              ],
              perSeriesAligner: "ALIGN_PERCENTILE_50",
            },
          ],
          denominatorFilter: "sed",
          duration: "ratione",
          evaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
          filter: "qui",
          thresholdValue: 13.200000,
          trigger: {
            count: 8314654574762670608,
            percent: 48.099998,
          },
        },
        displayName: "officia",
        name: "voluptatem",
      },
    ],
    creationRecord: {
      mutateTime: "recusandae",
      mutatedBy: "consequatur",
    },
    displayName: "consequuntur",
    documentation: {
      content: "odio",
      mimeType: "ex",
    },
    enabled: false,
    mutationRecord: {
      mutateTime: "doloremque",
      mutatedBy: "assumenda",
    },
    name: "cum",
    notificationChannels: [
      "sit",
    ],
    userLabels: {
      "et": "sed",
    },
    validity: {
      code: 8696428194438146774,
      details: [
        {
          "laudantium": "ipsum",
        },
        {
          "dolorem": "excepturi",
          "sunt": "vero",
          "provident": "totam",
        },
      ],
      message: "voluptate",
    },
  },
};

sdk.projects.monitoringProjectsAlertPoliciesCreate(req).then((res: MonitoringProjectsAlertPoliciesCreateResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `monitoringProjectsAlertPoliciesCreate` - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* `monitoringProjectsAlertPoliciesList` - Lists the existing alerting policies for the workspace.
* `monitoringProjectsCollectdTimeSeriesCreate` - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* `monitoringProjectsGroupsCreate` - Creates a new group.
* `monitoringProjectsGroupsList` - Lists the existing groups.
* `monitoringProjectsGroupsMembersList` - Lists the monitored resources that are members of a group.
* `monitoringProjectsGroupsUpdate` - Updates an existing group. You can change any group attributes except name.
* `monitoringProjectsMetricDescriptorsCreate` - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* `monitoringProjectsMetricDescriptorsList` - Lists metric descriptors that match a filter.
* `monitoringProjectsMonitoredResourceDescriptorsList` - Lists monitored resource descriptors that match a filter.
* `monitoringProjectsNotificationChannelDescriptorsList` - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* `monitoringProjectsNotificationChannelsCreate` - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* `monitoringProjectsNotificationChannelsGetVerificationCode` - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* `monitoringProjectsNotificationChannelsList` - Lists the notification channels that have been created for the project.
* `monitoringProjectsNotificationChannelsSendVerificationCode` - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* `monitoringProjectsNotificationChannelsVerify` - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* `monitoringProjectsTimeSeriesCreate` - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* `monitoringProjectsTimeSeriesCreateService` - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* `monitoringProjectsTimeSeriesList` - Lists time series that match a filter.
* `monitoringProjectsTimeSeriesQuery` - Queries time series using Monitoring Query Language.
* `monitoringProjectsUptimeCheckConfigsCreate` - Creates a new Uptime check configuration.
* `monitoringProjectsUptimeCheckConfigsList` - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### services

* `monitoringServicesCreate` - Create a Service.
* `monitoringServicesList` - List Services for this Metrics Scope.
* `monitoringServicesServiceLevelObjectivesCreate` - Create a ServiceLevelObjective for the given Service.
* `monitoringServicesServiceLevelObjectivesDelete` - Delete the given ServiceLevelObjective.
* `monitoringServicesServiceLevelObjectivesGet` - Get a ServiceLevelObjective by name.
* `monitoringServicesServiceLevelObjectivesList` - List the ServiceLevelObjectives for the given Service.
* `monitoringServicesServiceLevelObjectivesPatch` - Update the given ServiceLevelObjective.

### uptimeCheckIps

* `monitoringUptimeCheckIpsList` - Returns the list of IP addresses that checkers run from

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
