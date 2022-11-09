import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Gets a two-letter abbreviation for a state or province given a permutation of state or province data.
    **/
    Getstateabbreviation(req: operations.GetstateabbreviationRequest, config?: AxiosRequestConfig): Promise<operations.GetstateabbreviationResponse>;
}
export {};
