import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    ReadDependenciesV1EnCoreWebSmDependenciesPost(req: operations.ReadDependenciesV1EnCoreWebSmDependenciesPostRequest, config?: AxiosRequestConfig): Promise<operations.ReadDependenciesV1EnCoreWebSmDependenciesPostResponse>;
    ReadEntitiesV1EnCoreWebSmEntitiesPost(req: operations.ReadEntitiesV1EnCoreWebSmEntitiesPostRequest, config?: AxiosRequestConfig): Promise<operations.ReadEntitiesV1EnCoreWebSmEntitiesPostResponse>;
    ReadRootV1EnCoreWebSmGet(config?: AxiosRequestConfig): Promise<operations.ReadRootV1EnCoreWebSmGetResponse>;
    ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPost(req: operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostRequest, config?: AxiosRequestConfig): Promise<operations.ReadSentenceDependenciesV1EnCoreWebSmSentenceDependenciesPostResponse>;
    ReadVersionV1EnCoreWebSmVersionGet(config?: AxiosRequestConfig): Promise<operations.ReadVersionV1EnCoreWebSmVersionGetResponse>;
}
export {};
