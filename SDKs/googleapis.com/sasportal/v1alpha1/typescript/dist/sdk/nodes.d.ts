import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Nodes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sasportalNodesDevicesSignDevice - Signs a device.
    **/
    sasportalNodesDevicesSignDevice(req: operations.SasportalNodesDevicesSignDeviceRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesDevicesSignDeviceResponse>;
    /**
     * sasportalNodesDevicesUpdateSigned - Updates a signed device.
    **/
    sasportalNodesDevicesUpdateSigned(req: operations.SasportalNodesDevicesUpdateSignedRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesDevicesUpdateSignedResponse>;
    /**
     * sasportalNodesNodesDelete - Deletes a node.
    **/
    sasportalNodesNodesDelete(req: operations.SasportalNodesNodesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDeleteResponse>;
    /**
     * sasportalNodesNodesDeploymentsCreate - Creates a new deployment.
    **/
    sasportalNodesNodesDeploymentsCreate(req: operations.SasportalNodesNodesDeploymentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDeploymentsCreateResponse>;
    /**
     * sasportalNodesNodesDeploymentsList - Lists deployments.
    **/
    sasportalNodesNodesDeploymentsList(req: operations.SasportalNodesNodesDeploymentsListRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDeploymentsListResponse>;
    /**
     * sasportalNodesNodesDevicesCreate - Creates a device under a node or customer.
    **/
    sasportalNodesNodesDevicesCreate(req: operations.SasportalNodesNodesDevicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDevicesCreateResponse>;
    /**
     * sasportalNodesNodesDevicesCreateSigned - Creates a signed device under a node or customer.
    **/
    sasportalNodesNodesDevicesCreateSigned(req: operations.SasportalNodesNodesDevicesCreateSignedRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDevicesCreateSignedResponse>;
    /**
     * sasportalNodesNodesDevicesList - Lists devices under a node or customer.
    **/
    sasportalNodesNodesDevicesList(req: operations.SasportalNodesNodesDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesDevicesListResponse>;
    /**
     * sasportalNodesNodesGet - Returns a requested node.
    **/
    sasportalNodesNodesGet(req: operations.SasportalNodesNodesGetRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesGetResponse>;
    /**
     * sasportalNodesNodesMove - Moves a node under another node or customer.
    **/
    sasportalNodesNodesMove(req: operations.SasportalNodesNodesMoveRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesMoveResponse>;
    /**
     * sasportalNodesNodesNodesCreate - Creates a new node.
    **/
    sasportalNodesNodesNodesCreate(req: operations.SasportalNodesNodesNodesCreateRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesNodesCreateResponse>;
    /**
     * sasportalNodesNodesNodesList - Lists nodes.
    **/
    sasportalNodesNodesNodesList(req: operations.SasportalNodesNodesNodesListRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesNodesListResponse>;
    /**
     * sasportalNodesNodesPatch - Updates an existing node.
    **/
    sasportalNodesNodesPatch(req: operations.SasportalNodesNodesPatchRequest, config?: AxiosRequestConfig): Promise<operations.SasportalNodesNodesPatchResponse>;
}
