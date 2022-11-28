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
    
    req := operations.MonitoringProjectsAlertPoliciesCreateRequest{
        Security: operations.MonitoringProjectsAlertPoliciesCreateSecurity{
            Option1: &operations.MonitoringProjectsAlertPoliciesCreateSecurityOption1{
                Oauth2: shared.SchemeOauth2{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
                Oauth2c: shared.SchemeOauth2c{
                    Authorization: "Bearer YOUR_ACCESS_TOKEN_HERE",
                }
            },
        },
        PathParams: operations.MonitoringProjectsAlertPoliciesCreatePathParams{
            Name: "veritatis",
        },
        QueryParams: operations.MonitoringProjectsAlertPoliciesCreateQueryParams{
            DollarXgafv: "1",
            AccessToken: "ut",
            Alt: "json",
            Callback: "atque",
            Fields: "molestiae",
            Key: "sed",
            OauthToken: "incidunt",
            PrettyPrint: false,
            QuotaUser: "facere",
            UploadType: "nemo",
            UploadProtocol: "et",
        },
        Request: &shared.AlertPolicy{
            AlertStrategy: &shared.AlertStrategy{
                AutoClose: "molestiae",
                NotificationRateLimit: &shared.NotificationRateLimit{
                    Period: "molestiae",
                },
            },
            Combiner: "COMBINE_UNSPECIFIED",
            Conditions: []shared.Condition{
                shared.Condition{
                    ConditionAbsent: &shared.MetricAbsence{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "autem",
                                CrossSeriesReducer: "REDUCE_SUM",
                                GroupByFields: []string{
                                    "culpa",
                                    "facilis",
                                },
                                PerSeriesAligner: "ALIGN_MAX",
                            },
                        },
                        Duration: "voluptates",
                        Filter: "in",
                        Trigger: &shared.Trigger{
                            Count: 1708228167426671314,
                            Percent: 58.099998,
                        },
                    },
                    ConditionMatchedLog: &shared.LogMatch{
                        Filter: "accusamus",
                        LabelExtractors: map[string]string{
                            "debitis": "dolorem",
                            "cumque": "est",
                            "eum": "blanditiis",
                        },
                    },
                    ConditionMonitoringQueryLanguage: &shared.MonitoringQueryLanguageCondition{
                        Duration: "alias",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_ACTIVE",
                        Query: "ratione",
                        Trigger: &shared.Trigger{
                            Count: 5591437500593183472,
                            Percent: 2.200000,
                        },
                    },
                    ConditionThreshold: &shared.MetricThreshold{
                        Aggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "ea",
                                CrossSeriesReducer: "REDUCE_PERCENTILE_99",
                                GroupByFields: []string{
                                    "doloremque",
                                },
                                PerSeriesAligner: "ALIGN_MIN",
                            },
                        },
                        Comparison: "COMPARISON_GT",
                        DenominatorAggregations: []shared.Aggregation{
                            shared.Aggregation{
                                AlignmentPeriod: "at",
                                CrossSeriesReducer: "REDUCE_MAX",
                                GroupByFields: []string{
                                    "sed",
                                },
                                PerSeriesAligner: "ALIGN_PERCENTILE_50",
                            },
                        },
                        DenominatorFilter: "sed",
                        Duration: "ratione",
                        EvaluationMissingData: "EVALUATION_MISSING_DATA_NO_OP",
                        Filter: "qui",
                        ThresholdValue: 13.200000,
                        Trigger: &shared.Trigger{
                            Count: 8314654574762670608,
                            Percent: 48.099998,
                        },
                    },
                    DisplayName: "officia",
                    Name: "voluptatem",
                },
            },
            CreationRecord: &shared.MutationRecord{
                MutateTime: "recusandae",
                MutatedBy: "consequatur",
            },
            DisplayName: "consequuntur",
            Documentation: &shared.Documentation{
                Content: "odio",
                MimeType: "ex",
            },
            Enabled: false,
            MutationRecord: &shared.MutationRecord{
                MutateTime: "doloremque",
                MutatedBy: "assumenda",
            },
            Name: "cum",
            NotificationChannels: []string{
                "sit",
            },
            UserLabels: map[string]string{
                "et": "sed",
            },
            Validity: &shared.Status{
                Code: 8696428194438146774,
                Details: []map[string]interface{}{
                    map[string]interface{}{
                        "laudantium": "ipsum",
                    },
                    map[string]interface{}{
                        "dolorem": "excepturi",
                        "sunt": "vero",
                        "provident": "totam",
                    },
                },
                Message: "voluptate",
            },
        },
    }
    
    res, err := s.Projects.MonitoringProjectsAlertPoliciesCreate(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AlertPolicy != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `MonitoringProjectsAlertPoliciesCreate` - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* `MonitoringProjectsAlertPoliciesList` - Lists the existing alerting policies for the workspace.
* `MonitoringProjectsCollectdTimeSeriesCreate` - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* `MonitoringProjectsGroupsCreate` - Creates a new group.
* `MonitoringProjectsGroupsList` - Lists the existing groups.
* `MonitoringProjectsGroupsMembersList` - Lists the monitored resources that are members of a group.
* `MonitoringProjectsGroupsUpdate` - Updates an existing group. You can change any group attributes except name.
* `MonitoringProjectsMetricDescriptorsCreate` - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* `MonitoringProjectsMetricDescriptorsList` - Lists metric descriptors that match a filter.
* `MonitoringProjectsMonitoredResourceDescriptorsList` - Lists monitored resource descriptors that match a filter.
* `MonitoringProjectsNotificationChannelDescriptorsList` - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* `MonitoringProjectsNotificationChannelsCreate` - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* `MonitoringProjectsNotificationChannelsGetVerificationCode` - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* `MonitoringProjectsNotificationChannelsList` - Lists the notification channels that have been created for the project.
* `MonitoringProjectsNotificationChannelsSendVerificationCode` - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* `MonitoringProjectsNotificationChannelsVerify` - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* `MonitoringProjectsTimeSeriesCreate` - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* `MonitoringProjectsTimeSeriesCreateService` - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* `MonitoringProjectsTimeSeriesList` - Lists time series that match a filter.
* `MonitoringProjectsTimeSeriesQuery` - Queries time series using Monitoring Query Language.
* `MonitoringProjectsUptimeCheckConfigsCreate` - Creates a new Uptime check configuration.
* `MonitoringProjectsUptimeCheckConfigsList` - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### services

* `MonitoringServicesCreate` - Create a Service.
* `MonitoringServicesList` - List Services for this Metrics Scope.
* `MonitoringServicesServiceLevelObjectivesCreate` - Create a ServiceLevelObjective for the given Service.
* `MonitoringServicesServiceLevelObjectivesDelete` - Delete the given ServiceLevelObjective.
* `MonitoringServicesServiceLevelObjectivesGet` - Get a ServiceLevelObjective by name.
* `MonitoringServicesServiceLevelObjectivesList` - List the ServiceLevelObjectives for the given Service.
* `MonitoringServicesServiceLevelObjectivesPatch` - Update the given ServiceLevelObjective.

### uptimeCheckIps

* `MonitoringUptimeCheckIpsList` - Returns the list of IP addresses that checkers run from

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
