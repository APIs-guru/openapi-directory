import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Kvpairs {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addKvPairs - Create key-value pair
    **/
    addKvPairs(req: operations.AddKvPairsRequest, config?: AxiosRequestConfig): Promise<operations.AddKvPairsResponse>;
    /**
     * deleteKvPair - Delete key-value pair
    **/
    deleteKvPair(req: operations.DeleteKvPairRequest, config?: AxiosRequestConfig): Promise<operations.DeleteKvPairResponse>;
    /**
     * getKvPairs - Get all key-value pairs
    **/
    getKvPairs(req: operations.GetKvPairsRequest, config?: AxiosRequestConfig): Promise<operations.GetKvPairsResponse>;
    /**
     * getKvPairsById - Get key-value pair
    **/
    getKvPairsById(req: operations.GetKvPairsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetKvPairsByIdResponse>;
    /**
     * updateKvPair - Update existing Key-value pair
    **/
    updateKvPair(req: operations.UpdateKvPairRequest, config?: AxiosRequestConfig): Promise<operations.UpdateKvPairResponse>;
}
