import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    LibraryagentShelvesBooksBorrow(req: operations.LibraryagentShelvesBooksBorrowRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesBooksBorrowResponse>;
    LibraryagentShelvesBooksGet(req: operations.LibraryagentShelvesBooksGetRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesBooksGetResponse>;
    LibraryagentShelvesBooksList(req: operations.LibraryagentShelvesBooksListRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesBooksListResponse>;
    LibraryagentShelvesBooksReturn(req: operations.LibraryagentShelvesBooksReturnRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesBooksReturnResponse>;
    LibraryagentShelvesList(req: operations.LibraryagentShelvesListRequest, config?: AxiosRequestConfig): Promise<operations.LibraryagentShelvesListResponse>;
}
export {};
