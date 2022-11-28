import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Query {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudsearchQuerySearch - The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
    **/
    cloudsearchQuerySearch(req: operations.CloudsearchQuerySearchRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchQuerySearchResponse>;
    /**
     * cloudsearchQuerySourcesList - Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
    **/
    cloudsearchQuerySourcesList(req: operations.CloudsearchQuerySourcesListRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchQuerySourcesListResponse>;
    /**
     * cloudsearchQuerySuggest - Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
    **/
    cloudsearchQuerySuggest(req: operations.CloudsearchQuerySuggestRequest, config?: AxiosRequestConfig): Promise<operations.CloudsearchQuerySuggestResponse>;
}
