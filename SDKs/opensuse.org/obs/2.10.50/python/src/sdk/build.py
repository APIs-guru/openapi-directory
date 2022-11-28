import requests
from sdk.models import operations
from . import utils

class Build:
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

    
    def get_build(self, request: operations.GetBuildRequest) -> operations.GetBuildResponse:
        r"""Get a simple directory listing of all projects
        Get a simple directory listing of all projects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/build"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_name_(self, request: operations.GetBuildProjectNameRequest) -> operations.GetBuildProjectNameResponse:
        r"""Get a simple directory listing of all repositories for the specified project
        Get a simple directory listing of all repositories for the specified project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_name_repository_name_(self, request: operations.GetBuildProjectNameRepositoryNameRequest) -> operations.GetBuildProjectNameRepositoryNameResponse:
        r"""List of all architectures the specified project builds against a given repository.
        List of all architectures the specified project builds against a given repository.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectNameRepositoryNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_name_repository_name_architecture_name_builddepinfo(self, request: operations.GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest) -> operations.GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse:
        r"""Show the build dependencies of packages that are part of the project.
        Show the build dependencies of packages that are part of the project, for a given repository and architecture.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/_builddepinfo", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_name_repository_name_architecture_name_package_name_(self, request: operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameRequest) -> operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameResponse:
        r"""List binaries built by the sources of the specified package.
        List binaries built by the sources of the specified package.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_name_repository_name_architecture_name_package_name_jobstatus(self, request: operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusRequest) -> operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusResponse:
        r"""Show the build status of a currently running build job.
        Show the build status of a currently running build job. Shows an empty result if no build job is running.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_jobstatus", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameJobstatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_name_repository_name_architecture_name_package_name_reason(self, request: operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest) -> operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse:
        r"""Show the reason for the lastly triggered build.
        Details about the reason of the lastly triggered build.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_reason", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_name_repository_name_architecture_name_repository(self, request: operations.GetBuildProjectNameRepositoryNameArchitectureNameRepositoryRequest) -> operations.GetBuildProjectNameRepositoryNameArchitectureNameRepositoryResponse:
        r"""List all binaries (produced by all packages of the given project).
        List all binaries (produced by all packages of the given project) for the specified repository and architecture.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/_repository", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectNameRepositoryNameArchitectureNameRepositoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_name_repository_name_buildconfig(self, request: operations.GetBuildProjectNameRepositoryNameBuildconfigRequest) -> operations.GetBuildProjectNameRepositoryNameBuildconfigResponse:
        r"""Show the build configuration for the specified repository.
        Show the build configuration for the specified repository. Includes all base package requirements, mappings and macros.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/_buildconfig", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectNameRepositoryNameBuildconfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_name_result(self, request: operations.GetBuildProjectNameResultRequest) -> operations.GetBuildProjectNameResultResponse:
        r"""Get the build results for packages, architectures and repositories of the specified project.
        Get the build results for packages, architectures and repositories of the specified project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/_result", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectNameResultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def post_build_project_name_(self, request: operations.PostBuildProjectNameRequest) -> operations.PostBuildProjectNameResponse:
        r"""Apply different actions on builds/build processes of the specified project
        Apply different actions on builds/build processes of the specified project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostBuildProjectNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_repository_arch_package_buildinfo(self, request: operations.GetBuildProjectRepositoryArchPackageBuildinfoRequest) -> operations.GetBuildProjectRepositoryArchPackageBuildinfoResponse:
        r"""This endpoint returns information about some specific artifact
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_buildinfo", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectRepositoryArchPackageBuildinfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_repository_arch_package_history(self, request: operations.GetBuildProjectRepositoryArchPackageHistoryRequest) -> operations.GetBuildProjectRepositoryArchPackageHistoryResponse:
        r"""This endpoint returns the build history for a specific artifact
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_history", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectRepositoryArchPackageHistoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_repository_arch_package_log(self, request: operations.GetBuildProjectRepositoryArchPackageLogRequest) -> operations.GetBuildProjectRepositoryArchPackageLogResponse:
        r"""This endpoint returns the last log file for a specific build artifact
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_log", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectRepositoryArchPackageLogResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
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

    
    def get_build_project_repository_arch_package_status(self, request: operations.GetBuildProjectRepositoryArchPackageStatusRequest) -> operations.GetBuildProjectRepositoryArchPackageStatusResponse:
        r"""This endpoint returns the building status for a specific artifact
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/_status", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectRepositoryArchPackageStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_repository_architecture_package_file(self, request: operations.GetBuildProjectRepositoryArchitecturePackageFileRequest) -> operations.GetBuildProjectRepositoryArchitecturePackageFileResponse:
        r"""Return a specific artifact file contents
        Given a project, repository, architecture and package, retrieve the given file's content.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/{file_name}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectRepositoryArchitecturePackageFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/*"):
                res.get_build_project_repository_architecture_package_file_200_application_wildcard_binary_string = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def get_build_project_repository_architecture_package_file_view_fileinfo(self, request: operations.GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest) -> operations.GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse:
        r"""This endpoint returns details about an specific artifact
        Given a project, repository, architecture and package, retrieve the given artifact's details.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/{file_name}?view=fileinfo", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/xml; charset=utf-8"):
                res.body = r.content

        return res

    
    def put_build_project_repository_architecture_package_file(self, request: operations.PutBuildProjectRepositoryArchitecturePackageFileRequest) -> operations.PutBuildProjectRepositoryArchitecturePackageFileResponse:
        r"""Update a specific artifact file contents
        Given a project, repository, architecture and package, update the given file's content.
        
        This is for Admins only.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/build/{project_name}/{repository_name}/{architecture_name}/{package_name}/{file_name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutBuildProjectRepositoryArchitecturePackageFileResponse(status_code=r.status_code, content_type=content_type)
        
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

    