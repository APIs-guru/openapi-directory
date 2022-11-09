import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Return an organization's activity stream
    **/
    GetActionOrganizationActivityList(req: operations.GetActionOrganizationActivityListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationActivityListResponse>;
    /**
     * Return an organization's activity stream as HTML
    **/
    GetActionOrganizationActivityListHtml(req: operations.GetActionOrganizationActivityListHtmlRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationActivityListHtmlResponse>;
    /**
     * Return a list of organization names that contain a string
    **/
    GetActionOrganizationAutocomplete(req: operations.GetActionOrganizationAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationAutocompleteResponse>;
    /**
     * Return the number of followers of an organization
    **/
    GetActionOrganizationFollowerCount(req: operations.GetActionOrganizationFollowerCountRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationFollowerCountResponse>;
    /**
     * Return a list of users that are following a given organization
    **/
    GetActionOrganizationFollowerList(req: operations.GetActionOrganizationFollowerListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationFollowerListResponse>;
    /**
     * Returns the names of all indexed organizations
    **/
    GetActionOrganizationList(req: operations.GetActionOrganizationListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationListResponse>;
    /**
     * Return the organizations that the user has a given permission for
    **/
    GetActionOrganizationListForUser(req: operations.GetActionOrganizationListForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationListForUserResponse>;
    /**
     * Return an organization's revisions
    **/
    GetActionOrganizationRevisionList(req: operations.GetActionOrganizationRevisionListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationRevisionListResponse>;
    /**
     * Return the details of an organization
    **/
    GetActionOrganizationShow(req: operations.GetActionOrganizationShowRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationShowResponse>;
    /**
     * Returns a package's activity stream
    **/
    GetActionPackageActivityList(req: operations.GetActionPackageActivityListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageActivityListResponse>;
    /**
     * The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.
    **/
    GetActionPackageActivityListHtml(req: operations.GetActionPackageActivityListHtmlRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageActivityListHtmlResponse>;
    /**
     * Return a list of datasets that match a string
    **/
    GetActionPackageAutocomplete(req: operations.GetActionPackageAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageAutocompleteResponse>;
    /**
     * Returns the names of all indexed packages (datasets)
    **/
    GetActionPackageList(req: operations.GetActionPackageListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageListResponse>;
    /**
     * Return a dataset's relationships
    **/
    GetActionPackageRelationshipsList(req: operations.GetActionPackageRelationshipsListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageRelationshipsListResponse>;
    /**
     * Return a dataset's revision as a list of dictionaries
    **/
    GetActionPackageRevisionList(req: operations.GetActionPackageRevisionListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageRevisionListResponse>;
    /**
     * Searches for packages (datasets) matching the specified query terms
    **/
    GetActionPackageSearch(req: operations.GetActionPackageSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageSearchResponse>;
    /**
     * Returns metadata about the package (dataset) corresponding to the specified unique name
    **/
    GetActionPackageShow(req: operations.GetActionPackageShowRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageShowResponse>;
    /**
     * Returns a dataset's related items.
    **/
    GetActionRelatedList(req: operations.GetActionRelatedListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionRelatedListResponse>;
    /**
     * Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.
    **/
    GetActionResourceSearch(req: operations.GetActionResourceSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResourceSearchResponse>;
    /**
     * Return the metadata of a resource
    **/
    GetActionResourceShow(req: operations.GetActionResourceShowRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResourceShowResponse>;
    /**
     * Returns the site status
    **/
    GetActionStatusShow(config?: AxiosRequestConfig): Promise<operations.GetActionStatusShowResponse>;
    /**
     * Returns the names of all indexed tags
    **/
    GetActionTagList(req: operations.GetActionTagListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionTagListResponse>;
}
export {};
