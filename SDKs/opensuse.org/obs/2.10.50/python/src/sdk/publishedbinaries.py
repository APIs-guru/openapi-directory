import requests
from sdk.models import operations
from . import utils

class PublishedBinaries:
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

    
    def get_published(self, request: operations.GetPublishedRequest) -> operations.GetPublishedResponse:
        r"""List all the published projects.
        Get a list of all the projects, all of them are considered published.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/published"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublishedResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_published_project_name_(self, request: operations.GetPublishedProjectNameRequest) -> operations.GetPublishedProjectNameResponse:
        r"""List the repositories of a project with published binaries
        Get a list of the repositories of the project that already have published binaries.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/published/{project_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublishedProjectNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_published_project_name_repository_name_(self, request: operations.GetPublishedProjectNameRepositoryNameRequest) -> operations.GetPublishedProjectNameRepositoryNameResponse:
        r"""List the content of the directory tree where the binaries are published at the level project/repository.
        Get a list of architectures' directories and other files (.repo, .ymp, etc.) present at the level project/repository of the directory tree where the published binaries are stored.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/published/{project_name}/{repository_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublishedProjectNameRepositoryNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_published_project_name_repository_name_architecture_name_(self, request: operations.GetPublishedProjectNameRepositoryNameArchitectureNameRequest) -> operations.GetPublishedProjectNameRepositoryNameArchitectureNameResponse:
        r"""List the content of the directory tree where the binaries are published at the level project/repository/architecture.
        Get a list of binaries and other files present at the level project/repository/architecture of the directory tree as a result of successful building and publishing processes.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/published/{project_name}/{repository_name}/{architecture_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublishedProjectNameRepositoryNameArchitectureNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_published_project_name_repository_name_architecture_name_binary_filename_(self, request: operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameRequest) -> operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse:
        r"""Return the binary file itself.
        Allow to download the binary file that was published and stored under the directory given by project/repository/architecture/.
        Can response with Media Types like application/x-rpm, text/xml, etc.
        NOTE: Use this only if you absolutely have to, as it doesn't use the redirector.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/published/{project_name}/{repository_name}/{architecture_name}/{binary_filename}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/*"):
                res.get_published_project_name_repository_name_architecture_name_binary_filename_200_application_wildcard_binary_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.get_published_project_name_repository_name_architecture_name_binary_filename_200_text_xml_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_published_project_name_repository_name_architecture_name_binary_filename_view_equal_ymp(self, request: operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpRequest) -> operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse:
        r"""Generate a ymp pattern that includes the needed repositories to install the given binary.
        Generate a ymp pattern, which contains the list of packages needed for intalling certain software without having to create dependencies between them.
        Read more about patterns [in this tutorial](https://en.opensuse.org/openSUSE:Build_Service_Tutorial#Create_Patterns).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/published/{project_name}/{repository_name}/{architecture_name}/{binary_filename}?view=ymp", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublishedProjectNameRepositoryNameArchitectureNameBinaryFilenameViewEqualYmpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_published_project_name_repository_name_view_equal_status(self, request: operations.GetPublishedProjectNameRepositoryNameViewEqualStatusRequest) -> operations.GetPublishedProjectNameRepositoryNameViewEqualStatusResponse:
        r"""Present information about the last publication of the pair project and repository.
        Get information about the build process (build id, start time, etc.) for the pair project and repository.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/published/{project_name}/{repository_name}?view=status", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPublishedProjectNameRepositoryNameViewEqualStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    