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
        parent="enim",
    ),
    query_params=operations.GkehubProjectsLocationsFeaturesCreateQueryParams(
        dollar_xgafv="1",
        access_token="magni",
        alt="proto",
        callback="id",
        feature_id="dolor",
        fields="id",
        key="ea",
        oauth_token="error",
        pretty_print=False,
        quota_user="similique",
        request_id="quo",
        upload_type="est",
        upload_protocol="tenetur",
    ),
    request=shared.FeatureInput(
        labels={
            "quas": "ea",
            "facere": "excepturi",
            "iusto": "corporis",
        },
        membership_specs={
            "blanditiis": shared.MembershipFeatureSpecInput(
                configmanagement=shared.ConfigManagementMembershipSpec(
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=False,
                        enabled=True,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="temporibus",
                            https_proxy="veniam",
                            policy_dir="itaque",
                            secret_type="sed",
                            sync_branch="sint",
                            sync_repo="nihil",
                            sync_rev="cumque",
                            sync_wait_secs="sed",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="aut",
                            policy_dir="ut",
                            secret_type="sit",
                            sync_repo="aut",
                            sync_wait_secs="odit",
                        ),
                        prevent_drift=False,
                        source_format="voluptatibus",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=False,
                        enable_pod_tree_labels=True,
                        enabled=True,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="velit",
                        enabled=False,
                        exemptable_namespaces=[
                            "itaque",
                            "id",
                        ],
                        log_denies_enabled=False,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "PROMETHEUS",
                                "PROMETHEUS",
                                "PROMETHEUS",
                            ],
                        ),
                        mutation_enabled=False,
                        referential_rules_enabled=True,
                        template_library_installed=True,
                    ),
                    version="rerum",
                ),
                fleetobservability={
                    "nostrum": "ex",
                    "sint": "ex",
                    "atque": "eos",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="molestiae",
                                client_secret="impedit",
                                kubectl_redirect_uri="accusantium",
                                tenant="libero",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="quo",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="natus",
                                client_id="deserunt",
                                client_secret="amet",
                                deploy_cloud_console_proxy=True,
                                enable_access_token=False,
                                extra_params="sit",
                                group_prefix="reiciendis",
                                groups_claim="sint",
                                issuer_uri="et",
                                kubectl_redirect_uri="unde",
                                scopes="aut",
                                user_claim="molestiae",
                                user_prefix="tempore",
                            ),
                            proxy="quia",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="dolorem",
                                client_secret="voluptas",
                                kubectl_redirect_uri="omnis",
                                tenant="nulla",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="ab",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="aut",
                                client_id="natus",
                                client_secret="ipsum",
                                deploy_cloud_console_proxy=True,
                                enable_access_token=True,
                                extra_params="voluptatibus",
                                group_prefix="sequi",
                                groups_claim="voluptatem",
                                issuer_uri="et",
                                kubectl_redirect_uri="id",
                                scopes="impedit",
                                user_claim="et",
                                user_prefix="rerum",
                            ),
                            proxy="consequuntur",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="fugit",
                                client_secret="aut",
                                kubectl_redirect_uri="maxime",
                                tenant="in",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="sit",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="non",
                                client_id="delectus",
                                client_secret="et",
                                deploy_cloud_console_proxy=True,
                                enable_access_token=False,
                                extra_params="minima",
                                group_prefix="accusantium",
                                groups_claim="ut",
                                issuer_uri="assumenda",
                                kubectl_redirect_uri="saepe",
                                scopes="provident",
                                user_claim="delectus",
                                user_prefix="unde",
                            ),
                            proxy="similique",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="MANUAL",
                    management="MANAGEMENT_AUTOMATIC",
                ),
            ),
            "expedita": shared.MembershipFeatureSpecInput(
                configmanagement=shared.ConfigManagementMembershipSpec(
                    config_sync=shared.ConfigManagementConfigSync(
                        allow_vertical_scale=True,
                        enabled=False,
                        git=shared.ConfigManagementGitConfig(
                            gcp_service_account_email="sint",
                            https_proxy="rerum",
                            policy_dir="maiores",
                            secret_type="et",
                            sync_branch="sit",
                            sync_repo="veniam",
                            sync_rev="ipsum",
                            sync_wait_secs="qui",
                        ),
                        oci=shared.ConfigManagementOciConfig(
                            gcp_service_account_email="aut",
                            policy_dir="sunt",
                            secret_type="aperiam",
                            sync_repo="numquam",
                            sync_wait_secs="veritatis",
                        ),
                        prevent_drift=False,
                        source_format="vero",
                    ),
                    hierarchy_controller=shared.ConfigManagementHierarchyControllerConfig(
                        enable_hierarchical_resource_quota=True,
                        enable_pod_tree_labels=True,
                        enabled=False,
                    ),
                    policy_controller=shared.ConfigManagementPolicyController(
                        audit_interval_seconds="qui",
                        enabled=False,
                        exemptable_namespaces=[
                            "dolor",
                            "et",
                            "velit",
                        ],
                        log_denies_enabled=True,
                        monitoring=shared.ConfigManagementPolicyControllerMonitoring(
                            backends=[
                                "PROMETHEUS",
                                "PROMETHEUS",
                            ],
                        ),
                        mutation_enabled=True,
                        referential_rules_enabled=True,
                        template_library_installed=False,
                    ),
                    version="facere",
                ),
                fleetobservability={
                    "ad": "quis",
                    "iure": "neque",
                    "quis": "aspernatur",
                },
                identityservice=shared.IdentityServiceMembershipSpecInput(
                    auth_methods=[
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="temporibus",
                                client_secret="culpa",
                                kubectl_redirect_uri="soluta",
                                tenant="dolor",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="eveniet",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="qui",
                                client_id="ut",
                                client_secret="et",
                                deploy_cloud_console_proxy=True,
                                enable_access_token=False,
                                extra_params="voluptatum",
                                group_prefix="assumenda",
                                groups_claim="porro",
                                issuer_uri="consequatur",
                                kubectl_redirect_uri="est",
                                scopes="quasi",
                                user_claim="quaerat",
                                user_prefix="sint",
                            ),
                            proxy="eveniet",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="dolor",
                                client_secret="ratione",
                                kubectl_redirect_uri="sed",
                                tenant="voluptatum",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=True,
                            ),
                            name="aut",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="ut",
                                client_id="voluptatem",
                                client_secret="voluptas",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="quia",
                                group_prefix="unde",
                                groups_claim="maiores",
                                issuer_uri="qui",
                                kubectl_redirect_uri="et",
                                scopes="est",
                                user_claim="vel",
                                user_prefix="deserunt",
                            ),
                            proxy="necessitatibus",
                        ),
                        shared.IdentityServiceAuthMethodInput(
                            azuread_config=shared.IdentityServiceAzureAdConfigInput(
                                client_id="voluptatem",
                                client_secret="vel",
                                kubectl_redirect_uri="facilis",
                                tenant="aut",
                            ),
                            google_config=shared.IdentityServiceGoogleConfig(
                                disable=False,
                            ),
                            name="sequi",
                            oidc_config=shared.IdentityServiceOidcConfigInput(
                                certificate_authority_data="tempora",
                                client_id="id",
                                client_secret="eveniet",
                                deploy_cloud_console_proxy=False,
                                enable_access_token=False,
                                extra_params="quam",
                                group_prefix="perspiciatis",
                                groups_claim="saepe",
                                issuer_uri="et",
                                kubectl_redirect_uri="consequatur",
                                scopes="sunt",
                                user_claim="vero",
                                user_prefix="aut",
                            ),
                            proxy="consequatur",
                        ),
                    ],
                ),
                mesh=shared.ServiceMeshMembershipSpec(
                    control_plane="AUTOMATIC",
                    management="MANAGEMENT_MANUAL",
                ),
            ),
        },
        resource_state=shared.FeatureResourceState(
            state="SERVICE_UPDATING",
        ),
        scope_specs={
            "voluptatem": {
                "et": "quia",
                "nam": "veritatis",
                "ad": "dolores",
            },
        },
        spec=shared.CommonFeatureSpec(
            appdevexperience={
                "animi": "dicta",
            },
            fleetobservability={
                "et": "in",
            },
            multiclusteringress=shared.MultiClusterIngressFeatureSpec(
                config_membership="repellendus",
            ),
        ),
        state=shared.CommonFeatureState(
            appdevexperience=shared.AppDevExperienceFeatureState(
                networking_install_succeeded=shared.Status(
                    code="UNKNOWN",
                    description="repudiandae",
                ),
            ),
            fleetobservability={
                "iste": "maxime",
                "earum": "repudiandae",
                "facere": "rerum",
            },
            state=shared.FeatureState(
                code="OK",
                description="dolorum",
                update_time="ab",
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
* `gkehub_projects_locations_list` - Lists information about the supported locations for this service.
* `gkehub_projects_locations_memberships_create` - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
* `gkehub_projects_locations_memberships_generate_connect_manifest` - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
* `gkehub_projects_locations_memberships_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `gkehub_projects_locations_memberships_list` - Lists Memberships in a given project and location.
* `gkehub_projects_locations_memberships_patch` - Updates an existing Membership.
* `gkehub_projects_locations_memberships_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `gkehub_projects_locations_memberships_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `gkehub_projects_locations_operations_cancel` - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
* `gkehub_projects_locations_operations_delete` - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
* `gkehub_projects_locations_operations_get` - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
* `gkehub_projects_locations_operations_list` - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
