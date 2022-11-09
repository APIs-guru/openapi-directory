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
    TranscoderProjectsLocationsJobTemplatesCreate(req: operations.TranscoderProjectsLocationsJobTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesCreateResponse>;
    TranscoderProjectsLocationsJobTemplatesDelete(req: operations.TranscoderProjectsLocationsJobTemplatesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesDeleteResponse>;
    TranscoderProjectsLocationsJobTemplatesGet(req: operations.TranscoderProjectsLocationsJobTemplatesGetRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesGetResponse>;
    TranscoderProjectsLocationsJobTemplatesList(req: operations.TranscoderProjectsLocationsJobTemplatesListRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobTemplatesListResponse>;
    TranscoderProjectsLocationsJobsCreate(req: operations.TranscoderProjectsLocationsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobsCreateResponse>;
    TranscoderProjectsLocationsJobsList(req: operations.TranscoderProjectsLocationsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.TranscoderProjectsLocationsJobsListResponse>;
}
export {};
