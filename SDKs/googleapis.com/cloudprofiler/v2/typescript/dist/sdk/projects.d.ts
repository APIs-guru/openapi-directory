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
     * cloudprofilerProjectsProfilesCreate - CreateProfile creates a new profile resource in the online mode. The server ensures that the new profiles are created at a constant rate per deployment, so the creation request may hang for some time until the next profile session is available. The request may fail with ABORTED error if the creation is not available within ~1m, the response will indicate the duration of the backoff the client should take before attempting creating a profile again. The backoff duration is returned in google.rpc.RetryInfo extension on the response status. To a gRPC client, the extension will be return as a binary-serialized proto in the trailing metadata item named "google.rpc.retryinfo-bin".
    **/
    cloudprofilerProjectsProfilesCreate(req: operations.CloudprofilerProjectsProfilesCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudprofilerProjectsProfilesCreateResponse>;
    /**
     * cloudprofilerProjectsProfilesCreateOffline - CreateOfflineProfile creates a new profile resource in the offline mode. The client provides the profile to create along with the profile bytes, the server records it.
    **/
    cloudprofilerProjectsProfilesCreateOffline(req: operations.CloudprofilerProjectsProfilesCreateOfflineRequest, config?: AxiosRequestConfig): Promise<operations.CloudprofilerProjectsProfilesCreateOfflineResponse>;
    /**
     * cloudprofilerProjectsProfilesPatch - UpdateProfile updates the profile bytes and labels on the profile resource created in the online mode. Updating the bytes for profiles created in the offline mode is currently not supported: the profile content must be provided at the time of the profile creation.
    **/
    cloudprofilerProjectsProfilesPatch(req: operations.CloudprofilerProjectsProfilesPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudprofilerProjectsProfilesPatchResponse>;
}
