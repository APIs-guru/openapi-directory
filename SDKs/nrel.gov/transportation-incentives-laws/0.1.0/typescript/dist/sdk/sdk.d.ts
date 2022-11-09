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
    GetV1CategoryListOutputFormat(req: operations.GetV1CategoryListOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetV1CategoryListOutputFormatResponse>;
    GetV1IdOutputFormat(req: operations.GetV1IdOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetV1IdOutputFormatResponse>;
    GetV1PocsOutputFormat(req: operations.GetV1PocsOutputFormatRequest, config?: AxiosRequestConfig): Promise<operations.GetV1PocsOutputFormatResponse>;
    TransportationIncentivesLaws(req: operations.TransportationIncentivesLawsRequest, config?: AxiosRequestConfig): Promise<operations.TransportationIncentivesLawsResponse>;
}
export {};
