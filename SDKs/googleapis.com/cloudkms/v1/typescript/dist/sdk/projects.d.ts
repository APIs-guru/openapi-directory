import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudkmsProjectsLocationsEkmConnectionsCreate - Creates a new EkmConnection in a given Project and Location.
    **/
    cloudkmsProjectsLocationsEkmConnectionsCreate(req: operations.CloudkmsProjectsLocationsEkmConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsEkmConnectionsCreateResponse>;
    /**
     * cloudkmsProjectsLocationsEkmConnectionsList - Lists EkmConnections.
    **/
    cloudkmsProjectsLocationsEkmConnectionsList(req: operations.CloudkmsProjectsLocationsEkmConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsEkmConnectionsListResponse>;
    /**
     * cloudkmsProjectsLocationsGenerateRandomBytes - Generate random bytes using the Cloud KMS randomness source in the provided location.
    **/
    cloudkmsProjectsLocationsGenerateRandomBytes(req: operations.CloudkmsProjectsLocationsGenerateRandomBytesRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsGenerateRandomBytesResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCreate - Create a new KeyRing in a given Project and Location.
    **/
    cloudkmsProjectsLocationsKeyRingsCreate(req: operations.CloudkmsProjectsLocationsKeyRingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCreateResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate - Create a new CryptoKey within a KeyRing. CryptoKey.purpose and CryptoKey.version_template.algorithm are required.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCreate(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCreateResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt - Decrypts data that was encrypted with a public key retrieved from GetPublicKey corresponding to a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_DECRYPT.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecrypt(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricDecryptResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign - Signs data using a CryptoKeyVersion with CryptoKey.purpose ASYMMETRIC_SIGN, producing a signature that can be verified with the public key retrieved from GetPublicKey.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSign(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsAsymmetricSignResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate - Create a new CryptoKeyVersion in a CryptoKey. The server will assign the next sequential id. If unset, state will be set to ENABLED.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreate(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsCreateResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy - Schedule a CryptoKeyVersion for destruction. Upon calling this method, CryptoKeyVersion.state will be set to DESTROY_SCHEDULED, and destroy_time will be set to the time destroy_scheduled_duration in the future. At that time, the state will automatically change to DESTROYED, and the key material will be irrevocably destroyed. Before the destroy_time is reached, RestoreCryptoKeyVersion may be called to reverse the process.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroy(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsDestroyResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey - Returns the public key for the given CryptoKeyVersion. The CryptoKey.purpose must be ASYMMETRIC_SIGN or ASYMMETRIC_DECRYPT.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKey(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsGetPublicKeyResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport - Import wrapped key material into a CryptoKeyVersion. All requests must specify a CryptoKey. If a CryptoKeyVersion is additionally specified in the request, key material will be reimported into that version. Otherwise, a new version will be created, and will be assigned the next sequential id within the CryptoKey.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImport(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsImportResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList - Lists CryptoKeyVersions.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsList(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsListResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign - Signs data using a CryptoKeyVersion with CryptoKey.purpose MAC, producing a tag that can be verified by another source with the same key.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSign(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacSignResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify - Verifies MAC tag using a CryptoKeyVersion with CryptoKey.purpose MAC, and returns a response that indicates whether or not the verification was successful.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerify(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsMacVerifyResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch - Update a CryptoKeyVersion's metadata. state may be changed between ENABLED and DISABLED using this method. See DestroyCryptoKeyVersion and RestoreCryptoKeyVersion to move between other states.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatch(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsPatchResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore - Restore a CryptoKeyVersion in the DESTROY_SCHEDULED state. Upon restoration of the CryptoKeyVersion, state will be set to DISABLED, and destroy_time will be cleared.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestore(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysCryptoKeyVersionsRestoreResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt - Decrypts data that was protected by Encrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysDecrypt(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysDecryptResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt - Encrypts data, so that it can only be recovered by a call to Decrypt. The CryptoKey.purpose must be ENCRYPT_DECRYPT.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysEncrypt(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysEncryptResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysList - Lists CryptoKeys.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysList(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion - Update the version of a CryptoKey that will be used in Encrypt. Returns an error if called on a key whose purpose is not ENCRYPT_DECRYPT.
    **/
    cloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersion(req: operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsCryptoKeysUpdatePrimaryVersionResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsImportJobsCreate - Create a new ImportJob within a KeyRing. ImportJob.import_method is required.
    **/
    cloudkmsProjectsLocationsKeyRingsImportJobsCreate(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsCreateResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsImportJobsGet - Returns metadata for a given ImportJob.
    **/
    cloudkmsProjectsLocationsKeyRingsImportJobsGet(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    cloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicy(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsGetIamPolicyResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsImportJobsList - Lists ImportJobs.
    **/
    cloudkmsProjectsLocationsKeyRingsImportJobsList(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsListResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    cloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicy(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsSetIamPolicyResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    cloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissions(req: operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsImportJobsTestIamPermissionsResponse>;
    /**
     * cloudkmsProjectsLocationsKeyRingsList - Lists KeyRings.
    **/
    cloudkmsProjectsLocationsKeyRingsList(req: operations.CloudkmsProjectsLocationsKeyRingsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsKeyRingsListResponse>;
    /**
     * cloudkmsProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    cloudkmsProjectsLocationsList(req: operations.CloudkmsProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudkmsProjectsLocationsListResponse>;
}
