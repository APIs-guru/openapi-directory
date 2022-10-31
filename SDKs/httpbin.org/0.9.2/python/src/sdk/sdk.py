import warnings
import requests
from typing import Any
from sdk.models import operations
from . import utils


SERVERS = [
	"https://httpbin.org",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def delete_anything(self) -> operations.DeleteAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/anything"

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_anything_anything_(self, request: operations.DeleteAnythingAnythingRequest) -> operations.DeleteAnythingAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_delay_delay_(self, request: operations.DeleteDelayDelayRequest) -> operations.DeleteDelayDelayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_delete(self) -> operations.DeleteDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/delete"

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_redirect_to(self) -> operations.DeleteRedirectToResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/redirect-to"

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def delete_status_codes_(self, request: operations.DeleteStatusCodesRequest) -> operations.DeleteStatusCodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)

        client = self.client

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_absolute_redirect_n_(self, request: operations.GetAbsoluteRedirectNRequest) -> operations.GetAbsoluteRedirectNResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/absolute-redirect/{n}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAbsoluteRedirectNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_anything(self) -> operations.GetAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/anything"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_anything_anything_(self, request: operations.GetAnythingAnythingRequest) -> operations.GetAnythingAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_base64_value_(self, request: operations.GetBase64ValueRequest) -> operations.GetBase64ValueResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/base64/{value}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBase64ValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_basic_auth_user_passwd_(self, request: operations.GetBasicAuthUserPasswdRequest) -> operations.GetBasicAuthUserPasswdResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/basic-auth/{user}/{passwd}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBasicAuthUserPasswdResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_bearer(self, request: operations.GetBearerRequest) -> operations.GetBearerResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/bearer"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBearerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_brotli(self) -> operations.GetBrotliResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/brotli"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrotliResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_bytes_n_(self, request: operations.GetBytesNRequest) -> operations.GetBytesNResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/bytes/{n}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBytesNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_cache(self, request: operations.GetCacheRequest) -> operations.GetCacheResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/cache"

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCacheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass

        return res

    
    def get_cache_value_(self, request: operations.GetCacheValueRequest) -> operations.GetCacheValueResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/cache/{value}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCacheValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_cookies(self) -> operations.GetCookiesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/cookies"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCookiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_cookies_delete(self, request: operations.GetCookiesDeleteRequest) -> operations.GetCookiesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/cookies/delete"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCookiesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_cookies_set(self, request: operations.GetCookiesSetRequest) -> operations.GetCookiesSetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/cookies/set"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCookiesSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_cookies_set_name_value_(self, request: operations.GetCookiesSetNameValueRequest) -> operations.GetCookiesSetNameValueResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/cookies/set/{name}/{value}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCookiesSetNameValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_deflate(self) -> operations.GetDeflateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/deflate"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeflateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_delay_delay_(self, request: operations.GetDelayDelayRequest) -> operations.GetDelayDelayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_deny(self) -> operations.GetDenyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/deny"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDenyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_digest_auth_qop_user_passwd_(self, request: operations.GetDigestAuthQopUserPasswdRequest) -> operations.GetDigestAuthQopUserPasswdResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/digest-auth/{qop}/{user}/{passwd}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDigestAuthQopUserPasswdResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_digest_auth_qop_user_passwd_algorithm_(self, request: operations.GetDigestAuthQopUserPasswdAlgorithmRequest) -> operations.GetDigestAuthQopUserPasswdAlgorithmResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/digest-auth/{qop}/{user}/{passwd}/{algorithm}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDigestAuthQopUserPasswdAlgorithmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_digest_auth_qop_user_passwd_algorithm_stale_after_(self, request: operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterRequest) -> operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/digest-auth/{qop}/{user}/{passwd}/{algorithm}/{stale_after}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDigestAuthQopUserPasswdAlgorithmStaleAfterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass

        return res

    
    def get_drip(self, request: operations.GetDripRequest) -> operations.GetDripResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/drip"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDripResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_encoding_utf8(self) -> operations.GetEncodingUTF8Response:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/encoding/utf8"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEncodingUTF8Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_etag_etag_(self, request: operations.GetEtagEtagRequest) -> operations.GetEtagEtagResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/etag/{etag}", request.path_params)

        headers = utils.get_headers(request.headers)

        client = self.client

        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEtagEtagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 412:
            pass

        return res

    
    def get_get(self) -> operations.GetGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/get"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_gzip(self) -> operations.GetGzipResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/gzip"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGzipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_headers(self) -> operations.GetHeadersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/headers"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHeadersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_hidden_basic_auth_user_passwd_(self, request: operations.GetHiddenBasicAuthUserPasswdRequest) -> operations.GetHiddenBasicAuthUserPasswdResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/hidden-basic-auth/{user}/{passwd}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHiddenBasicAuthUserPasswdResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_html(self) -> operations.GetHTMLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/html"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHTMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_image(self) -> operations.GetImageResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/image"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_image_jpeg(self) -> operations.GetImageJpegResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/image/jpeg"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageJpegResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_image_png(self) -> operations.GetImagePngResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/image/png"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagePngResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_image_svg(self) -> operations.GetImageSvgResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/image/svg"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageSvgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_image_webp(self) -> operations.GetImageWebpResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/image/webp"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageWebpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_ip(self) -> operations.GetIPResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/ip"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIPResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_json(self) -> operations.GetJSONResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/json"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_links_n_offset_(self, request: operations.GetLinksNOffsetRequest) -> operations.GetLinksNOffsetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/links/{n}/{offset}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinksNOffsetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_range_numbytes_(self, request: operations.GetRangeNumbytesRequest) -> operations.GetRangeNumbytesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/range/{numbytes}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRangeNumbytesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_redirect_n_(self, request: operations.GetRedirectNRequest) -> operations.GetRedirectNResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/redirect/{n}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRedirectNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_redirect_to(self, request: operations.GetRedirectToRequest) -> operations.GetRedirectToResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/redirect-to"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_relative_redirect_n_(self, request: operations.GetRelativeRedirectNRequest) -> operations.GetRelativeRedirectNResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/relative-redirect/{n}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRelativeRedirectNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_response_headers(self, request: operations.GetResponseHeadersRequest) -> operations.GetResponseHeadersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/response-headers"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponseHeadersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_robots_txt(self) -> operations.GetRobotsTxtResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/robots.txt"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRobotsTxtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_status_codes_(self, request: operations.GetStatusCodesRequest) -> operations.GetStatusCodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_stream_bytes_n_(self, request: operations.GetStreamBytesNRequest) -> operations.GetStreamBytesNResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/stream-bytes/{n}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStreamBytesNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_stream_n_(self, request: operations.GetStreamNRequest) -> operations.GetStreamNResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/stream/{n}", request.path_params)

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStreamNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_user_agent(self) -> operations.GetUserAgentResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/user-agent"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserAgentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_uuid(self) -> operations.GetUUIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/uuid"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_xml(self) -> operations.GetXMLResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/xml"

        client = self.client

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetXMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_anything(self) -> operations.PatchAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/anything"

        client = self.client

        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_anything_anything_(self, request: operations.PatchAnythingAnythingRequest) -> operations.PatchAnythingAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)

        client = self.client

        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_delay_delay_(self, request: operations.PatchDelayDelayRequest) -> operations.PatchDelayDelayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)

        client = self.client

        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_patch(self) -> operations.PatchPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/patch"

        client = self.client

        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_redirect_to(self) -> operations.PatchRedirectToResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/redirect-to"

        client = self.client

        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def patch_status_codes_(self, request: operations.PatchStatusCodesRequest) -> operations.PatchStatusCodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)

        client = self.client

        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_anything(self) -> operations.PostAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/anything"

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_anything_anything_(self, request: operations.PostAnythingAnythingRequest) -> operations.PostAnythingAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_delay_delay_(self, request: operations.PostDelayDelayRequest) -> operations.PostDelayDelayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_post(self) -> operations.PostPostResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/post"

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_redirect_to(self, request: operations.PostRedirectToRequest) -> operations.PostRedirectToResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/redirect-to"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def post_response_headers(self, request: operations.PostResponseHeadersRequest) -> operations.PostResponseHeadersResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/response-headers"

        query_params = utils.get_query_params(request.query_params)

        client = self.client

        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostResponseHeadersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_status_codes_(self, request: operations.PostStatusCodesRequest) -> operations.PostStatusCodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)

        client = self.client

        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def put_anything(self) -> operations.PutAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/anything"

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_anything_anything_(self, request: operations.PutAnythingAnythingRequest) -> operations.PutAnythingAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_delay_delay_(self, request: operations.PutDelayDelayRequest) -> operations.PutDelayDelayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_put(self) -> operations.PutPutResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/put"

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_redirect_to(self, request: operations.PutRedirectToRequest) -> operations.PutRedirectToResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/redirect-to"

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        if data is None and form is None:
           raise Exception('request body is required')

        client = self.client

        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def put_status_codes_(self, request: operations.PutStatusCodesRequest) -> operations.PutStatusCodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)

        client = self.client

        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def trace_anything(self) -> operations.TraceAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/anything"

        client = self.client

        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def trace_anything_anything_(self, request: operations.TraceAnythingAnythingRequest) -> operations.TraceAnythingAnythingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)

        client = self.client

        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def trace_delay_delay_(self, request: operations.TraceDelayDelayRequest) -> operations.TraceDelayDelayResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)

        client = self.client

        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def trace_redirect_to(self) -> operations.TraceRedirectToResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/redirect-to"

        client = self.client

        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def trace_status_codes_(self, request: operations.TraceStatusCodesRequest) -> operations.TraceStatusCodesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)

        client = self.client

        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    