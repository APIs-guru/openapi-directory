import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://parliament.uk",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def browse_index_terms(self, request: operations.BrowseIndexTermsRequest) -> operations.BrowseIndexTermsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/IndexTerm/browse"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.BrowseIndexTermsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySearchErskineMayIndexTermSearchResult])
                res.erskine_may_search_erskine_may_index_term_search_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySearchErskineMayIndexTermSearchResult])
                res.erskine_may_search_erskine_may_index_term_search_result_ = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_api_index_term_index_term_id_(self, request: operations.GetAPIIndexTermIndexTermIDRequest) -> operations.GetAPIIndexTermIndexTermIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/IndexTerm/{indexTermId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIIndexTermIndexTermIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMayIndexTerm])
                res.erskine_may_index_term = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMayIndexTerm])
                res.erskine_may_index_term = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_api_part(self) -> operations.GetAPIPartResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/api/Part"
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPartResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ErskineMayPart]])
                res.erskine_may_parts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.ErskineMayPart]])
                res.erskine_may_parts = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_api_part_part_number_(self, request: operations.GetAPIPartPartNumberRequest) -> operations.GetAPIPartPartNumberResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/Part/{partNumber}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIPartPartNumberResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMayPart])
                res.erskine_may_part = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMayPart])
                res.erskine_may_part = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_api_section_section_id_(self, request: operations.GetAPISectionSectionIDRequest) -> operations.GetAPISectionSectionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/Section/{sectionId}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPISectionSectionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySectionDetail])
                res.erskine_may_section_detail = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySectionDetail])
                res.erskine_may_section_detail = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get(self, request: operations.GetRequest) -> operations.GetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/Chapter/{chapterNumber}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMayChapterOverview])
                res.erskine_may_chapter_overview = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMayChapterOverview])
                res.erskine_may_chapter_overview = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_index_term_search_results(self, request: operations.GetIndexTermSearchResultsRequest) -> operations.GetIndexTermSearchResultsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/Search/IndexTermSearchResults/{searchTerm}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIndexTermSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySearchErskineMayIndexTermSearchResult])
                res.erskine_may_search_erskine_may_index_term_search_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySearchErskineMayIndexTermSearchResult])
                res.erskine_may_search_erskine_may_index_term_search_result_ = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_paragraph_search_results(self, request: operations.GetParagraphSearchResultsRequest) -> operations.GetParagraphSearchResultsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/Search/ParagraphSearchResults/{searchTerm}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetParagraphSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySearchErskineMayParagraphSearchResult])
                res.erskine_may_search_erskine_may_paragraph_search_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySearchErskineMayParagraphSearchResult])
                res.erskine_may_search_erskine_may_paragraph_search_result_ = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def get_paragraph_section_id(self, request: operations.GetParagraphSectionIDRequest) -> operations.GetParagraphSectionIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/Search/Paragraph/{reference}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetParagraphSectionIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySectionOverview])
                res.erskine_may_section_overview = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySectionOverview])
                res.erskine_may_section_overview = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    
    def get_section_search_results(self, request: operations.GetSectionSearchResultsRequest) -> operations.GetSectionSearchResultsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/Search/SectionSearchResults/{searchTerm}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSectionSearchResultsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySearchErskineMaySectionSearchResult])
                res.erskine_may_search_erskine_may_section_search_result_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySearchErskineMaySectionSearchResult])
                res.erskine_may_search_erskine_may_section_search_result_ = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content

        return res

    
    
    def navigate(self, request: operations.NavigateRequest) -> operations.NavigateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/api/Section/{sectionId},{step}", request.path_params)
        
        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.NavigateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySectionOverview])
                res.erskine_may_section_overview = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErskineMaySectionOverview])
                res.erskine_may_section_overview = out
            if utils.match_content_type(content_type, "text/plain"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    