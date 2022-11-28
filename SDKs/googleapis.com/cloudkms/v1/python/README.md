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
    
req = operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest(
    security=operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurity(
        option1=operations.CloudkmsProjectsLocationsEkmConnectionsCreateSecurityOption1(
            oauth2=shared.SchemeOauth2(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
            oauth2c=shared.SchemeOauth2c(
                authorization="Bearer YOUR_ACCESS_TOKEN_HERE",
            )
        ),
    ),
    path_params=operations.CloudkmsProjectsLocationsEkmConnectionsCreatePathParams(
        parent="quidem",
    ),
    query_params=operations.CloudkmsProjectsLocationsEkmConnectionsCreateQueryParams(
        dollar_xgafv="2",
        access_token="dolores",
        alt="media",
        callback="illo",
        ekm_connection_id="nobis",
        fields="in",
        key="consequuntur",
        oauth_token="unde",
        pretty_print=True,
        quota_user="debitis",
        upload_type="velit",
        upload_protocol="id",
    ),
    request=shared.EkmConnectionInput(
        etag="occaecati",
        service_resolvers=[
            shared.ServiceResolverInput(
                endpoint_filter="perferendis",
                hostname="sed",
                server_certificates=[
                    shared.CertificateInput(
                        raw_der="ipsam",
                    ),
                    shared.CertificateInput(
                        raw_der="molestiae",
                    ),
                    shared.CertificateInput(
                        raw_der="mollitia",
                    ),
                ],
                service_directory_service="omnis",
            ),
            shared.ServiceResolverInput(
                endpoint_filter="quaerat",
                hostname="eligendi",
                server_certificates=[
                    shared.CertificateInput(
                        raw_der="cum",
                    ),
                ],
                service_directory_service="doloribus",
            ),
        ],
    ),
)
    
res = s.projects.cloudkms_projects_locations_ekm_connections_create(req)

if res.ekm_connection is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### projects

* `cloudkms_projects_locations_ekm_connections_create` - Creates a new EkmConnection in a given Project and Location.
* `cloudkms_projects_locations_ekm_connections_list` - Lists EkmConnections.
* `cloudkms_projects_locations_generate_random_bytes` - Generate random bytes using the Cloud KMS randomness source in the provided location.
* `cloudkms_projects_locations_key_rings_create` - Create a new KeyRing in a given Project and Location.
* `cloudkms_projects_locations_key_rings_crypto_keys_create` - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_asymmetric_decrypt` - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_asymmetric_sign` - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_create` - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_destroy` - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_get_public_key` - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_import` - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_list` - Lists CryptoKeyVersions.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_mac_sign` - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_mac_verify` - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_patch` - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
* `cloudkms_projects_locations_key_rings_crypto_keys_crypto_key_versions_restore` - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
* `cloudkms_projects_locations_key_rings_crypto_keys_decrypt` - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* `cloudkms_projects_locations_key_rings_crypto_keys_encrypt` - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
* `cloudkms_projects_locations_key_rings_crypto_keys_list` - Lists CryptoKeys.
* `cloudkms_projects_locations_key_rings_crypto_keys_update_primary_version` - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
* `cloudkms_projects_locations_key_rings_import_jobs_create` - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
* `cloudkms_projects_locations_key_rings_import_jobs_get` - Returns metadata for a given ImportJob.
* `cloudkms_projects_locations_key_rings_import_jobs_get_iam_policy` - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
* `cloudkms_projects_locations_key_rings_import_jobs_list` - Lists ImportJobs.
* `cloudkms_projects_locations_key_rings_import_jobs_set_iam_policy` - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
* `cloudkms_projects_locations_key_rings_import_jobs_test_iam_permissions` - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
* `cloudkms_projects_locations_key_rings_list` - Lists KeyRings.
* `cloudkms_projects_locations_list` - Lists information about the supported locations for this service.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
