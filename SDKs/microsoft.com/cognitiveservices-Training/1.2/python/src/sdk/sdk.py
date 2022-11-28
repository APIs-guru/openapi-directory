

import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://southcentralus.api.cognitive.microsoft.com/customvision/v1.2/Training",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def create_images_from_data(self, request: operations.CreateImagesFromDataRequest) -> operations.CreateImagesFromDataResponse:
        r"""Add the provided images to the set of training images
        This API accepts body content as multipart/form-data and application/octet-stream. When using multipart
        multiple image files can be sent at once, with a maximum of 64 files
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/images", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateImagesFromDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageCreateSummary])
                res.image_create_summary = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImageCreateSummary])
                res.image_create_summary = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def create_project(self, request: operations.CreateProjectRequest) -> operations.CreateProjectResponse:
        r"""Create a project
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def create_tag(self, request: operations.CreateTagRequest) -> operations.CreateTagResponse:
        r"""Create a tag for the project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/tags", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def delete_image_tags(self, request: operations.DeleteImageTagsRequest) -> operations.DeleteImageTagsResponse:
        r"""Remove a set of tags from a set of images
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/images/tags", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteImageTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_images(self, request: operations.DeleteImagesRequest) -> operations.DeleteImagesResponse:
        r"""Delete images from the set of training images
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/images", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_iteration(self, request: operations.DeleteIterationRequest) -> operations.DeleteIterationResponse:
        r"""Delete a specific iteration of a project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/iterations/{iterationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteIterationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_prediction(self, request: operations.DeletePredictionRequest) -> operations.DeletePredictionResponse:
        r"""Delete a set of predicted images and their associated prediction results
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/predictions", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePredictionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_project(self, request: operations.DeleteProjectRequest) -> operations.DeleteProjectResponse:
        r"""Delete a specific project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def delete_tag(self, request: operations.DeleteTagRequest) -> operations.DeleteTagResponse:
        r"""Delete a tag from the project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/tags/{tagId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def export_iteration(self, request: operations.ExportIterationRequest) -> operations.ExportIterationResponse:
        r"""Export a trained iteration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/iterations/{iterationId}/export", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ExportIterationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Export])
                res.export = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Export])
                res.export = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_account_info(self, request: operations.GetAccountInfoRequest) -> operations.GetAccountInfoResponse:
        r"""Get basic information about your account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Account])
                res.account = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_domain(self, request: operations.GetDomainRequest) -> operations.GetDomainResponse:
        r"""Get information about a specific domain
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domains/{domainId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Domain])
                res.domain = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_domains(self, request: operations.GetDomainsRequest) -> operations.GetDomainsResponse:
        r"""Get a list of the available domains
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domains"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomainsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Domain]])
                res.domains = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Domain]])
                res.domains = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_exports(self, request: operations.GetExportsRequest) -> operations.GetExportsResponse:
        r"""Get the list of exports for a specific iteration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/iterations/{iterationId}/export", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetExportsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Export]])
                res.exports = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Export]])
                res.exports = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_iteration(self, request: operations.GetIterationRequest) -> operations.GetIterationResponse:
        r"""Get a specific iteration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/iterations/{iterationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIterationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Iteration])
                res.iteration = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Iteration])
                res.iteration = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_iteration_performance(self, request: operations.GetIterationPerformanceRequest) -> operations.GetIterationPerformanceResponse:
        r"""Get detailed performance information about a trained iteration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/iterations/{iterationId}/performance", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIterationPerformanceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IterationPerformance])
                res.iteration_performance = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IterationPerformance])
                res.iteration_performance = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_iterations(self, request: operations.GetIterationsRequest) -> operations.GetIterationsResponse:
        r"""Get iterations for the project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/iterations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIterationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Iteration]])
                res.iterations = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Iteration]])
                res.iterations = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_project(self, request: operations.GetProjectRequest) -> operations.GetProjectResponse:
        r"""Get a specific project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_projects(self, request: operations.GetProjectsRequest) -> operations.GetProjectsResponse:
        r"""Get your projects
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/projects"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Project]])
                res.projects = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Project]])
                res.projects = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_tag(self, request: operations.GetTagRequest) -> operations.GetTagResponse:
        r"""Get information about a specific tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/tags/{tagId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_tagged_images(self, request: operations.GetTaggedImagesRequest) -> operations.GetTaggedImagesResponse:
        r"""Get tagged images for a given project iteration
        This API supports batching and range selection. By default it will only return first 50 images matching images.
        Use the {take} and {skip} parameters to control how many images to return in a given batch.
        The filtering is on an and/or relationship. For example, if the provided tag ids are for the \"Dog\" and
        \"Cat\" tags, then only images tagged with Dog and/or Cat will be returned
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/images/tagged", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaggedImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Image]])
                res.images = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Image]])
                res.images = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_tags(self, request: operations.GetTagsRequest) -> operations.GetTagsResponse:
        r"""Get the tags for a given project and iteration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/tags", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTagsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagList])
                res.tag_list = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.TagList])
                res.tag_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def get_untagged_images(self, request: operations.GetUntaggedImagesRequest) -> operations.GetUntaggedImagesResponse:
        r"""Get untagged images for a given project iteration
        This API supports batching and range selection. By default it will only return first 50 images matching images.
        Use the {take} and {skip} parameters to control how many images to return in a given batch.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/images/untagged", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUntaggedImagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Image]])
                res.images = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Image]])
                res.images = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def quick_test_image(self, request: operations.QuickTestImageRequest) -> operations.QuickTestImageResponse:
        r"""Quick test an image
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/quicktest/image", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuickTestImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagePredictionResult])
                res.image_prediction_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagePredictionResult])
                res.image_prediction_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def quick_test_image_url(self, request: operations.QuickTestImageURLRequest) -> operations.QuickTestImageURLResponse:
        r"""Quick test an image url
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/quicktest/url", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.QuickTestImageURLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagePredictionResult])
                res.image_prediction_result = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImagePredictionResult])
                res.image_prediction_result = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def train_project(self, request: operations.TrainProjectRequest) -> operations.TrainProjectResponse:
        r"""Queues project for training
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/train", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TrainProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Iteration])
                res.iteration = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Iteration])
                res.iteration = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def update_iteration(self, request: operations.UpdateIterationRequest) -> operations.UpdateIterationResponse:
        r"""Update a specific iteration
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/iterations/{iterationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateIterationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Iteration])
                res.iteration = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Iteration])
                res.iteration = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def update_project(self, request: operations.UpdateProjectRequest) -> operations.UpdateProjectResponse:
        r"""Update a specific project
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateProjectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Project])
                res.project = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def update_tag(self, request: operations.UpdateTagRequest) -> operations.UpdateTagResponse:
        r"""Update a tag
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/projects/{projectId}/tags/{tagId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Tag])
                res.tag = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    