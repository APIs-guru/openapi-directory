import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class People {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * plusPeopleGet - Get a person's profile. If your app uses scope https://www.googleapis.com/auth/plus.login, this method is guaranteed to return ageRange and language.
    **/
    plusPeopleGet(req: operations.PlusPeopleGetRequest, config?: AxiosRequestConfig): Promise<operations.PlusPeopleGetResponse>;
    /**
     * plusPeopleList - List all of the people in the specified collection.
    **/
    plusPeopleList(req: operations.PlusPeopleListRequest, config?: AxiosRequestConfig): Promise<operations.PlusPeopleListResponse>;
    /**
     * plusPeopleListByActivity - Shut down. See https://developers.google.com/+/api-shutdown for more details.
    **/
    plusPeopleListByActivity(req: operations.PlusPeopleListByActivityRequest, config?: AxiosRequestConfig): Promise<operations.PlusPeopleListByActivityResponse>;
    /**
     * plusPeopleSearch - Shut down. See https://developers.google.com/+/api-shutdown for more details.
    **/
    plusPeopleSearch(req: operations.PlusPeopleSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlusPeopleSearchResponse>;
}
