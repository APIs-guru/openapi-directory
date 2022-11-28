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
        parent="rerum",
    ),
    query_params=operations.GkehubProjectsLocationsFeaturesCreateQueryParams(
        dollar_xgafv="1",
        access_token="delectus",
        alt="json",
        callback="assumenda",
        feature_id="fugiat",
        fields="sed",
        key="aperiam",
        oauth_token="vel",
        pretty_print=False,
        quota_user="rerum",
        request_id="eum",
        upload_type="rerum",
        upload_protocol="et",
    ),
    request=shared.FeatureInput(
        labels={
            "et": "fugiat",
            "nihil": "laboriosam",
        },
        membership_specs={
            "aut": shared.MembershipFeatureSpecInput(
                anthosobservability=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=False,
                    enable_stackdriver_on_applications=False,
                    version="officiis",
                ),
                cloudbuild=shared.CloudBuildMembershipSpec(
                    security_policy="NON_PRIVILEGED",
                    version="minima",
                ),
                configmanagement=shared.ConfigManagementMembershipSpec(
                    binauthz=shared.ConfigManagementBinauthzConfig(
                        enabled=True,
                    ),
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=False,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="aut",
                            https_proxy="incidunt",
                            policy_dir="voluptatem",
                            secret_type="in",
                            sync_branch="ut",
                            sync_repo="hic",
                            sync_rev="molestiae",
                            sync_wait_secs="omnis",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="quibusdam",
                            policy_dir="ut",
                            secret_type="numquam",
                            sync_repo="aperiam",
                            sync_wait_secs="eligendi",
                        ),
                        prevent_drift=False,
                        source_format="ipsam",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=True,
                        enable_pod_tree_labels=True,
                        enabled=True,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="aspernatur",
                        enabled=True,
                        exemptable_namespaces=[
                            "vel",
                        ],
                        log_denies_enabled=False,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "MONITORING_BACKEND_UNSPECIFIED",
                                "PROMETHEUS",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=True,
                        template_library_installed=False,
                    ),
                    version="recusandae",
                ),
                fleetobservability={
                    "ullam": "id",
                    "mollitia": "illo",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="et",
                                client_secret="sed",
                                kubectl_redirect_uri="nihil",
                                tenant="sed",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="rerum",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="natus",
                                client_id="excepturi",
                                client_secret="molestiae",
                                deploy_cloud_console_proxy=True,
                                enable_access_token=False,
                                extra_params="ex",
                                group_prefix="quis",
                                groups_claim="et",
                                issuer_uri="laudantium",
                                kubectl_redirect_uri="optio",
                                scopes="quae",
                                user_claim="nulla",
                                user_prefix="tempore",
                            ),
                            proxy="voluptatem",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="quis",
                                client_secret="atque",
                                kubectl_redirect_uri="velit",
                                tenant="ut",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="dolorem",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="magnam",
                                client_id="praesentium",
                                client_secret="esse",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=True,
                                extra_params="totam",
                                group_prefix="hic",
                                groups_claim="porro",
                                issuer_uri="accusantium",
                                kubectl_redirect_uri="illum",
                                scopes="est",
                                user_claim="deserunt",
                                user_prefix="at",
                            ),
                            proxy="magnam",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="MANUAL",
                    default_channel="STABLE",
                    management="MANAGEMENT_AUTOMATIC",
                ),
                policycontroller=shared.PolicyControllerMembershipSpec(
                    policy_controller_hub_config=shared.PolicyControllerHubConfig(
                        audit_interval_seconds="excepturi",
                        exemptable_namespaces=[
                            "fuga",
                        ],
                        install_spec="INSTALL_SPEC_SUSPENDED",
                        log_denies_enabled=False,
                        monitoring=shared.PolicyControllerMonitoringConfig(
                            backends=[
                                "PROMETHEUS",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=False,
                        template_library_config=shared.PolicyControllerTemplateLibraryConfig(
                            included=True,
                        ),
                    ),
                    version="sed",
                ),
                workloadcertificate=shared.MembershipSpec(
                    certificate_management="ENABLED",
                ),
            ),
            "ipsum": shared.MembershipFeatureSpecInput(
                anthosobservability=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=True,
                    enable_stackdriver_on_applications=False,
                    version="autem",
                ),
                cloudbuild=shared.CloudBuildMembershipSpec(
                    security_policy="NON_PRIVILEGED",
                    version="incidunt",
                ),
                configmanagement=shared.ConfigManagementMembershipSpec(
                    binauthz=shared.ConfigManagementBinauthzConfig(
                        enabled=False,
                    ),
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=True,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="dolorum",
                            https_proxy="sit",
                            policy_dir="tempore",
                            secret_type="et",
                            sync_branch="ut",
                            sync_repo="quis",
                            sync_rev="officiis",
                            sync_wait_secs="qui",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="suscipit",
                            policy_dir="eos",
                            secret_type="ut",
                            sync_repo="maxime",
                            sync_wait_secs="aut",
                        ),
                        prevent_drift=True,
                        source_format="aspernatur",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=True,
                        enable_pod_tree_labels=True,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="voluptatem",
                        enabled=True,
                        exemptable_namespaces=[
                            "illo",
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
                    version="repudiandae",
                ),
                fleetobservability={
                    "aspernatur": "est",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="eaque",
                                client_secret="earum",
                                kubectl_redirect_uri="et",
                                tenant="facere",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="quam",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="alias",
                                client_id="et",
                                client_secret="saepe",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=True,
                                extra_params="quasi",
                                group_prefix="autem",
                                groups_claim="dolorum",
                                issuer_uri="dolorem",
                                kubectl_redirect_uri="fugit",
                                scopes="voluptates",
                                user_claim="aut",
                                user_prefix="amet",
                            ),
                            proxy="est",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="AUTOMATIC",
                    default_channel="RAPID",
                    management="MANAGEMENT_UNSPECIFIED",
                ),
                policycontroller=shared.PolicyControllerMembershipSpec(
                    policy_controller_hub_config=shared.PolicyControllerHubConfig(
                        audit_interval_seconds="inventore",
                        exemptable_namespaces=[
                            "voluptatem",
                            "molestiae",
                        ],
                        install_spec="INSTALL_SPEC_SUSPENDED",
                        log_denies_enabled=False,
                        monitoring=shared.PolicyControllerMonitoringConfig(
                            backends=[
                                "MONITORING_BACKEND_UNSPECIFIED",
                                "CLOUD_MONITORING",
                                "MONITORING_BACKEND_UNSPECIFIED",
                            ],
                        ),
                        mutation_enabled=True,
                        referential_rules_enabled=True,
                        template_library_config=shared.PolicyControllerTemplateLibraryConfig(
                            included=False,
                        ),
                    ),
                    version="excepturi",
                ),
                workloadcertificate=shared.MembershipSpec(
                    certificate_management="CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                ),
            ),
            "necessitatibus": shared.MembershipFeatureSpecInput(
                anthosobservability=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=False,
                    enable_stackdriver_on_applications=True,
                    version="vitae",
                ),
                cloudbuild=shared.CloudBuildMembershipSpec(
                    security_policy="SECURITY_POLICY_UNSPECIFIED",
                    version="explicabo",
                ),
                configmanagement=shared.ConfigManagementMembershipSpec(
                    binauthz=shared.ConfigManagementBinauthzConfig(
                        enabled=True,
                    ),
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=True,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="repellendus",
                            https_proxy="ad",
                            policy_dir="corrupti",
                            secret_type="doloribus",
                            sync_branch="et",
                            sync_repo="sint",
                            sync_rev="ullam",
                            sync_wait_secs="ea",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="expedita",
                            policy_dir="ratione",
                            secret_type="qui",
                            sync_repo="totam",
                            sync_wait_secs="ut",
                        ),
                        prevent_drift=False,
                        source_format="consequatur",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=False,
                        enable_pod_tree_labels=True,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="vero",
                        enabled=False,
                        exemptable_namespaces=[
                            "beatae",
                            "aut",
                            "dolorem",
                        ],
                        log_denies_enabled=False,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "MONITORING_BACKEND_UNSPECIFIED",
                                "MONITORING_BACKEND_UNSPECIFIED",
                                "PROMETHEUS",
                            ],
                        ),
                        mutation_enabled=True,
                        referential_rules_enabled=True,
                        template_library_installed=True,
                    ),
                    version="enim",
                ),
                fleetobservability={
                    "quia": "quisquam",
                    "est": "aliquam",
                    "dolores": "ea",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="reprehenderit",
                                client_secret="molestiae",
                                kubectl_redirect_uri="dolorum",
                                tenant="incidunt",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="quis",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="qui",
                                client_id="temporibus",
                                client_secret="natus",
                                deploy_cloud_console_proxy=True,
                                enable_access_token=False,
                                extra_params="facere",
                                group_prefix="in",
                                groups_claim="nisi",
                                issuer_uri="dolores",
                                kubectl_redirect_uri="voluptatem",
                                scopes="optio",
                                user_claim="eos",
                                user_prefix="tenetur",
                            ),
                            proxy="libero",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="AUTOMATIC",
                    default_channel="CHANNEL_UNSPECIFIED",
                    management="MANAGEMENT_AUTOMATIC",
                ),
                policycontroller=shared.PolicyControllerMembershipSpec(
                    policy_controller_hub_config=shared.PolicyControllerHubConfig(
                        audit_interval_seconds="earum",
                        exemptable_namespaces=[
                            "provident",
                            "eligendi",
                        ],
                        install_spec="INSTALL_SPEC_UNSPECIFIED",
                        log_denies_enabled=False,
                        monitoring=shared.PolicyControllerMonitoringConfig(
                            backends=[
                                "MONITORING_BACKEND_UNSPECIFIED",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=False,
                        template_library_config=shared.PolicyControllerTemplateLibraryConfig(
                            included=False,
                        ),
                    ),
                    version="similique",
                ),
                workloadcertificate=shared.MembershipSpec(
                    certificate_management="DISABLED",
                ),
            ),
        },
        resource_state=shared.FeatureResourceState(
            state="DISABLING",
        ),
        scope_specs={
            "expedita": {
                "harum": "ratione",
            },
            "in": {
                "ad": "ullam",
                "placeat": "repellat",
                "eius": "ducimus",
            },
        },
        spec=shared.CommonFeatureSpec(
            anthosobservability=shared.AnthosObservabilityFeatureSpec(
                default_membership_spec=shared.AnthosObservabilityMembershipSpec(
                    do_not_optimize_metrics=True,
                    enable_stackdriver_on_applications=True,
                    version="laudantium",
                ),
            ),
            appdevexperience={
                "odio": "placeat",
            },
            cloudauditlogging=shared.CloudAuditLoggingFeatureSpec(
                allowlisted_service_accounts=[
                    "dolorem",
                ],
            ),
            fleetobservability={
                "quis": "vel",
                "corrupti": "dolorem",
            },
            multiclusteringress=shared.MultiClusterIngressFeatureSpec(
                billing="BILLING_UNSPECIFIED",
                config_membership="eius",
            ),
            workloadcertificate=shared.FeatureSpec(
                default_config=shared.MembershipSpec(
                    certificate_management="CERTIFICATE_MANAGEMENT_UNSPECIFIED",
                ),
                provision_google_ca="DISABLED",
            ),
        ),
        state=shared.CommonFeatureState1(
            appdevexperience=shared.AppDevExperienceFeatureState(
                networking_install_succeeded=shared.Status(
                    code="FAILED",
                    description="sed",
                ),
            ),
            fleetobservability={
                "quis": "est",
            },
            state=shared.FeatureState(
                code="OK",
                description="natus",
                update_time="consequatur",
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
* `gkehub_projects_locations_fleets_create` - Creates a fleet.
* `gkehub_projects_locations_fleets_list` - Returns all fleets within an organization or a project that the caller has access to.
* `gkehub_projects_locations_list` - Lists information about the supported locations for this service.
* `gkehub_projects_locations_memberships_create` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehub_projects_locations_memberships_generate_connect_manifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehub_projects_locations_memberships_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehub_projects_locations_memberships_list` - Lists Memberships in a given project and location.
* `gkehub_projects_locations_memberships_list_admin` - Lists Memberships of admin clusters in a given project and location. **This method is only used internally**.
* `gkehub_projects_locations_memberships_patch` - Updates an existing Membership.
* `gkehub_projects_locations_memberships_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehub_projects_locations_memberships_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehub_projects_locations_memberships_validate_create` - ValidateCreateMembership is a preflight check for CreateMembership. It checks the following: 1. Caller has the required `gkehub.memberships.create` permission. 2. The membership_id is still available.
* `gkehub_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehub_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehub_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehub_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
