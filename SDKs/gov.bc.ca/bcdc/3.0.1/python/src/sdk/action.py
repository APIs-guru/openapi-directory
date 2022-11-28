import requests
from sdk.models import operations
from . import utils

class Action:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_action_organization_activity_list(self, request: operations.GetActionOrganizationActivityListRequest) -> operations.GetActionOrganizationActivityListResponse:
        r"""Get the activity stream of an organization
        Return an organization's activity stream
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/organization_activity_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionOrganizationActivityListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_organization_activity_list_html(self, request: operations.GetActionOrganizationActivityListHTMLRequest) -> operations.GetActionOrganizationActivityListHTMLResponse:
        r"""Get the activity stream of an organization, HTML format
        Return an organization's activity stream as HTML
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/organization_activity_list_html"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionOrganizationActivityListHTMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_organization_autocomplete(self, request: operations.GetActionOrganizationAutocompleteRequest) -> operations.GetActionOrganizationAutocompleteResponse:
        r"""Get names of organizations that match a query string
        Return a list of organization names that contain a string
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/organization_autocomplete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionOrganizationAutocompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_organization_follower_count(self, request: operations.GetActionOrganizationFollowerCountRequest) -> operations.GetActionOrganizationFollowerCountResponse:
        r"""Get number of followers of an organization
        Return the number of followers of an organization
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/organization_follower_count"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionOrganizationFollowerCountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_organization_follower_list(self, request: operations.GetActionOrganizationFollowerListRequest) -> operations.GetActionOrganizationFollowerListResponse:
        r"""Get users following an organization
        Return a list of users that are following a given organization
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/organization_follower_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionOrganizationFollowerListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_organization_list(self, request: operations.GetActionOrganizationListRequest) -> operations.GetActionOrganizationListResponse:
        r"""Get names of all organizations
        Returns the names of all indexed organizations
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/organization_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionOrganizationListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_organization_list_for_user(self, request: operations.GetActionOrganizationListForUserRequest) -> operations.GetActionOrganizationListForUserResponse:
        r"""Get organizations that a user has a given permission for
        Return the organizations that the user has a given permission for
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/organization_list_for_user"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionOrganizationListForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_organization_revision_list(self, request: operations.GetActionOrganizationRevisionListRequest) -> operations.GetActionOrganizationRevisionListResponse:
        r"""Get organization revisions
        Return an organization's revisions
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/organization_revision_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionOrganizationRevisionListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_organization_show(self, request: operations.GetActionOrganizationShowRequest) -> operations.GetActionOrganizationShowResponse:
        r"""Get details of a specific organization
        Return the details of an organization
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/organization_show"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionOrganizationShowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_package_activity_list(self, request: operations.GetActionPackageActivityListRequest) -> operations.GetActionPackageActivityListResponse:
        r"""Get the activity stream of a package (dataset)
        Returns a package's activity stream
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/package_activity_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionPackageActivityListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_package_activity_list_html(self, request: operations.GetActionPackageActivityListHTMLRequest) -> operations.GetActionPackageActivityListHTMLResponse:
        r"""Get the activity stream of a package (dataset), HTML format
        The activity stream is rendered as a snippet of HTML meant to be included in an HTML pag, i.e it doesn't have any header or footer.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/package_activity_list_html"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionPackageActivityListHTMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_package_autocomplete(self, request: operations.GetActionPackageAutocompleteRequest) -> operations.GetActionPackageAutocompleteResponse:
        r"""Find packages (datasets) matching a query
        Return a list of datasets that match a string
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/package_autocomplete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionPackageAutocompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_package_list(self, request: operations.GetActionPackageListRequest) -> operations.GetActionPackageListResponse:
        r"""Get a list of all packages (datasets)
        Returns the names of all indexed packages (datasets)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/package_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionPackageListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_package_relationships_list(self, request: operations.GetActionPackageRelationshipsListRequest) -> operations.GetActionPackageRelationshipsListResponse:
        r"""Get package (dataset) relationships
        Return a dataset's relationships
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/package_relationships_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionPackageRelationshipsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_package_revision_list(self, request: operations.GetActionPackageRevisionListRequest) -> operations.GetActionPackageRevisionListResponse:
        r"""Get list of revisions for a package (dataset)
        Return a dataset's revision as a list of dictionaries
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/package_revision_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionPackageRevisionListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_package_search(self, request: operations.GetActionPackageSearchRequest) -> operations.GetActionPackageSearchResponse:
        r"""Find packages (datasets) matching query terms
        Searches for packages (datasets) matching the specified query terms
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/package_search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionPackageSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_package_show(self, request: operations.GetActionPackageShowRequest) -> operations.GetActionPackageShowResponse:
        r"""Get metadata about one specific package (dataset)
        Returns metadata about the package (dataset) corresponding to the specified unique name
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/package_show"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionPackageShowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_related_list(self, request: operations.GetActionRelatedListRequest) -> operations.GetActionRelatedListResponse:
        r"""Gets items related to a package (dataset)
        Returns a dataset's related items.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/related_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionRelatedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_resource_search(self, request: operations.GetActionResourceSearchRequest) -> operations.GetActionResourceSearchResponse:
        r"""Find resources
        Returns a dictionary with two fields ``count`` and ``results``.             The ``count`` field contains the total number of Resources                found without the limit or query parameters having an effect.             The ``results`` field is a list of dictized Resource objects.             The query parameter is a required field. It is a string in                the form ``{field}:{term}`` or a list of strings, each of the             same form. Within each string, ``{field}`` is a field or extra             field on the Resource domain object.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/resource_search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionResourceSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_resource_show(self, request: operations.GetActionResourceShowRequest) -> operations.GetActionResourceShowResponse:
        r"""Get metadata for a specific resource
        Return the metadata of a resource
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/resource_show"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionResourceShowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_status_show(self) -> operations.GetActionStatusShowResponse:
        r"""Get the site status
        Returns the site status
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/status_show"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionStatusShowResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_action_tag_list(self, request: operations.GetActionTagListRequest) -> operations.GetActionTagListResponse:
        r"""Get a list of tags
        Returns the names of all indexed tags
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/action/tag_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetActionTagListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    