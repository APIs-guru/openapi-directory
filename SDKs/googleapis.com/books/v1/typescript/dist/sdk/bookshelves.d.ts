import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Bookshelves {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksBookshelvesGet - Retrieves metadata for a specific bookshelf for the specified user.
    **/
    booksBookshelvesGet(req: operations.BooksBookshelvesGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksBookshelvesGetResponse>;
    /**
     * booksBookshelvesList - Retrieves a list of public bookshelves for the specified user.
    **/
    booksBookshelvesList(req: operations.BooksBookshelvesListRequest, config?: AxiosRequestConfig): Promise<operations.BooksBookshelvesListResponse>;
    /**
     * booksBookshelvesVolumesList - Retrieves volumes in a specific bookshelf for the specified user.
    **/
    booksBookshelvesVolumesList(req: operations.BooksBookshelvesVolumesListRequest, config?: AxiosRequestConfig): Promise<operations.BooksBookshelvesVolumesListResponse>;
}
