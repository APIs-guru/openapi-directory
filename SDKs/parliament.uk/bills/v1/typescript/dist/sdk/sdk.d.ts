import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://bills-api.parliament.uk"];
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
     * getApiV1BillTypes - Returns a list of Bill types.
    **/
    getApiV1BillTypes(req: operations.GetApiV1BillTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1BillTypesResponse>;
    /**
     * getApiV1BillsBillIdStages - Returns all Bill stages.
    **/
    getApiV1BillsBillIdStages(req: operations.GetApiV1BillsBillIdStagesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1BillsBillIdStagesResponse>;
    /**
     * getApiV1BillsBillIdStagesStageIdPublications - Return a list of Bill stage publications.
    **/
    getApiV1BillsBillIdStagesStageIdPublications(req: operations.GetApiV1BillsBillIdStagesStageIdPublicationsRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1BillsBillIdStagesStageIdPublicationsResponse>;
    /**
     * getApiV1PublicationTypes - Returns a list of publication types.
    **/
    getApiV1PublicationTypes(req: operations.GetApiV1PublicationTypesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1PublicationTypesResponse>;
    /**
     * getApiV1PublicationsPublicationIdDocumentsDocumentId - Return information on a document.
    **/
    getApiV1PublicationsPublicationIdDocumentsDocumentId(req: operations.GetApiV1PublicationsPublicationIdDocumentsDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1PublicationsPublicationIdDocumentsDocumentIdResponse>;
    /**
     * getApiV1PublicationsPublicationIdDocumentsDocumentIdDownload - Return a document.
    **/
    getApiV1PublicationsPublicationIdDocumentsDocumentIdDownload(req: operations.GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1PublicationsPublicationIdDocumentsDocumentIdDownloadResponse>;
    /**
     * getApiV1RssBillsIdRss - Returns an Rss feed of a certain Bill.
    **/
    getApiV1RssBillsIdRss(req: operations.GetApiV1RssBillsIdRssRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1RssBillsIdRssResponse>;
    /**
     * getApiV1RssAllbillsRss - Returns an Rss feed of all Bills.
    **/
    getApiV1RssAllbillsRss(config?: AxiosRequestConfig): Promise<operations.GetApiV1RssAllbillsRssResponse>;
    /**
     * getApiV1RssPrivatebillsRss - Returns an Rss feed of private Bills.
    **/
    getApiV1RssPrivatebillsRss(config?: AxiosRequestConfig): Promise<operations.GetApiV1RssPrivatebillsRssResponse>;
    /**
     * getApiV1RssPublicbillsRss - Returns an Rss feed of public Bills.
    **/
    getApiV1RssPublicbillsRss(config?: AxiosRequestConfig): Promise<operations.GetApiV1RssPublicbillsRssResponse>;
    /**
     * getApiV1Stages - Returns a list of Bill stages.
    **/
    getApiV1Stages(req: operations.GetApiV1StagesRequest, config?: AxiosRequestConfig): Promise<operations.GetApiV1StagesResponse>;
    /**
     * getAmendment - Returns an amendment.
    **/
    getAmendment(req: operations.GetAmendmentRequest, config?: AxiosRequestConfig): Promise<operations.GetAmendmentResponse>;
    /**
     * getAmendments - Returns a list of amendments.
    **/
    getAmendments(req: operations.GetAmendmentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAmendmentsResponse>;
    /**
     * getBill - Return a Bill.
    **/
    getBill(req: operations.GetBillRequest, config?: AxiosRequestConfig): Promise<operations.GetBillResponse>;
    /**
     * getBillPublication - Return a list of Bill publications.
    **/
    getBillPublication(req: operations.GetBillPublicationRequest, config?: AxiosRequestConfig): Promise<operations.GetBillPublicationResponse>;
    /**
     * getBillStageDetails - Returns a Bill stage.
    **/
    getBillStageDetails(req: operations.GetBillStageDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetBillStageDetailsResponse>;
    /**
     * getBills - Returns a list of Bills.
    **/
    getBills(req: operations.GetBillsRequest, config?: AxiosRequestConfig): Promise<operations.GetBillsResponse>;
    /**
     * getNewsArticles - Returns a list of news articles for a Bill.
    **/
    getNewsArticles(req: operations.GetNewsArticlesRequest, config?: AxiosRequestConfig): Promise<operations.GetNewsArticlesResponse>;
    /**
     * getSittings - Returns a list of Sittings.
    **/
    getSittings(req: operations.GetSittingsRequest, config?: AxiosRequestConfig): Promise<operations.GetSittingsResponse>;
}
export {};
