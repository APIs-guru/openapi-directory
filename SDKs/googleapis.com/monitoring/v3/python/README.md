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
    
req = operations.MonitoringProjectsAlertPoliciesCreateRequest(
    security=operations.MonitoringProjectsAlertPoliciesCreateSecurity(
        option1=operations.MonitoringProjectsAlertPoliciesCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.MonitoringProjectsAlertPoliciesCreatePathParams(
        name="veritatis",
    ),
    query_params=operations.MonitoringProjectsAlertPoliciesCreateQueryParams(
        dollar_xgafv="1",
        access_token="ut",
        alt="json",
        callback="atque",
        fields="molestiae",
        key="sed",
        oauth_token="incidunt",
        pretty_print=False,
        quota_user="facere",
        upload_type="nemo",
        upload_protocol="et",
    ),
    request=shared.AlertPolicy(
        alert_strategy=shared.AlertStrategy(
            auto_close="molestiae",
            notification_rate_limit=shared.NotificationRateLimit(
                period="molestiae",
            ),
        ),
        combiner="COMBINE_UNSPECIFIED",
        conditions=[
            shared.Condition(
                condition_absent=shared.MetricAbsence(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="autem",
                            cross_series_reducer="REDUCE_SUM",
                            group_by_fields=[
                                "culpa",
                                "facilis",
                            ],
                            per_series_aligner="ALIGN_MAX",
                        ),
                    ],
                    duration="voluptates",
                    filter="in",
                    trigger=shared.Trigger(
                        count=1708228167426671314,
                        percent=58.099998,
                    ),
                ),
                condition_matched_log=shared.LogMatch(
                    filter="accusamus",
                    label_extractors={
                        "debitis": "dolorem",
                        "cumque": "est",
                        "eum": "blanditiis",
                    },
                ),
                condition_monitoring_query_language=shared.MonitoringQueryLanguageCondition(
                    duration="alias",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_ACTIVE",
                    query="ratione",
                    trigger=shared.Trigger(
                        count=5591437500593183472,
                        percent=2.200000,
                    ),
                ),
                condition_threshold=shared.MetricThreshold(
                    aggregations=[
                        shared.Aggregation(
                            alignment_period="ea",
                            cross_series_reducer="REDUCE_PERCENTILE_99",
                            group_by_fields=[
                                "doloremque",
                            ],
                            per_series_aligner="ALIGN_MIN",
                        ),
                    ],
                    comparison="COMPARISON_GT",
                    denominator_aggregations=[
                        shared.Aggregation(
                            alignment_period="at",
                            cross_series_reducer="REDUCE_MAX",
                            group_by_fields=[
                                "sed",
                            ],
                            per_series_aligner="ALIGN_PERCENTILE_50",
                        ),
                    ],
                    denominator_filter="sed",
                    duration="ratione",
                    evaluation_missing_data="EVALUATION_MISSING_DATA_NO_OP",
                    filter="qui",
                    threshold_value=13.200000,
                    trigger=shared.Trigger(
                        count=8314654574762670608,
                        percent=48.099998,
                    ),
                ),
                display_name="officia",
                name="voluptatem",
            ),
        ],
        creation_record=shared.MutationRecord(
            mutate_time="recusandae",
            mutated_by="consequatur",
        ),
        display_name="consequuntur",
        documentation=shared.Documentation(
            content="odio",
            mime_type="ex",
        ),
        enabled=False,
        mutation_record=shared.MutationRecord(
            mutate_time="doloremque",
            mutated_by="assumenda",
        ),
        name="cum",
        notification_channels=[
            "sit",
        ],
        user_labels={
            "et": "sed",
        },
        validity=shared.Status(
            code=8696428194438146774,
            details=[
                {
                    "laudantium": "ipsum",
                },
                {
                    "dolorem": "excepturi",
                    "sunt": "vero",
                    "provident": "totam",
                },
            ],
            message="voluptate",
        ),
    ),
)
    
res = s.projects.monitoring_projects_alert_policies_create(req)

if res.alert_policy is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `monitoring_projects_alert_policies_create` - Creates a new alerting policy.Design your application to single-thread API calls that modify the state of alerting policies in a single project. This includes calls to CreateAlertPolicy, DeleteAlertPolicy and UpdateAlertPolicy.
* `monitoring_projects_alert_policies_list` - Lists the existing alerting policies for the workspace.
* `monitoring_projects_collectd_time_series_create` - Cloud Monitoring Agent only: Creates a new time series.This method is only for use by the Cloud Monitoring Agent. Use projects.timeSeries.create instead.
* `monitoring_projects_groups_create` - Creates a new group.
* `monitoring_projects_groups_list` - Lists the existing groups.
* `monitoring_projects_groups_members_list` - Lists the monitored resources that are members of a group.
* `monitoring_projects_groups_update` - Updates an existing group. You can change any group attributes except name.
* `monitoring_projects_metric_descriptors_create` - Creates a new metric descriptor. The creation is executed asynchronously. User-created metric descriptors define custom metrics (https://cloud.google.com/monitoring/custom-metrics). The metric descriptor is updated if it already exists, except that metric labels are never removed.
* `monitoring_projects_metric_descriptors_list` - Lists metric descriptors that match a filter.
* `monitoring_projects_monitored_resource_descriptors_list` - Lists monitored resource descriptors that match a filter.
* `monitoring_projects_notification_channel_descriptors_list` - Lists the descriptors for supported channel types. The use of descriptors makes it possible for new channel types to be dynamically added.
* `monitoring_projects_notification_channels_create` - Creates a new notification channel, representing a single notification endpoint such as an email address, SMS number, or PagerDuty service.Design your application to single-thread API calls that modify the state of notification channels in a single project. This includes calls to CreateNotificationChannel, DeleteNotificationChannel and UpdateNotificationChannel.
* `monitoring_projects_notification_channels_get_verification_code` - Requests a verification code for an already verified channel that can then be used in a call to VerifyNotificationChannel() on a different channel with an equivalent identity in the same or in a different project. This makes it possible to copy a channel between projects without requiring manual reverification of the channel. If the channel is not in the verified state, this method will fail (in other words, this may only be used if the SendNotificationChannelVerificationCode and VerifyNotificationChannel paths have already been used to put the given channel into the verified state).There is no guarantee that the verification codes returned by this method will be of a similar structure or form as the ones that are delivered to the channel via SendNotificationChannelVerificationCode; while VerifyNotificationChannel() will recognize both the codes delivered via SendNotificationChannelVerificationCode() and returned from GetNotificationChannelVerificationCode(), it is typically the case that the verification codes delivered via SendNotificationChannelVerificationCode() will be shorter and also have a shorter expiration (e.g. codes such as "G-123456") whereas GetVerificationCode() will typically return a much longer, websafe base 64 encoded string that has a longer expiration time.
* `monitoring_projects_notification_channels_list` - Lists the notification channels that have been created for the project.
* `monitoring_projects_notification_channels_send_verification_code` - Causes a verification code to be delivered to the channel. The code can then be supplied in VerifyNotificationChannel to verify the channel.
* `monitoring_projects_notification_channels_verify` - Verifies a NotificationChannel by proving receipt of the code delivered to the channel as a result of calling SendNotificationChannelVerificationCode.
* `monitoring_projects_time_series_create` - Creates or adds data to one or more time series. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response.
* `monitoring_projects_time_series_create_service` - Creates or adds data to one or more service time series. A service time series is a time series for a metric from a Google Cloud service. The response is empty if all time series in the request were written. If any time series could not be written, a corresponding failure message is included in the error response. This endpoint rejects writes to user-defined metrics. This method is only for use by Google Cloud services. Use projects.timeSeries.create instead.
* `monitoring_projects_time_series_list` - Lists time series that match a filter.
* `monitoring_projects_time_series_query` - Queries time series using Monitoring Query Language.
* `monitoring_projects_uptime_check_configs_create` - Creates a new Uptime check configuration.
* `monitoring_projects_uptime_check_configs_list` - Lists the existing valid Uptime check configurations for the project (leaving out any invalid configurations).

### services

* `monitoring_services_create` - Create a Service.
* `monitoring_services_list` - List Services for this Metrics Scope.
* `monitoring_services_service_level_objectives_create` - Create a ServiceLevelObjective for the given Service.
* `monitoring_services_service_level_objectives_delete` - Delete the given ServiceLevelObjective.
* `monitoring_services_service_level_objectives_get` - Get a ServiceLevelObjective by name.
* `monitoring_services_service_level_objectives_list` - List the ServiceLevelObjectives for the given Service.
* `monitoring_services_service_level_objectives_patch` - Update the given ServiceLevelObjective.

### uptimeCheckIps

* `monitoring_uptime_check_ips_list` - Returns the list of IP addresses that checkers run from

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
