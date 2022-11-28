import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Documents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * docsDocumentsBatchUpdate - Applies one or more updates to the document. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies, the reply to the third request, and another empty reply, in that order. Because other users may be editing the document, the document might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the document should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
    **/
    docsDocumentsBatchUpdate(req: operations.DocsDocumentsBatchUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DocsDocumentsBatchUpdateResponse>;
    /**
     * docsDocumentsCreate - Creates a blank document using the title given in the request. Other fields in the request, including any provided content, are ignored. Returns the created document.
    **/
    docsDocumentsCreate(req: operations.DocsDocumentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DocsDocumentsCreateResponse>;
    /**
     * docsDocumentsGet - Gets the latest version of the specified document.
    **/
    docsDocumentsGet(req: operations.DocsDocumentsGetRequest, config?: AxiosRequestConfig): Promise<operations.DocsDocumentsGetResponse>;
}
