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
     * prodTtSasportalNodesDevicesSignDevice - Signs a device.
    **/
    prodTtSasportalNodesDevicesSignDevice(req: operations.ProdTtSasportalNodesDevicesSignDeviceRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesDevicesSignDeviceResponse>;
    /**
     * prodTtSasportalNodesDevicesUpdateSigned - Updates a signed device.
    **/
    prodTtSasportalNodesDevicesUpdateSigned(req: operations.ProdTtSasportalNodesDevicesUpdateSignedRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesDevicesUpdateSignedResponse>;
    /**
     * prodTtSasportalNodesNodesDelete - Deletes a node.
    **/
    prodTtSasportalNodesNodesDelete(req: operations.ProdTtSasportalNodesNodesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDeleteResponse>;
    /**
     * prodTtSasportalNodesNodesDeploymentsCreate - Creates a new deployment.
    **/
    prodTtSasportalNodesNodesDeploymentsCreate(req: operations.ProdTtSasportalNodesNodesDeploymentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDeploymentsCreateResponse>;
    /**
     * prodTtSasportalNodesNodesDeploymentsList - Lists deployments.
    **/
    prodTtSasportalNodesNodesDeploymentsList(req: operations.ProdTtSasportalNodesNodesDeploymentsListRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDeploymentsListResponse>;
    /**
     * prodTtSasportalNodesNodesDevicesCreate - Creates a device under a node or customer.
    **/
    prodTtSasportalNodesNodesDevicesCreate(req: operations.ProdTtSasportalNodesNodesDevicesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDevicesCreateResponse>;
    /**
     * prodTtSasportalNodesNodesDevicesCreateSigned - Creates a signed device under a node or customer.
    **/
    prodTtSasportalNodesNodesDevicesCreateSigned(req: operations.ProdTtSasportalNodesNodesDevicesCreateSignedRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDevicesCreateSignedResponse>;
    /**
     * prodTtSasportalNodesNodesDevicesList - Lists devices under a node or customer.
    **/
    prodTtSasportalNodesNodesDevicesList(req: operations.ProdTtSasportalNodesNodesDevicesListRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesDevicesListResponse>;
    /**
     * prodTtSasportalNodesNodesGet - Returns a requested node.
    **/
    prodTtSasportalNodesNodesGet(req: operations.ProdTtSasportalNodesNodesGetRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesGetResponse>;
    /**
     * prodTtSasportalNodesNodesMove - Moves a node under another node or customer.
    **/
    prodTtSasportalNodesNodesMove(req: operations.ProdTtSasportalNodesNodesMoveRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesMoveResponse>;
    /**
     * prodTtSasportalNodesNodesNodesCreate - Creates a new node.
    **/
    prodTtSasportalNodesNodesNodesCreate(req: operations.ProdTtSasportalNodesNodesNodesCreateRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesNodesCreateResponse>;
    /**
     * prodTtSasportalNodesNodesNodesList - Lists nodes.
    **/
    prodTtSasportalNodesNodesNodesList(req: operations.ProdTtSasportalNodesNodesNodesListRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesNodesListResponse>;
    /**
     * prodTtSasportalNodesNodesPatch - Updates an existing node.
    **/
    prodTtSasportalNodesNodesPatch(req: operations.ProdTtSasportalNodesNodesPatchRequest, config?: AxiosRequestConfig): Promise<operations.ProdTtSasportalNodesNodesPatchResponse>;
}
