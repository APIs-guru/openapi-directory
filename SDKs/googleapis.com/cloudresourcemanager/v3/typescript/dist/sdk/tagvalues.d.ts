import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TagValues {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudresourcemanagerTagValuesCreate - Creates a TagValue as a child of the specified TagKey. If a another request with the same parameters is sent while the original request is in process the second request will receive an error. A maximum of 1000 TagValues can exist under a TagKey at any given time.
    **/
    cloudresourcemanagerTagValuesCreate(req: operations.CloudresourcemanagerTagValuesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesCreateResponse>;
    /**
     * cloudresourcemanagerTagValuesGet - Retrieves a TagValue. This method will return `PERMISSION_DENIED` if the value does not exist or the user does not have permission to view it.
    **/
    cloudresourcemanagerTagValuesGet(req: operations.CloudresourcemanagerTagValuesGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesGetResponse>;
    /**
     * cloudresourcemanagerTagValuesGetIamPolicy - Gets the access control policy for a TagValue. The returned policy may be empty if no such policy or resource exists. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have the `cloudresourcemanager.googleapis.com/tagValues.getIamPolicy` permission on the identified TagValue to get the access control policy.
    **/
    cloudresourcemanagerTagValuesGetIamPolicy(req: operations.CloudresourcemanagerTagValuesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesGetIamPolicyResponse>;
    /**
     * cloudresourcemanagerTagValuesList - Lists all TagValues for a specific TagKey.
    **/
    cloudresourcemanagerTagValuesList(req: operations.CloudresourcemanagerTagValuesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesListResponse>;
    /**
     * cloudresourcemanagerTagValuesPatch - Updates the attributes of the TagValue resource.
    **/
    cloudresourcemanagerTagValuesPatch(req: operations.CloudresourcemanagerTagValuesPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesPatchResponse>;
    /**
     * cloudresourcemanagerTagValuesSetIamPolicy - Sets the access control policy on a TagValue, replacing any existing policy. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. The caller must have `resourcemanager.tagValues.setIamPolicy` permission on the identified tagValue.
    **/
    cloudresourcemanagerTagValuesSetIamPolicy(req: operations.CloudresourcemanagerTagValuesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesSetIamPolicyResponse>;
    /**
     * cloudresourcemanagerTagValuesTagHoldsCreate - Creates a TagHold. Returns ALREADY_EXISTS if a TagHold with the same resource and origin exists under the same TagValue.
    **/
    cloudresourcemanagerTagValuesTagHoldsCreate(req: operations.CloudresourcemanagerTagValuesTagHoldsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesTagHoldsCreateResponse>;
    /**
     * cloudresourcemanagerTagValuesTagHoldsDelete - Deletes a TagHold.
    **/
    cloudresourcemanagerTagValuesTagHoldsDelete(req: operations.CloudresourcemanagerTagValuesTagHoldsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesTagHoldsDeleteResponse>;
    /**
     * cloudresourcemanagerTagValuesTagHoldsList - Lists TagHolds under a TagValue.
    **/
    cloudresourcemanagerTagValuesTagHoldsList(req: operations.CloudresourcemanagerTagValuesTagHoldsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesTagHoldsListResponse>;
    /**
     * cloudresourcemanagerTagValuesTestIamPermissions - Returns permissions that a caller has on the specified TagValue. The `resource` field should be the TagValue's resource name. For example: `tagValues/1234`. There are no permissions required for making this API call.
    **/
    cloudresourcemanagerTagValuesTestIamPermissions(req: operations.CloudresourcemanagerTagValuesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagValuesTestIamPermissionsResponse>;
}
