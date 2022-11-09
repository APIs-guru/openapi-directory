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
    SpeechOperationsGet(req: operations.SpeechOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.SpeechOperationsGetResponse>;
    SpeechOperationsList(req: operations.SpeechOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.SpeechOperationsListResponse>;
    SpeechProjectsLocationsCustomClassesCreate(req: operations.SpeechProjectsLocationsCustomClassesCreateRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsCustomClassesCreateResponse>;
    SpeechProjectsLocationsCustomClassesList(req: operations.SpeechProjectsLocationsCustomClassesListRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsCustomClassesListResponse>;
    SpeechProjectsLocationsPhraseSetsCreate(req: operations.SpeechProjectsLocationsPhraseSetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsCreateResponse>;
    SpeechProjectsLocationsPhraseSetsDelete(req: operations.SpeechProjectsLocationsPhraseSetsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsDeleteResponse>;
    SpeechProjectsLocationsPhraseSetsGet(req: operations.SpeechProjectsLocationsPhraseSetsGetRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsGetResponse>;
    SpeechProjectsLocationsPhraseSetsList(req: operations.SpeechProjectsLocationsPhraseSetsListRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsListResponse>;
    SpeechProjectsLocationsPhraseSetsPatch(req: operations.SpeechProjectsLocationsPhraseSetsPatchRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsPatchResponse>;
    SpeechSpeechLongrunningrecognize(req: operations.SpeechSpeechLongrunningrecognizeRequest, config?: AxiosRequestConfig): Promise<operations.SpeechSpeechLongrunningrecognizeResponse>;
    SpeechSpeechRecognize(req: operations.SpeechSpeechRecognizeRequest, config?: AxiosRequestConfig): Promise<operations.SpeechSpeechRecognizeResponse>;
}
export {};
