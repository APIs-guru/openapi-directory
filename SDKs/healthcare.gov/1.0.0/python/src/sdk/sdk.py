
__doc__ = """ SDK Documentation: https://www.healthcare.gov/developers/"""
import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"https://www.healthcare.gov",
]


class SDK:
    r"""SDK Documentation: https://www.healthcare.gov/developers/"""

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
        
    
    
    
    def get_api_articles_media_type_extension_(self, request: operations.GetAPIArticlesMediaTypeExtensionRequest) -> operations.GetAPIArticlesMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/articles{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIArticlesMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_blog_media_type_extension_(self, request: operations.GetAPIBlogMediaTypeExtensionRequest) -> operations.GetAPIBlogMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/blog{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIBlogMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_glossary_media_type_extension_(self, request: operations.GetAPIGlossaryMediaTypeExtensionRequest) -> operations.GetAPIGlossaryMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/glossary{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIGlossaryMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_questions_media_type_extension_(self, request: operations.GetAPIQuestionsMediaTypeExtensionRequest) -> operations.GetAPIQuestionsMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/questions{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIQuestionsMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_states_media_type_extension_(self, request: operations.GetAPIStatesMediaTypeExtensionRequest) -> operations.GetAPIStatesMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/states{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIStatesMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_api_topics_media_type_extension_(self, request: operations.GetAPITopicsMediaTypeExtensionRequest) -> operations.GetAPITopicsMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/topics{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPITopicsMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_blog_page_name_media_type_extension_(self, request: operations.GetBlogPageNameMediaTypeExtensionRequest) -> operations.GetBlogPageNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/blog/{pageName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBlogPageNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/html"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_es_blog_page_name_media_type_extension_(self, request: operations.GetEsBlogPageNameMediaTypeExtensionRequest) -> operations.GetEsBlogPageNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/es/blog/{pageName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEsBlogPageNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/html"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_es_glossary_page_name_media_type_extension_(self, request: operations.GetEsGlossaryPageNameMediaTypeExtensionRequest) -> operations.GetEsGlossaryPageNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/es/glossary/{pageName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEsGlossaryPageNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/html"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_es_page_name_media_type_extension_(self, request: operations.GetEsPageNameMediaTypeExtensionRequest) -> operations.GetEsPageNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/es/{pageName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEsPageNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/html"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_es_question_page_name_media_type_extension_(self, request: operations.GetEsQuestionPageNameMediaTypeExtensionRequest) -> operations.GetEsQuestionPageNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/es/question/{pageName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEsQuestionPageNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_es_state_name_media_type_extension_(self, request: operations.GetEsStateNameMediaTypeExtensionRequest) -> operations.GetEsStateNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/es/{stateName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEsStateNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_glossary_page_name_media_type_extension_(self, request: operations.GetGlossaryPageNameMediaTypeExtensionRequest) -> operations.GetGlossaryPageNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/glossary/{pageName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGlossaryPageNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/html"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_page_name_media_type_extension_(self, request: operations.GetPageNameMediaTypeExtensionRequest) -> operations.GetPageNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{pageName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPageNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/html"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_question_page_name_media_type_extension_(self, request: operations.GetQuestionPageNameMediaTypeExtensionRequest) -> operations.GetQuestionPageNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/question/{pageName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetQuestionPageNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def get_state_name_media_type_extension_(self, request: operations.GetStateNameMediaTypeExtensionRequest) -> operations.GetStateNameMediaTypeExtensionResponse:
        r"""Returns pages content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{stateName}{mediaTypeExtension}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStateNameMediaTypeExtensionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    