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
    FirebasestorageProjectsBucketsAddFirebase(req: operations.FirebasestorageProjectsBucketsAddFirebaseRequest, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsAddFirebaseResponse>;
    FirebasestorageProjectsBucketsGet(req: operations.FirebasestorageProjectsBucketsGetRequest, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsGetResponse>;
    FirebasestorageProjectsBucketsList(req: operations.FirebasestorageProjectsBucketsListRequest, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsListResponse>;
    FirebasestorageProjectsBucketsRemoveFirebase(req: operations.FirebasestorageProjectsBucketsRemoveFirebaseRequest, config?: AxiosRequestConfig): Promise<operations.FirebasestorageProjectsBucketsRemoveFirebaseResponse>;
}
export {};
