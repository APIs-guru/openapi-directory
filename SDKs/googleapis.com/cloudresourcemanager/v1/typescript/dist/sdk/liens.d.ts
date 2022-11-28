import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Liens {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * cloudresourcemanagerLiensCreate - Create a Lien which applies to the resource denoted by the `parent` field. Callers of this method will require permission on the `parent` resource. For example, applying to `projects/1234` requires permission `resourcemanager.projects.updateLiens`. NOTE: Some resources may limit the number of Liens which may be applied.
    **/
    cloudresourcemanagerLiensCreate(req: operations.CloudresourcemanagerLiensCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerLiensCreateResponse>;
    /**
     * cloudresourcemanagerLiensDelete - Delete a Lien by `name`. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.updateLiens`.
    **/
    cloudresourcemanagerLiensDelete(req: operations.CloudresourcemanagerLiensDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerLiensDeleteResponse>;
    /**
     * cloudresourcemanagerLiensList - List all Liens applied to the `parent` resource. Callers of this method will require permission on the `parent` resource. For example, a Lien with a `parent` of `projects/1234` requires permission `resourcemanager.projects.get`.
    **/
    cloudresourcemanagerLiensList(req: operations.CloudresourcemanagerLiensListRequest, config?: AxiosRequestConfig): Promise<operations.CloudresourcemanagerLiensListResponse>;
}
