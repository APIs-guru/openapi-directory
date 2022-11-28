import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * speechProjectsLocationsCustomClassesCreate - Create a custom class.
    **/
    speechProjectsLocationsCustomClassesCreate(req: operations.SpeechProjectsLocationsCustomClassesCreateRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsCustomClassesCreateResponse>;
    /**
     * speechProjectsLocationsCustomClassesList - List custom classes.
    **/
    speechProjectsLocationsCustomClassesList(req: operations.SpeechProjectsLocationsCustomClassesListRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsCustomClassesListResponse>;
    /**
     * speechProjectsLocationsPhraseSetsCreate - Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.
    **/
    speechProjectsLocationsPhraseSetsCreate(req: operations.SpeechProjectsLocationsPhraseSetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsCreateResponse>;
    /**
     * speechProjectsLocationsPhraseSetsDelete - Delete a phrase set.
    **/
    speechProjectsLocationsPhraseSetsDelete(req: operations.SpeechProjectsLocationsPhraseSetsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsDeleteResponse>;
    /**
     * speechProjectsLocationsPhraseSetsGet - Get a phrase set.
    **/
    speechProjectsLocationsPhraseSetsGet(req: operations.SpeechProjectsLocationsPhraseSetsGetRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsGetResponse>;
    /**
     * speechProjectsLocationsPhraseSetsList - List phrase sets.
    **/
    speechProjectsLocationsPhraseSetsList(req: operations.SpeechProjectsLocationsPhraseSetsListRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsListResponse>;
    /**
     * speechProjectsLocationsPhraseSetsPatch - Update a phrase set.
    **/
    speechProjectsLocationsPhraseSetsPatch(req: operations.SpeechProjectsLocationsPhraseSetsPatchRequest, config?: AxiosRequestConfig): Promise<operations.SpeechProjectsLocationsPhraseSetsPatchResponse>;
}
