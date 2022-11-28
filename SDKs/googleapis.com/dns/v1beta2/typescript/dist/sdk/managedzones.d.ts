import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ManagedZones {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dnsManagedZonesCreate - Creates a new ManagedZone.
    **/
    dnsManagedZonesCreate(req: operations.DnsManagedZonesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesCreateResponse>;
    /**
     * dnsManagedZonesDelete - Deletes a previously created ManagedZone.
    **/
    dnsManagedZonesDelete(req: operations.DnsManagedZonesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesDeleteResponse>;
    /**
     * dnsManagedZonesGet - Fetches the representation of an existing ManagedZone.
    **/
    dnsManagedZonesGet(req: operations.DnsManagedZonesGetRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesGetResponse>;
    /**
     * dnsManagedZonesGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    dnsManagedZonesGetIamPolicy(req: operations.DnsManagedZonesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesGetIamPolicyResponse>;
    /**
     * dnsManagedZonesList - Enumerates ManagedZones that have been created but not yet deleted.
    **/
    dnsManagedZonesList(req: operations.DnsManagedZonesListRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesListResponse>;
    /**
     * dnsManagedZonesPatch - Applies a partial update to an existing ManagedZone.
    **/
    dnsManagedZonesPatch(req: operations.DnsManagedZonesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesPatchResponse>;
    /**
     * dnsManagedZonesSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    dnsManagedZonesSetIamPolicy(req: operations.DnsManagedZonesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesSetIamPolicyResponse>;
    /**
     * dnsManagedZonesTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this returns an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    dnsManagedZonesTestIamPermissions(req: operations.DnsManagedZonesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesTestIamPermissionsResponse>;
    /**
     * dnsManagedZonesUpdate - Updates an existing ManagedZone.
    **/
    dnsManagedZonesUpdate(req: operations.DnsManagedZonesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DnsManagedZonesUpdateResponse>;
}
