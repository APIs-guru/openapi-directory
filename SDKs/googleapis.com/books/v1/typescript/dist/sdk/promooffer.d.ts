import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Promooffer {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksPromoofferAccept - Accepts the promo offer.
    **/
    booksPromoofferAccept(req: operations.BooksPromoofferAcceptRequest, config?: AxiosRequestConfig): Promise<operations.BooksPromoofferAcceptResponse>;
    /**
     * booksPromoofferDismiss - Marks the promo offer as dismissed.
    **/
    booksPromoofferDismiss(req: operations.BooksPromoofferDismissRequest, config?: AxiosRequestConfig): Promise<operations.BooksPromoofferDismissResponse>;
    /**
     * booksPromoofferGet - Returns a list of promo offers available to the user
    **/
    booksPromoofferGet(req: operations.BooksPromoofferGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksPromoofferGetResponse>;
}
