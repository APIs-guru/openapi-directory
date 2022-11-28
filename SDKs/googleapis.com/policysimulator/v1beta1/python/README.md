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
    
req = operations.PolicysimulatorProjectsLocationsReplaysCreateRequest(
    security=operations.PolicysimulatorProjectsLocationsReplaysCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.PolicysimulatorProjectsLocationsReplaysCreatePathParams(
        parent="dignissimos",
    ),
    query_params=operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams(
        dollar_xgafv="2",
        access_token="officiis",
        alt="json",
        callback="officiis",
        fields="nihil",
        key="omnis",
        oauth_token="maxime",
        pretty_print=False,
        quota_user="quos",
        upload_type="et",
        upload_protocol="omnis",
    ),
    request=shared.GoogleCloudPolicysimulatorV1beta1ReplayInput(
        config=shared.GoogleCloudPolicysimulatorV1beta1ReplayConfig(
            log_source="RECENT_ACCESSES",
            policy_overlay={
                "repudiandae": shared.GoogleIamV1Policy(
                    audit_configs=[
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "aut",
                                        "velit",
                                        "est",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "quae",
                                        "et",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                            ],
                            service="enim",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "accusantium",
                                        "ut",
                                    ],
                                    log_type="DATA_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "iure",
                                        "odit",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "amet",
                                        "pariatur",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                            ],
                            service="tempore",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "quia",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                            ],
                            service="quo",
                        ),
                    ],
                    bindings=[
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="aut",
                                expression="molestiae",
                                location="blanditiis",
                                title="et",
                            ),
                            members=[
                                "dicta",
                                "enim",
                            ],
                            role="ratione",
                        ),
                    ],
                    etag="commodi",
                    version=8785782413205295304,
                ),
            },
        ),
        results_summary=shared.GoogleCloudPolicysimulatorV1beta1ReplayResultsSummary(
            difference_count=7841242247132918320,
            error_count=2156911971396190993,
            log_count=5590233000876705772,
            newest_date=shared.GoogleTypeDate(
                day=4031732429361760447,
                month=5797452881319356845,
                year=2197377284877921821,
            ),
            oldest_date=shared.GoogleTypeDate(
                day=4588745654855075331,
                month=2360021394080816363,
                year=587545568868920246,
            ),
            unchanged_count=6171314581856648447,
        ),
    ),
)
    
res = s.projects.policysimulator_projects_locations_replays_create(req)

if res.google_longrunning_operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `policysimulator_projects_locations_replays_create` - Creates and starts a Replay using the given ReplayConfig.
* `policysimulator_projects_locations_replays_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
* `policysimulator_projects_locations_replays_results_list` - Lists the results of running a Replay.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
