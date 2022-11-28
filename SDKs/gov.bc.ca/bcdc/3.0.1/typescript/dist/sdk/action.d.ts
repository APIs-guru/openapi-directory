import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Action {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getActionOrganizationActivityList - Get the activity stream of an organization
     *
     * Return an organization's activity stream
    **/
    getActionOrganizationActivityList(req: operations.GetActionOrganizationActivityListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationActivityListResponse>;
    /**
     * getActionOrganizationActivityListHtml - Get the activity stream of an organization, HTML format
     *
     * Return an organization's activity stream as HTML
    **/
    getActionOrganizationActivityListHtml(req: operations.GetActionOrganizationActivityListHtmlRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationActivityListHtmlResponse>;
    /**
     * getActionOrganizationAutocomplete - Get names of organizations that match a query string
     *
     * Return a list of organization names that contain a string
    **/
    getActionOrganizationAutocomplete(req: operations.GetActionOrganizationAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationAutocompleteResponse>;
    /**
     * getActionOrganizationFollowerCount - Get number of followers of an organization
     *
     * Return the number of followers of an organization
    **/
    getActionOrganizationFollowerCount(req: operations.GetActionOrganizationFollowerCountRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationFollowerCountResponse>;
    /**
     * getActionOrganizationFollowerList - Get users following an organization
     *
     * Return a list of users that are following a given organization
    **/
    getActionOrganizationFollowerList(req: operations.GetActionOrganizationFollowerListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationFollowerListResponse>;
    /**
     * getActionOrganizationList - Get names of all organizations
     *
     * Returns the names of all indexed organizations
    **/
    getActionOrganizationList(req: operations.GetActionOrganizationListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationListResponse>;
    /**
     * getActionOrganizationListForUser - Get organizations that a user has a given permission for
     *
     * Return the organizations that the user has a given permission for
    **/
    getActionOrganizationListForUser(req: operations.GetActionOrganizationListForUserRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationListForUserResponse>;
    /**
     * getActionOrganizationRevisionList - Get organization revisions
     *
     * Return an organization's revisions
    **/
    getActionOrganizationRevisionList(req: operations.GetActionOrganizationRevisionListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationRevisionListResponse>;
    /**
     * getActionOrganizationShow - Get details of a specific organization
     *
     * Return the details of an organization
    **/
    getActionOrganizationShow(req: operations.GetActionOrganizationShowRequest, config?: AxiosRequestConfig): Promise<operations.GetActionOrganizationShowResponse>;
    /**
     * getActionPackageActivityList - Get the activity stream of a package (dataset)
     *
     * Returns a package's activity stream
    **/
    getActionPackageActivityList(req: operations.GetActionPackageActivityListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageActivityListResponse>;
    /**
     * getActionPackageActivityListHtml - Get the activity stream of a package (dataset), HTML format
     *
     * The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.
    **/
    getActionPackageActivityListHtml(req: operations.GetActionPackageActivityListHtmlRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageActivityListHtmlResponse>;
    /**
     * getActionPackageAutocomplete - Find packages (datasets) matching a query
     *
     * Return a list of datasets that match a string
    **/
    getActionPackageAutocomplete(req: operations.GetActionPackageAutocompleteRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageAutocompleteResponse>;
    /**
     * getActionPackageList - Get a list of all packages (datasets)
     *
     * Returns the names of all indexed packages (datasets)
    **/
    getActionPackageList(req: operations.GetActionPackageListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageListResponse>;
    /**
     * getActionPackageRelationshipsList - Get package (dataset) relationships
     *
     * Return a dataset's relationships
    **/
    getActionPackageRelationshipsList(req: operations.GetActionPackageRelationshipsListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageRelationshipsListResponse>;
    /**
     * getActionPackageRevisionList - Get list of revisions for a package (dataset)
     *
     * Return a dataset's revision as a list of dictionaries
    **/
    getActionPackageRevisionList(req: operations.GetActionPackageRevisionListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageRevisionListResponse>;
    /**
     * getActionPackageSearch - Find packages (datasets) matching query terms
     *
     * Searches for packages (datasets) matching the specified query terms
    **/
    getActionPackageSearch(req: operations.GetActionPackageSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageSearchResponse>;
    /**
     * getActionPackageShow - Get metadata about one specific package (dataset)
     *
     * Returns metadata about the package (dataset) corresponding to the specified unique name
    **/
    getActionPackageShow(req: operations.GetActionPackageShowRequest, config?: AxiosRequestConfig): Promise<operations.GetActionPackageShowResponse>;
    /**
     * getActionRelatedList - Gets items related to a package (dataset)
     *
     * Returns a dataset's related items.
    **/
    getActionRelatedList(req: operations.GetActionRelatedListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionRelatedListResponse>;
    /**
     * getActionResourceSearch - Find resources
     *
     * Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.
    **/
    getActionResourceSearch(req: operations.GetActionResourceSearchRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResourceSearchResponse>;
    /**
     * getActionResourceShow - Get metadata for a specific resource
     *
     * Return the metadata of a resource
    **/
    getActionResourceShow(req: operations.GetActionResourceShowRequest, config?: AxiosRequestConfig): Promise<operations.GetActionResourceShowResponse>;
    /**
     * getActionStatusShow - Get the site status
     *
     * Returns the site status
    **/
    getActionStatusShow(config?: AxiosRequestConfig): Promise<operations.GetActionStatusShowResponse>;
    /**
     * getActionTagList - Get a list of tags
     *
     * Returns the names of all indexed tags
    **/
    getActionTagList(req: operations.GetActionTagListRequest, config?: AxiosRequestConfig): Promise<operations.GetActionTagListResponse>;
}
