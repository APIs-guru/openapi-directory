import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Volumes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksVolumesAssociatedList - Return a list of associated books.
    **/
    booksVolumesAssociatedList(req: operations.BooksVolumesAssociatedListRequest, config?: AxiosRequestConfig): Promise<operations.BooksVolumesAssociatedListResponse>;
    /**
     * booksVolumesGet - Gets volume information for a single volume.
    **/
    booksVolumesGet(req: operations.BooksVolumesGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksVolumesGetResponse>;
    /**
     * booksVolumesList - Performs a book search.
    **/
    booksVolumesList(req: operations.BooksVolumesListRequest, config?: AxiosRequestConfig): Promise<operations.BooksVolumesListResponse>;
    /**
     * booksVolumesMybooksList - Return a list of books in My Library.
    **/
    booksVolumesMybooksList(req: operations.BooksVolumesMybooksListRequest, config?: AxiosRequestConfig): Promise<operations.BooksVolumesMybooksListResponse>;
    /**
     * booksVolumesRecommendedList - Return a list of recommended books for the current user.
    **/
    booksVolumesRecommendedList(req: operations.BooksVolumesRecommendedListRequest, config?: AxiosRequestConfig): Promise<operations.BooksVolumesRecommendedListResponse>;
    /**
     * booksVolumesRecommendedRate - Rate a recommended book for the current user.
    **/
    booksVolumesRecommendedRate(req: operations.BooksVolumesRecommendedRateRequest, config?: AxiosRequestConfig): Promise<operations.BooksVolumesRecommendedRateResponse>;
    /**
     * booksVolumesUseruploadedList - Return a list of books uploaded by the current user.
    **/
    booksVolumesUseruploadedList(req: operations.BooksVolumesUseruploadedListRequest, config?: AxiosRequestConfig): Promise<operations.BooksVolumesUseruploadedListResponse>;
}
