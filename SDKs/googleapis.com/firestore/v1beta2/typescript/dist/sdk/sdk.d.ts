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
    FirestoreProjectsDatabasesCollectionGroupsFieldsList(req: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsFieldsListResponse>;
    FirestoreProjectsDatabasesCollectionGroupsFieldsPatch(req: operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsFieldsPatchResponse>;
    FirestoreProjectsDatabasesCollectionGroupsIndexesCreate(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesCreateResponse>;
    FirestoreProjectsDatabasesCollectionGroupsIndexesDelete(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesDeleteResponse>;
    FirestoreProjectsDatabasesCollectionGroupsIndexesGet(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesGetResponse>;
    FirestoreProjectsDatabasesCollectionGroupsIndexesList(req: operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesCollectionGroupsIndexesListResponse>;
    FirestoreProjectsDatabasesExportDocuments(req: operations.FirestoreProjectsDatabasesExportDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesExportDocumentsResponse>;
    FirestoreProjectsDatabasesImportDocuments(req: operations.FirestoreProjectsDatabasesImportDocumentsRequest, config?: AxiosRequestConfig): Promise<operations.FirestoreProjectsDatabasesImportDocumentsResponse>;
}
export {};
