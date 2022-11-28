import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Mylibrary {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * booksMylibraryAnnotationsDelete - Deletes an annotation.
    **/
    booksMylibraryAnnotationsDelete(req: operations.BooksMylibraryAnnotationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsDeleteResponse>;
    /**
     * booksMylibraryAnnotationsInsert - Inserts a new annotation.
    **/
    booksMylibraryAnnotationsInsert(req: operations.BooksMylibraryAnnotationsInsertRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsInsertResponse>;
    /**
     * booksMylibraryAnnotationsList - Retrieves a list of annotations, possibly filtered.
    **/
    booksMylibraryAnnotationsList(req: operations.BooksMylibraryAnnotationsListRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsListResponse>;
    /**
     * booksMylibraryAnnotationsSummary - Gets the summary of specified layers.
    **/
    booksMylibraryAnnotationsSummary(req: operations.BooksMylibraryAnnotationsSummaryRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsSummaryResponse>;
    /**
     * booksMylibraryAnnotationsUpdate - Updates an existing annotation.
    **/
    booksMylibraryAnnotationsUpdate(req: operations.BooksMylibraryAnnotationsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryAnnotationsUpdateResponse>;
    /**
     * booksMylibraryBookshelvesAddVolume - Adds a volume to a bookshelf.
    **/
    booksMylibraryBookshelvesAddVolume(req: operations.BooksMylibraryBookshelvesAddVolumeRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesAddVolumeResponse>;
    /**
     * booksMylibraryBookshelvesClearVolumes - Clears all volumes from a bookshelf.
    **/
    booksMylibraryBookshelvesClearVolumes(req: operations.BooksMylibraryBookshelvesClearVolumesRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesClearVolumesResponse>;
    /**
     * booksMylibraryBookshelvesGet - Retrieves metadata for a specific bookshelf belonging to the authenticated user.
    **/
    booksMylibraryBookshelvesGet(req: operations.BooksMylibraryBookshelvesGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesGetResponse>;
    /**
     * booksMylibraryBookshelvesList - Retrieves a list of bookshelves belonging to the authenticated user.
    **/
    booksMylibraryBookshelvesList(req: operations.BooksMylibraryBookshelvesListRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesListResponse>;
    /**
     * booksMylibraryBookshelvesMoveVolume - Moves a volume within a bookshelf.
    **/
    booksMylibraryBookshelvesMoveVolume(req: operations.BooksMylibraryBookshelvesMoveVolumeRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesMoveVolumeResponse>;
    /**
     * booksMylibraryBookshelvesRemoveVolume - Removes a volume from a bookshelf.
    **/
    booksMylibraryBookshelvesRemoveVolume(req: operations.BooksMylibraryBookshelvesRemoveVolumeRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesRemoveVolumeResponse>;
    /**
     * booksMylibraryBookshelvesVolumesList - Gets volume information for volumes on a bookshelf.
    **/
    booksMylibraryBookshelvesVolumesList(req: operations.BooksMylibraryBookshelvesVolumesListRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryBookshelvesVolumesListResponse>;
    /**
     * booksMylibraryReadingpositionsGet - Retrieves my reading position information for a volume.
    **/
    booksMylibraryReadingpositionsGet(req: operations.BooksMylibraryReadingpositionsGetRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryReadingpositionsGetResponse>;
    /**
     * booksMylibraryReadingpositionsSetPosition - Sets my reading position information for a volume.
    **/
    booksMylibraryReadingpositionsSetPosition(req: operations.BooksMylibraryReadingpositionsSetPositionRequest, config?: AxiosRequestConfig): Promise<operations.BooksMylibraryReadingpositionsSetPositionResponse>;
}
