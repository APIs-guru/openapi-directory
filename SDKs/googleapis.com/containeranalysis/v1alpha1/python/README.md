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
    
req = operations.ContaineranalysisProjectsNotesCreateRequest(
    security=operations.ContaineranalysisProjectsNotesCreateSecurity(
        oauth2=shared.SchemeOauth2(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        )
        oauth2c=shared.SchemeOauth2c(
            authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
        ),
    ),
    path_params=operations.ContaineranalysisProjectsNotesCreatePathParams(
        parent="occaecati",
    ),
    query_params=operations.ContaineranalysisProjectsNotesCreateQueryParams(
        dollar_xgafv="2",
        access_token="alias",
        alt="json",
        callback="ea",
        fields="placeat",
        key="laudantium",
        name="iure",
        note_id="sit",
        oauth_token="voluptas",
        pretty_print=True,
        quota_user="at",
        upload_type="et",
        upload_protocol="enim",
    ),
    request=shared.Note(
        attestation_authority=shared.AttestationAuthority(
            hint=shared.AttestationAuthorityHint(
                human_readable_name="nemo",
            ),
        ),
        base_image=shared.Basis(
            fingerprint=shared.Fingerprint(
                v1_name="nulla",
                v2_blob=[
                    "commodi",
                    "in",
                    "eligendi",
                ],
                v2_name="laboriosam",
            ),
            resource_url="nesciunt",
        ),
        build_type=shared.BuildType(
            builder_version="dolores",
            signature=shared.BuildSignature(
                key_id="impedit",
                key_type="PKIX_PEM",
                public_key="accusamus",
                signature="doloremque",
            ),
        ),
        compliance=shared.ComplianceNote(
            cis_benchmark=shared.CisBenchmark(
                profile_level=2668619937311068945,
                severity="SEVERITY_UNSPECIFIED",
            ),
            description="rerum",
            rationale="voluptatem",
            remediation="debitis",
            scan_instructions="repudiandae",
            title="sint",
            version=[
                shared.ComplianceVersion(
                    benchmark_document="tenetur",
                    cpe_uri="deleniti",
                    version="suscipit",
                ),
            ],
        ),
        create_time="in",
        deployable=shared.Deployable(
            resource_uri=[
                "eos",
                "voluptatum",
            ],
        ),
        discovery=shared.Discovery(
            analysis_kind="IMAGE_BASIS",
        ),
        dsse_attestation=shared.DsseAttestationNote(
            hint=shared.DsseHint(
                human_readable_name="vel",
            ),
        ),
        expiration_time="minima",
        kind="ATTESTATION_AUTHORITY",
        long_description="praesentium",
        name="nemo",
        package=shared.Package(
            architecture="X86",
            cpe_uri="veritatis",
            description="dolor",
            digest=[
                shared.Digest(
                    algo="autem",
                    digest_bytes="minima",
                ),
            ],
            distribution=[
                shared.Distribution(
                    architecture="X64",
                    cpe_uri="aliquid",
                    description="quisquam",
                    latest_version=shared.Version(
                        epoch=2382237157700235635,
                        inclusive=True,
                        kind="MINIMUM",
                        name="est",
                        revision="velit",
                    ),
                    maintainer="enim",
                    url="optio",
                ),
                shared.Distribution(
                    architecture="ARCHITECTURE_UNSPECIFIED",
                    cpe_uri="laboriosam",
                    description="est",
                    latest_version=shared.Version(
                        epoch=8161500657122210804,
                        inclusive=True,
                        kind="NORMAL",
                        name="sunt",
                        revision="earum",
                    ),
                    maintainer="ut",
                    url="in",
                ),
                shared.Distribution(
                    architecture="X86",
                    cpe_uri="ipsum",
                    description="excepturi",
                    latest_version=shared.Version(
                        epoch=7603882901693968790,
                        inclusive=False,
                        kind="MAXIMUM",
                        name="in",
                        revision="occaecati",
                    ),
                    maintainer="quis",
                    url="recusandae",
                ),
            ],
            license=shared.License(
                comments="quaerat",
                expression="culpa",
            ),
            maintainer="minima",
            name="et",
            package_type="laudantium",
            url="pariatur",
            version=shared.Version(
                epoch=6886837275943705348,
                inclusive=False,
                kind="MAXIMUM",
                name="et",
                revision="ad",
            ),
        ),
        related_url=[
            shared.RelatedURL(
                label="delectus",
                url="minima",
            ),
            shared.RelatedURL(
                label="ut",
                url="est",
            ),
        ],
        sbom=shared.DocumentNote(
            data_licence="aspernatur",
            spdx_version="est",
        ),
        short_description="tempora",
        spdx_file=shared.FileNote(
            checksum=[
                "eligendi",
                "autem",
                "fuga",
            ],
            file_type="SPDX",
            title="corrupti",
        ),
        spdx_package=shared.PackageInfoNote(
            analyzed=False,
            attribution="eos",
            checksum="blanditiis",
            copyright="deserunt",
            detailed_description="ipsum",
            download_location="tenetur",
            external_refs=[
                shared.ExternalRef(
                    category="SECURITY",
                    comment="blanditiis",
                    locator="ipsa",
                    type="ut",
                ),
                shared.ExternalRef(
                    category="PACKAGE_MANAGER",
                    comment="delectus",
                    locator="corporis",
                    type="consequatur",
                ),
                shared.ExternalRef(
                    category="PERSISTENT_ID",
                    comment="aliquid",
                    locator="quos",
                    type="iure",
                ),
            ],
            files_license_info=[
                "nihil",
                "hic",
            ],
            home_page="saepe",
            license_declared=shared.License(
                comments="dolores",
                expression="possimus",
            ),
            originator="aut",
            package_type="ut",
            summary_description="unde",
            supplier="consequatur",
            title="et",
            verification_code="et",
            version="tempore",
        ),
        spdx_relationship=shared.RelationshipNote(
            type="HAS_PREREQUISITE",
        ),
        update_time="culpa",
        upgrade=shared.UpgradeNote(
            distributions=[
                shared.UpgradeDistribution(
                    classification="consectetur",
                    cpe_uri="magni",
                    cve=[
                        "enim",
                        "nam",
                        "ut",
                    ],
                    severity="atque",
                ),
            ],
            package="adipisci",
            version=shared.Version(
                epoch=1333898400016087624,
                inclusive=False,
                kind="NORMAL",
                name="non",
                revision="reprehenderit",
            ),
        ),
        vulnerability_type=shared.VulnerabilityType(
            cvss_score=63.099998,
            cvss_v2=shared.Cvss(
                attack_complexity="ATTACK_COMPLEXITY_UNSPECIFIED",
                attack_vector="ATTACK_VECTOR_NETWORK",
                authentication="AUTHENTICATION_SINGLE",
                availability_impact="IMPACT_PARTIAL",
                base_score=86.199997,
                confidentiality_impact="IMPACT_LOW",
                exploitability_score=33.200001,
                impact_score=91.099998,
                integrity_impact="IMPACT_LOW",
                privileges_required="PRIVILEGES_REQUIRED_LOW",
                scope="SCOPE_UNSPECIFIED",
                user_interaction="USER_INTERACTION_UNSPECIFIED",
            ),
            cwe=[
                "id",
                "asperiores",
            ],
            details=[
                shared.Detail(
                    cpe_uri="omnis",
                    description="quaerat",
                    fixed_location=shared.VulnerabilityLocation(
                        cpe_uri="in",
                        file_location=[
                            shared.FileLocation(
                                file_path="quas",
                            ),
                        ],
                        package="omnis",
                        version=shared.Version(
                            epoch=7734856464178983150,
                            inclusive=False,
                            kind="MINIMUM",
                            name="dolores",
                            revision="voluptates",
                        ),
                    ),
                    is_obsolete=False,
                    max_affected_version=shared.Version(
                        epoch=9081386922194976867,
                        inclusive=True,
                        kind="MINIMUM",
                        name="vel",
                        revision="necessitatibus",
                    ),
                    min_affected_version=shared.Version(
                        epoch=8855434532889870208,
                        inclusive=True,
                        kind="NORMAL",
                        name="impedit",
                        revision="a",
                    ),
                    package="eaque",
                    package_type="quo",
                    severity_name="aut",
                    source="consectetur",
                    vendor="corporis",
                ),
                shared.Detail(
                    cpe_uri="eaque",
                    description="minus",
                    fixed_location=shared.VulnerabilityLocation(
                        cpe_uri="quaerat",
                        file_location=[
                            shared.FileLocation(
                                file_path="non",
                            ),
                            shared.FileLocation(
                                file_path="vel",
                            ),
                            shared.FileLocation(
                                file_path="maiores",
                            ),
                        ],
                        package="pariatur",
                        version=shared.Version(
                            epoch=6919549363026447310,
                            inclusive=True,
                            kind="MINIMUM",
                            name="sunt",
                            revision="ut",
                        ),
                    ),
                    is_obsolete=True,
                    max_affected_version=shared.Version(
                        epoch=2956222707044632948,
                        inclusive=False,
                        kind="MINIMUM",
                        name="aut",
                        revision="aspernatur",
                    ),
                    min_affected_version=shared.Version(
                        epoch=2998563391556972300,
                        inclusive=False,
                        kind="MINIMUM",
                        name="et",
                        revision="a",
                    ),
                    package="quo",
                    package_type="vero",
                    severity_name="dolorem",
                    source="repellendus",
                    vendor="placeat",
                ),
            ],
            severity="CRITICAL",
        ),
    ),
)
    
res = s.projects.containeranalysis_projects_notes_create(req)

if res.note is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `containeranalysis_projects_notes_create` - Creates a new `Note`.
* `containeranalysis_projects_notes_list` - Lists all `Notes` for a given project.
* `containeranalysis_projects_occurrences_create` - Creates a new `Occurrence`. Use this method to create `Occurrences` for a resource.
* `containeranalysis_projects_occurrences_get_vulnerability_summary` - Gets a summary of the number and severity of occurrences.
* `containeranalysis_projects_occurrences_list` - Lists active `Occurrences` for a given project matching the filters.
* `containeranalysis_projects_operations_create` - Creates a new `Operation`.
* `containeranalysis_projects_scan_configs_list` - Lists scan configurations for a project.

### providers

* `containeranalysis_providers_notes_create` - Creates a new `Note`.
* `containeranalysis_providers_notes_delete` - Deletes the given `Note` from the system.
* `containeranalysis_providers_notes_get` - Returns the requested `Note`.
* `containeranalysis_providers_notes_get_iam_policy` - Gets the access control policy for a note or an `Occurrence` resource. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a note or occurrence, respectively. Attempting to call this method on a resource without the required permission will result in a `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for occurrences and projects/{PROJECT_ID}/notes/{NOTE_ID} for notes
* `containeranalysis_providers_notes_list` - Lists all `Notes` for a given project.
* `containeranalysis_providers_notes_occurrences_list` - Lists `Occurrences` referencing the specified `Note`. Use this method to get all occurrences referencing your `Note` across all your customer projects.
* `containeranalysis_providers_notes_patch` - Updates an existing `Note`.
* `containeranalysis_providers_notes_set_iam_policy` - Sets the access control policy on the specified `Note` or `Occurrence`. Requires `containeranalysis.notes.setIamPolicy` or `containeranalysis.occurrences.setIamPolicy` permission if the resource is a `Note` or an `Occurrence`, respectively. Attempting to call this method without these permissions will result in a ` `PERMISSION_DENIED` error. Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has `containeranalysis.notes.list` permission on a `Note` or `containeranalysis.occurrences.list` on an `Occurrence`, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{projectid}/occurrences/{occurrenceid}` for occurrences and projects/{projectid}/notes/{noteid} for notes
* `containeranalysis_providers_notes_test_iam_permissions` - Returns the permissions that a caller has on the specified note or occurrence resource. Requires list permission on the project (for example, "storage.objects.list" on the containing bucket for testing permission of an object). Attempting to call this method on a non-existent resource will result in a `NOT_FOUND` error if the user has list permission on the project, or a `PERMISSION_DENIED` error otherwise. The resource takes the following formats: `projects/{PROJECT_ID}/occurrences/{OCCURRENCE_ID}` for `Occurrences` and `projects/{PROJECT_ID}/notes/{NOTE_ID}` for `Notes`

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
