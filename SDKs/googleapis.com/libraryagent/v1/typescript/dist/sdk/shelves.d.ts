import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Shelves {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * libraryagentShelvesBooksBorrow - Borrow a book from the library. Returns the book if it is borrowed successfully. Returns NOT_FOUND if the book does not exist in the library. Returns quota exceeded error if the amount of books borrowed exceeds allocation quota in any dimensions.
    **/
    libraryagentShelvesBooksBorrow(req: operations.LibraryagentShelvesBooksBorrowRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesBooksBorrowResponse>;
    /**
     * libraryagentShelvesBooksGet - Gets a book. Returns NOT_FOUND if the book does not exist.
    **/
    libraryagentShelvesBooksGet(req: operations.LibraryagentShelvesBooksGetRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesBooksGetResponse>;
    /**
     * libraryagentShelvesBooksList - Lists books in a shelf. The order is unspecified but deterministic. Newly created books will not necessarily be added to the end of this list. Returns NOT_FOUND if the shelf does not exist.
    **/
    libraryagentShelvesBooksList(req: operations.LibraryagentShelvesBooksListRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesBooksListResponse>;
    /**
     * libraryagentShelvesBooksReturn - Return a book to the library. Returns the book if it is returned to the library successfully. Returns error if the book does not belong to the library or the users didn't borrow before.
    **/
    libraryagentShelvesBooksReturn(req: operations.LibraryagentShelvesBooksReturnRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesBooksReturnResponse>;
    /**
     * libraryagentShelvesList - Lists shelves. The order is unspecified but deterministic. Newly created shelves will not necessarily be added to the end of this list.
    **/
    libraryagentShelvesList(req: operations.LibraryagentShelvesListRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesListResponse>;
}
