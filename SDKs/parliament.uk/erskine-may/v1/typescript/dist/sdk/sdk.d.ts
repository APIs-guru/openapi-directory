import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://parliament.uk"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * browseIndexTerms - Returns a list of index terms by start letter.
    **/
    browseIndexTerms(req: operations.BrowseIndexTermsRequest, config?: AxiosRequestConfig): Promise<operations.BrowseIndexTermsResponse>;
    /**
     * getApiIndexTermIndexTermId - Returns an index term by id.
    **/
    getApiIndexTermIndexTermId(req: operations.GetApiIndexTermIndexTermIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiIndexTermIndexTermIdResponse>;
    /**
     * getApiPart - Returns a list of all parts.
    **/
    getApiPart(config?: AxiosRequestConfig): Promise<operations.GetApiPartResponse>;
    /**
     * getApiPartPartNumber - Returns a part by part number.
    **/
    getApiPartPartNumber(req: operations.GetApiPartPartNumberRequest, config?: AxiosRequestConfig): Promise<operations.GetApiPartPartNumberResponse>;
    /**
     * getApiSectionSectionId - Returns a section by section id.
    **/
    getApiSectionSectionId(req: operations.GetApiSectionSectionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiSectionSectionIdResponse>;
    /**
     * get - Returns a single chapter overview by chapter number.
    **/
    get(req: operations.GetRequest, config?: AxiosRequestConfig): Promise<operations.GetResponse>;
    /**
     * getIndexTermSearchResults - Returns a list of index terms which contain the search term.
    **/
    getIndexTermSearchResults(req: operations.GetIndexTermSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetIndexTermSearchResultsResponse>;
    /**
     * getParagraphSearchResults - Returns a list of paragraphs which contain the search term.
    **/
    getParagraphSearchResults(req: operations.GetParagraphSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetParagraphSearchResultsResponse>;
    /**
     * getParagraphSectionId - Returns a section overview by reference.
    **/
    getParagraphSectionId(req: operations.GetParagraphSectionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetParagraphSectionIdResponse>;
    /**
     * getSectionSearchResults - Returns a list of sections which contain the search term.
    **/
    getSectionSearchResults(req: operations.GetSectionSearchResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetSectionSearchResultsResponse>;
    /**
     * navigate - Returns a section overview by section id and step.
    **/
    navigate(req: operations.NavigateRequest, config?: AxiosRequestConfig): Promise<operations.NavigateResponse>;
}
export {};
