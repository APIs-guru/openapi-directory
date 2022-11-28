import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Cloudloading {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksCloudloadingAddBook - Add a user-upload volume and triggers processing.
    **/
    booksCloudloadingAddBook(req: operations.BooksCloudloadingAddBookRequest, config?: AxiosRequestConfig): Promise<operations.BooksCloudloadingAddBookResponse>;
    /**
     * booksCloudloadingDeleteBook - Remove the book and its contents
    **/
    booksCloudloadingDeleteBook(req: operations.BooksCloudloadingDeleteBookRequest, config?: AxiosRequestConfig): Promise<operations.BooksCloudloadingDeleteBookResponse>;
    /**
     * booksCloudloadingUpdateBook - Updates a user-upload volume.
    **/
    booksCloudloadingUpdateBook(req: operations.BooksCloudloadingUpdateBookRequest, config?: AxiosRequestConfig): Promise<operations.BooksCloudloadingUpdateBookResponse>;
}
