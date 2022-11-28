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
     * binaryauthorizationProjectsAttestorsCreate - Creates an attestor, and returns a copy of the new attestor. Returns NOT_FOUND if the project does not exist, INVALID_ARGUMENT if the request is malformed, ALREADY_EXISTS if the attestor already exists.
    **/
    binaryauthorizationProjectsAttestorsCreate(req: operations.BinaryauthorizationProjectsAttestorsCreateRequest, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsCreateResponse>;
    /**
     * binaryauthorizationProjectsAttestorsDelete - Deletes an attestor. Returns NOT_FOUND if the attestor does not exist.
    **/
    binaryauthorizationProjectsAttestorsDelete(req: operations.BinaryauthorizationProjectsAttestorsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsDeleteResponse>;
    /**
     * binaryauthorizationProjectsAttestorsList - Lists attestors. Returns INVALID_ARGUMENT if the project does not exist.
    **/
    binaryauthorizationProjectsAttestorsList(req: operations.BinaryauthorizationProjectsAttestorsListRequest, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsListResponse>;
    /**
     * binaryauthorizationProjectsAttestorsUpdate - Updates an attestor. Returns NOT_FOUND if the attestor does not exist.
    **/
    binaryauthorizationProjectsAttestorsUpdate(req: operations.BinaryauthorizationProjectsAttestorsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsUpdateResponse>;
    /**
     * binaryauthorizationProjectsAttestorsValidateAttestationOccurrence - Returns whether the given Attestation for the given image URI was signed by the given Attestor
    **/
    binaryauthorizationProjectsAttestorsValidateAttestationOccurrence(req: operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceRequest, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsAttestorsValidateAttestationOccurrenceResponse>;
    /**
     * binaryauthorizationProjectsPolicyGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    binaryauthorizationProjectsPolicyGetIamPolicy(req: operations.BinaryauthorizationProjectsPolicyGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsPolicyGetIamPolicyResponse>;
    /**
     * binaryauthorizationProjectsPolicySetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    binaryauthorizationProjectsPolicySetIamPolicy(req: operations.BinaryauthorizationProjectsPolicySetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsPolicySetIamPolicyResponse>;
    /**
     * binaryauthorizationProjectsPolicyTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    binaryauthorizationProjectsPolicyTestIamPermissions(req: operations.BinaryauthorizationProjectsPolicyTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.BinaryauthorizationProjectsPolicyTestIamPermissionsResponse>;
}
