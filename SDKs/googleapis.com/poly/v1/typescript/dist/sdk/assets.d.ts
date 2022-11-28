import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Assets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * polyAssetsGet - Returns detailed information about an asset given its name. PRIVATE assets are returned only if the currently authenticated user (via OAuth token) is the author of the asset.
    **/
    polyAssetsGet(req: operations.PolyAssetsGetRequest, config?: AxiosRequestConfig): Promise<operations.PolyAssetsGetResponse>;
    /**
     * polyAssetsList - Lists all public, remixable assets. These are assets with an access level of PUBLIC and published under the CC-By license.
    **/
    polyAssetsList(req: operations.PolyAssetsListRequest, config?: AxiosRequestConfig): Promise<operations.PolyAssetsListResponse>;
}
