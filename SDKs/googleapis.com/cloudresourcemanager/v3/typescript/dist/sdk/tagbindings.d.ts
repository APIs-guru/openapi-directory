import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TagBindings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudresourcemanagerTagBindingsCreate - Creates a TagBinding between a TagValue and a Google Cloud resource.
    **/
    cloudresourcemanagerTagBindingsCreate(req: operations.CloudresourcemanagerTagBindingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagBindingsCreateResponse>;
    /**
     * cloudresourcemanagerTagBindingsList - Lists the TagBindings for the given Google Cloud resource, as specified with `parent`. NOTE: The `parent` field is expected to be a full resource name: https://cloud.google.com/apis/design/resource_names#full_resource_name
    **/
    cloudresourcemanagerTagBindingsList(req: operations.CloudresourcemanagerTagBindingsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerTagBindingsListResponse>;
}
