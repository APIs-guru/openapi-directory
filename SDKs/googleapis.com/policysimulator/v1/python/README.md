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
        parent="quaerat",
    ),
    query_params=operations.PolicysimulatorProjectsLocationsReplaysCreateQueryParams(
        dollar_xgafv="1",
        access_token="doloremque",
        alt="json",
        callback="numquam",
        fields="a",
        key="non",
        oauth_token="itaque",
        pretty_print=False,
        quota_user="quo",
        upload_type="nisi",
        upload_protocol="deleniti",
    ),
    request=shared.GoogleCloudPolicysimulatorV1ReplayInput(
        config=shared.GoogleCloudPolicysimulatorV1ReplayConfig(
            log_source="LOG_SOURCE_UNSPECIFIED",
            policy_overlay={
                "consequatur": shared.GoogleIamV1Policy(
                    audit_configs=[
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "voluptas",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                            ],
                            service="minima",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "alias",
                                    ],
                                    log_type="DATA_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "et",
                                    ],
                                    log_type="DATA_READ",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "et",
                                        "magnam",
                                        "blanditiis",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                            ],
                            service="debitis",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "maiores",
                                        "reprehenderit",
                                        "quia",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "officia",
                                        "sunt",
                                        "voluptatem",
                                    ],
                                    log_type="ADMIN_READ",
                                ),
                            ],
                            service="esse",
                        ),
                    ],
                    bindings=[
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="id",
                                expression="maxime",
                                location="minus",
                                title="sed",
                            ),
                            members=[
                                "distinctio",
                                "rerum",
                            ],
                            role="totam",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="alias",
                                expression="temporibus",
                                location="delectus",
                                title="nemo",
                            ),
                            members=[
                                "accusantium",
                                "illum",
                            ],
                            role="quas",
                        ),
                    ],
                    etag="in",
                    version=6969309311508923998,
                ),
                "aut": shared.GoogleIamV1Policy(
                    audit_configs=[
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "rerum",
                                        "qui",
                                    ],
                                    log_type="DATA_WRITE",
                                ),
                            ],
                            service="incidunt",
                        ),
                        shared.GoogleIamV1AuditConfig(
                            audit_log_configs=[
                                shared.GoogleIamV1AuditLogConfig(
                                    exempted_members=[
                                        "odio",
                                    ],
                                    log_type="LOG_TYPE_UNSPECIFIED",
                                ),
                            ],
                            service="aperiam",
                        ),
                    ],
                    bindings=[
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="dolorem",
                                expression="dolor",
                                location="iusto",
                                title="iusto",
                            ),
                            members=[
                                "alias",
                                "atque",
                            ],
                            role="vero",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="est",
                                expression="quia",
                                location="qui",
                                title="iusto",
                            ),
                            members=[
                                "delectus",
                                "recusandae",
                            ],
                            role="repellat",
                        ),
                        shared.GoogleIamV1Binding(
                            condition=shared.GoogleTypeExpr(
                                description="suscipit",
                                expression="autem",
                                location="accusamus",
                                title="autem",
                            ),
                            members=[
                                "laudantium",
                            ],
                            role="debitis",
                        ),
                    ],
                    etag="sapiente",
                    version=4681406324211410955,
                ),
            },
        ),
        results_summary=shared.GoogleCloudPolicysimulatorV1ReplayResultsSummary(
            difference_count=5234953397910843034,
            error_count=5846958317667548146,
            log_count=7346453447501218193,
            newest_date=shared.GoogleTypeDate(
                day=2943922309746592043,
                month=4494203844848527318,
                year=2227584911989376714,
            ),
            oldest_date=shared.GoogleTypeDate(
                day=2288355997085519707,
                month=8427404750346864572,
                year=8392707394207074712,
            ),
            unchanged_count=2636727003386611254,
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
