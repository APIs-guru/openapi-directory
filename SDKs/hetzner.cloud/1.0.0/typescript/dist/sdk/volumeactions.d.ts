import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class VolumeActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getVolumesIdActions - Get all Actions for a Volume
     *
     * Returns all Action objects for a Volume. You can `sort` the results by using the sort URI parameter, and filter them with the `status` parameter.
    **/
    getVolumesIdActions(req: operations.GetVolumesIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesIdActionsResponse>;
    /**
     * getVolumesIdActionsActionId - Get an Action for a Volume
     *
     * Returns a specific Action for a Volume.
    **/
    getVolumesIdActionsActionId(req: operations.GetVolumesIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetVolumesIdActionsActionIdResponse>;
    /**
     * postVolumesIdActionsAttach - Attach Volume to a Server
     *
     * Attaches a Volume to a Server. Works only if the Server is in the same Location as the Volume.
    **/
    postVolumesIdActionsAttach(req: operations.PostVolumesIdActionsAttachRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesIdActionsAttachResponse>;
    /**
     * postVolumesIdActionsChangeProtection - Change Volume Protection
     *
     * Changes the protection configuration of a Volume.
    **/
    postVolumesIdActionsChangeProtection(req: operations.PostVolumesIdActionsChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesIdActionsChangeProtectionResponse>;
    /**
     * postVolumesIdActionsDetach - Detach Volume
     *
     * Detaches a Volume from the Server it’s attached to. You may attach it to a Server again at a later time.
    **/
    postVolumesIdActionsDetach(req: operations.PostVolumesIdActionsDetachRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesIdActionsDetachResponse>;
    /**
     * postVolumesIdActionsResize - Resize Volume
     *
     * Changes the size of a Volume. Note that downsizing a Volume is not possible.
    **/
    postVolumesIdActionsResize(req: operations.PostVolumesIdActionsResizeRequest, config?: AxiosRequestConfig): Promise<operations.PostVolumesIdActionsResizeResponse>;
}
