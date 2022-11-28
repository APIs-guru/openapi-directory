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
    
req = operations.OsconfigProjectsGuestPoliciesCreateRequest(
    security=operations.OsconfigProjectsGuestPoliciesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.OsconfigProjectsGuestPoliciesCreatePathParams(
        parent="earum",
    ),
    query_params=operations.OsconfigProjectsGuestPoliciesCreateQueryParams(
        dollar_xgafv="1",
        access_token="laboriosam",
        alt="media",
        callback="quam",
        fields="aut",
        guest_policy_id="aut",
        key="est",
        oauth_token="similique",
        pretty_print=True,
        quota_user="dolor",
        upload_type="et",
        upload_protocol="est",
    ),
    request=shared.GuestPolicyInput(
        assignment=shared.Assignment(
            group_labels=[
                shared.AssignmentGroupLabel(
                    labels={
                        "fugit": "expedita",
                    },
                ),
            ],
            instance_name_prefixes=[
                "neque",
                "quia",
            ],
            instances=[
                "soluta",
                "non",
                "et",
            ],
            os_types=[
                shared.AssignmentOsType(
                    os_architecture="eius",
                    os_short_name="aut",
                    os_version="provident",
                ),
            ],
            zones=[
                "dolorem",
            ],
        ),
        description="cum",
        etag="earum",
        name="harum",
        package_repositories=[
            shared.PackageRepository(
                apt=shared.AptRepository(
                    archive_type="DEB_SRC",
                    components=[
                        "voluptatem",
                    ],
                    distribution="quae",
                    gpg_key="ea",
                    uri="quia",
                ),
                goo=shared.GooRepository(
                    name="dolorem",
                    url="beatae",
                ),
                yum=shared.YumRepository(
                    base_url="voluptatem",
                    display_name="dolor",
                    gpg_keys=[
                        "dolorem",
                        "sunt",
                    ],
                    id="ut",
                ),
                zypper=shared.ZypperRepository(
                    base_url="quia",
                    display_name="dolorum",
                    gpg_keys=[
                        "non",
                    ],
                    id="dolor",
                ),
            ),
            shared.PackageRepository(
                apt=shared.AptRepository(
                    archive_type="DEB",
                    components=[
                        "omnis",
                    ],
                    distribution="vitae",
                    gpg_key="dolorem",
                    uri="voluptas",
                ),
                goo=shared.GooRepository(
                    name="molestiae",
                    url="debitis",
                ),
                yum=shared.YumRepository(
                    base_url="et",
                    display_name="et",
                    gpg_keys=[
                        "animi",
                        "dolore",
                    ],
                    id="dolores",
                ),
                zypper=shared.ZypperRepository(
                    base_url="nihil",
                    display_name="quas",
                    gpg_keys=[
                        "nemo",
                    ],
                    id="aut",
                ),
            ),
            shared.PackageRepository(
                apt=shared.AptRepository(
                    archive_type="DEB",
                    components=[
                        "in",
                    ],
                    distribution="quia",
                    gpg_key="quidem",
                    uri="sunt",
                ),
                goo=shared.GooRepository(
                    name="tempora",
                    url="blanditiis",
                ),
                yum=shared.YumRepository(
                    base_url="reiciendis",
                    display_name="ad",
                    gpg_keys=[
                        "explicabo",
                        "enim",
                        "nihil",
                    ],
                    id="eius",
                ),
                zypper=shared.ZypperRepository(
                    base_url="ut",
                    display_name="maiores",
                    gpg_keys=[
                        "adipisci",
                        "ab",
                    ],
                    id="quia",
                ),
            ),
        ],
        packages=[
            shared.Package(
                desired_state="DESIRED_STATE_UNSPECIFIED",
                manager="APT",
                name="aspernatur",
            ),
        ],
        recipes=[
            shared.SoftwareRecipe(
                artifacts=[
                    shared.SoftwareRecipeArtifact(
                        allow_insecure=False,
                        gcs=shared.SoftwareRecipeArtifactGcs(
                            bucket="ipsam",
                            generation="omnis",
                            object="nam",
                        ),
                        id="sint",
                        remote=shared.SoftwareRecipeArtifactRemote(
                            checksum="minus",
                            uri="et",
                        ),
                    ),
                    shared.SoftwareRecipeArtifact(
                        allow_insecure=True,
                        gcs=shared.SoftwareRecipeArtifactGcs(
                            bucket="sapiente",
                            generation="explicabo",
                            object="architecto",
                        ),
                        id="quam",
                        remote=shared.SoftwareRecipeArtifactRemote(
                            checksum="alias",
                            uri="similique",
                        ),
                    ),
                    shared.SoftwareRecipeArtifact(
                        allow_insecure=False,
                        gcs=shared.SoftwareRecipeArtifactGcs(
                            bucket="est",
                            generation="aut",
                            object="repellat",
                        ),
                        id="qui",
                        remote=shared.SoftwareRecipeArtifactRemote(
                            checksum="aut",
                            uri="distinctio",
                        ),
                    ),
                ],
                desired_state="DESIRED_STATE_UNSPECIFIED",
                install_steps=[
                    shared.SoftwareRecipeStep(
                        archive_extraction=shared.SoftwareRecipeStepExtractArchive(
                            artifact_id="cum",
                            destination="est",
                            type="TAR",
                        ),
                        dpkg_installation=shared.SoftwareRecipeStepInstallDpkg(
                            artifact_id="atque",
                        ),
                        file_copy=shared.SoftwareRecipeStepCopyFile(
                            artifact_id="eum",
                            destination="similique",
                            overwrite=True,
                            permissions="deleniti",
                        ),
                        file_exec=shared.SoftwareRecipeStepExecFile(
                            allowed_exit_codes=[
                                7122569346342062927,
                            ],
                            args=[
                                "hic",
                            ],
                            artifact_id="aperiam",
                            local_path="asperiores",
                        ),
                        msi_installation=shared.SoftwareRecipeStepInstallMsi(
                            allowed_exit_codes=[
                                2178124038817671216,
                                2444525000112152390,
                            ],
                            artifact_id="quam",
                            flags=[
                                "officiis",
                            ],
                        ),
                        rpm_installation=shared.SoftwareRecipeStepInstallRpm(
                            artifact_id="molestias",
                        ),
                        script_run=shared.SoftwareRecipeStepRunScript(
                            allowed_exit_codes=[
                                9039477044149418637,
                            ],
                            interpreter="POWERSHELL",
                            script="rerum",
                        ),
                    ),
                ],
                name="rerum",
                update_steps=[
                    shared.SoftwareRecipeStep(
                        archive_extraction=shared.SoftwareRecipeStepExtractArchive(
                            artifact_id="similique",
                            destination="alias",
                            type="ARCHIVE_TYPE_UNSPECIFIED",
                        ),
                        dpkg_installation=shared.SoftwareRecipeStepInstallDpkg(
                            artifact_id="consequuntur",
                        ),
                        file_copy=shared.SoftwareRecipeStepCopyFile(
                            artifact_id="fuga",
                            destination="quos",
                            overwrite=True,
                            permissions="facere",
                        ),
                        file_exec=shared.SoftwareRecipeStepExecFile(
                            allowed_exit_codes=[
                                6177610145225093962,
                                465178855250046112,
                                3551547707500116900,
                            ],
                            args=[
                                "et",
                                "facere",
                                "et",
                            ],
                            artifact_id="officiis",
                            local_path="similique",
                        ),
                        msi_installation=shared.SoftwareRecipeStepInstallMsi(
                            allowed_exit_codes=[
                                6900656949720075118,
                            ],
                            artifact_id="sit",
                            flags=[
                                "sed",
                            ],
                        ),
                        rpm_installation=shared.SoftwareRecipeStepInstallRpm(
                            artifact_id="esse",
                        ),
                        script_run=shared.SoftwareRecipeStepRunScript(
                            allowed_exit_codes=[
                                4708595733770981717,
                            ],
                            interpreter="INTERPRETER_UNSPECIFIED",
                            script="culpa",
                        ),
                    ),
                    shared.SoftwareRecipeStep(
                        archive_extraction=shared.SoftwareRecipeStepExtractArchive(
                            artifact_id="deleniti",
                            destination="corporis",
                            type="ARCHIVE_TYPE_UNSPECIFIED",
                        ),
                        dpkg_installation=shared.SoftwareRecipeStepInstallDpkg(
                            artifact_id="quo",
                        ),
                        file_copy=shared.SoftwareRecipeStepCopyFile(
                            artifact_id="dolorem",
                            destination="saepe",
                            overwrite=True,
                            permissions="et",
                        ),
                        file_exec=shared.SoftwareRecipeStepExecFile(
                            allowed_exit_codes=[
                                14991002672757812,
                            ],
                            args=[
                                "tempora",
                                "et",
                                "quia",
                            ],
                            artifact_id="porro",
                            local_path="officia",
                        ),
                        msi_installation=shared.SoftwareRecipeStepInstallMsi(
                            allowed_exit_codes=[
                                1902411893298843288,
                                263922135336930585,
                                926545870077699743,
                            ],
                            artifact_id="tempore",
                            flags=[
                                "similique",
                                "laborum",
                                "voluptates",
                            ],
                        ),
                        rpm_installation=shared.SoftwareRecipeStepInstallRpm(
                            artifact_id="iure",
                        ),
                        script_run=shared.SoftwareRecipeStepRunScript(
                            allowed_exit_codes=[
                                7440842171506281591,
                                3826893327860544255,
                            ],
                            interpreter="SHELL",
                            script="eum",
                        ),
                    ),
                ],
                version="culpa",
            ),
        ],
    ),
)
    
res = s.projects.osconfig_projects_guest_policies_create(req)

if res.guest_policy is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `osconfig_projects_guest_policies_create` - Create an OS Config guest policy.
* `osconfig_projects_guest_policies_list` - Get a page of OS Config guest policies.
* `osconfig_projects_patch_deployments_create` - Create an OS Config patch deployment.
* `osconfig_projects_patch_deployments_delete` - Delete an OS Config patch deployment.
* `osconfig_projects_patch_deployments_list` - Get a page of OS Config patch deployments.
* `osconfig_projects_patch_deployments_patch` - Update an OS Config patch deployment.
* `osconfig_projects_patch_deployments_pause` - Change state of patch deployment to "PAUSED". Patch deployment in paused state doesn't generate patch jobs.
* `osconfig_projects_patch_deployments_resume` - Change state of patch deployment back to "ACTIVE". Patch deployment in active state continues to generate patch jobs.
* `osconfig_projects_patch_jobs_cancel` - Cancel a patch job. The patch job must be active. Canceled patch jobs cannot be restarted.
* `osconfig_projects_patch_jobs_execute` - Patch VM instances by creating and running a patch job.
* `osconfig_projects_patch_jobs_get` - Get the patch job. This can be used to track the progress of an ongoing patch job or review the details of completed jobs.
* `osconfig_projects_patch_jobs_instance_details_list` - Get a list of instance details for a given patch job.
* `osconfig_projects_patch_jobs_list` - Get a list of patch jobs.
* `osconfig_projects_zones_instances_lookup_effective_guest_policy` - Lookup the effective guest policy that applies to a VM instance. This lookup merges all policies that are assigned to the instance ancestry.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
