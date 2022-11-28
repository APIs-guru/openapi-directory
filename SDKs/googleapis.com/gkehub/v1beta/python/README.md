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
    
req = operations.GkehubProjectsLocationsFeaturesCreateRequest(
    security=operations.GkehubProjectsLocationsFeaturesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.GkehubProjectsLocationsFeaturesCreatePathParams(
        parent="placeat",
    ),
    query_params=operations.GkehubProjectsLocationsFeaturesCreateQueryParams(
        dollar_xgafv="2",
        access_token="explicabo",
        alt="proto",
        callback="qui",
        feature_id="aut",
        fields="enim",
        key="minima",
        oauth_token="quia",
        pretty_print=True,
        quota_user="distinctio",
        request_id="non",
        upload_type="cumque",
        upload_protocol="provident",
    ),
    request=shared.FeatureInput(
        labels={
            "ut": "dolor",
        },
        membership_specs={
            "voluptates": shared.MembershipFeatureSpecInput(
                anthosobservability=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=True,
                    enable_stackdriver_on_applications=True,
                    version="laudantium",
                ),
                cloudbuild=shared.MembershipSpec(
                    security_policy="NON_PRIVILEGED",
                    version="dolor",
                ),
                configmanagement=shared.ConfigManagementMembershipSpec(
                    binauthz=shared.ConfigManagementBinauthzConfig(
                        enabled=False,
                    ),
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=False,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="ut",
                            https_proxy="et",
                            policy_dir="nisi",
                            secret_type="quo",
                            sync_branch="dolores",
                            sync_repo="aut",
                            sync_rev="et",
                            sync_wait_secs="omnis",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="recusandae",
                            policy_dir="animi",
                            secret_type="cumque",
                            sync_repo="deserunt",
                            sync_wait_secs="sapiente",
                        ),
                        prevent_drift=True,
                        source_format="laborum",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=True,
                        enable_pod_tree_labels=False,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="autem",
                        enabled=False,
                        exemptable_namespaces=[
                            "neque",
                            "vel",
                            "dolorem",
                        ],
                        log_denies_enabled=True,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "MONITORING_BACKEND_UNSPECIFIED",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=False,
                        template_library_installed=False,
                    ),
                    version="qui",
                ),
                fleetobservability={
                    "pariatur": "repellat",
                    "magni": "quas",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="fuga",
                                client_secret="et",
                                kubectl_redirect_uri="consequatur",
                                tenant="nemo",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="ab",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="occaecati",
                                client_id="vitae",
                                client_secret="dolor",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="dicta",
                                group_prefix="autem",
                                groups_claim="non",
                                issuer_uri="cumque",
                                kubectl_redirect_uri="id",
                                scopes="quia",
                                user_claim="aut",
                                user_prefix="placeat",
                            ),
                            proxy="reprehenderit",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="quos",
                                client_secret="repudiandae",
                                kubectl_redirect_uri="soluta",
                                tenant="impedit",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="nisi",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="esse",
                                client_id="aut",
                                client_secret="quia",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=True,
                                extra_params="quia",
                                group_prefix="qui",
                                groups_claim="voluptatibus",
                                issuer_uri="omnis",
                                kubectl_redirect_uri="excepturi",
                                scopes="ut",
                                user_claim="aperiam",
                                user_prefix="optio",
                            ),
                            proxy="ducimus",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="cumque",
                                client_secret="voluptatem",
                                kubectl_redirect_uri="omnis",
                                tenant="at",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="quia",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="et",
                                client_id="repellendus",
                                client_secret="eum",
                                deploy_cloud_console_proxy=True,
                                enable_access_token=False,
                                extra_params="et",
                                group_prefix="fugiat",
                                groups_claim="et",
                                issuer_uri="perferendis",
                                kubectl_redirect_uri="sint",
                                scopes="ut",
                                user_claim="molestiae",
                                user_prefix="praesentium",
                            ),
                            proxy="et",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="CONTROL_PLANE_MANAGEMENT_UNSPECIFIED",
                    management="MANAGEMENT_UNSPECIFIED",
                ),
                policycontroller=shared.PolicyControllerMembershipSpec(
                    policy_controller_hub_config=shared.PolicyControllerHubConfig(
                        audit_interval_seconds="voluptatem",
                        exemptable_namespaces=[
                            "et",
                            "facere",
                            "perferendis",
                        ],
                        install_spec="INSTALL_SPEC_UNSPECIFIED",
                        log_denies_enabled=False,
                        monitoring=shared.PolicyControllerMonitoringConfig(
                            backends=[
                                "PROMETHEUS",
                                "MONITORING_BACKEND_UNSPECIFIED",
                                "MONITORING_BACKEND_UNSPECIFIED",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=True,
                        template_library_config=shared.PolicyControllerTemplateLibraryConfig(
                            included=False,
                        ),
                    ),
                    version="ad",
                ),
            ),
        },
        resource_state=shared.FeatureResourceState(
            state="DISABLING",
        ),
        scope_specs={
            "qui": {
                "nostrum": "ad",
                "aut": "sed",
            },
        },
        spec=shared.CommonFeatureSpec(
            anthosobservability=shared.AnthosObservabilityFeatureSpec(
                default_membership_spec=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=False,
                    enable_stackdriver_on_applications=True,
                    version="et",
                ),
            ),
            appdevexperience={
                "magnam": "officia",
                "commodi": "et",
            },
            fleetobservability={
                "ipsam": "harum",
                "eum": "ducimus",
            },
            multiclusteringress=shared.MultiClusterIngressFeatureSpec(
                billing="PAY_AS_YOU_GO",
                config_membership="inventore",
            ),
        ),
        state=shared.CommonFeatureState(
            appdevexperience=shared.AppDevExperienceFeatureState(
                networking_install_succeeded=shared.Status(
                    code="CODE_UNSPECIFIED",
                    description="velit",
                ),
            ),
            fleetobservability={
                "mollitia": "ducimus",
            },
            state=shared.FeatureState(
                code="OK",
                description="enim",
                update_time="illo",
            ),
        ),
    ),
)
    
res = s.projects.gkehub_projects_locations_features_create(req)

if res.operation is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `gkehub_projects_locations_features_create` - Adds a new Feature.
* `gkehub_projects_locations_features_list` - Lists Features in a given project and location.
* `gkehub_projects_locations_features_patch` - Updates an existing Feature.
* `gkehub_projects_locations_list` - Lists information about the supported locations for this service.
* `gkehub_projects_locations_memberships_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehub_projects_locations_memberships_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehub_projects_locations_memberships_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehub_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehub_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehub_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehub_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
