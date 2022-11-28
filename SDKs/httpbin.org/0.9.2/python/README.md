# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
    
res = s.anything.delete_anything()

if res.status_code == 200:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Anything

* `delete_anything` - Returns anything passed in request data.
* `delete_anything_anything_` - Returns anything passed in request data.
* `get_anything` - Returns anything passed in request data.
* `get_anything_anything_` - Returns anything passed in request data.
* `patch_anything` - Returns anything passed in request data.
* `patch_anything_anything_` - Returns anything passed in request data.
* `post_anything` - Returns anything passed in request data.
* `post_anything_anything_` - Returns anything passed in request data.
* `put_anything` - Returns anything passed in request data.
* `put_anything_anything_` - Returns anything passed in request data.
* `trace_anything` - Returns anything passed in request data.
* `trace_anything_anything_` - Returns anything passed in request data.

### Auth

* `get_basic_auth_user_passwd_` - Prompts the user for authorization using HTTP Basic Auth.
* `get_bearer` - Prompts the user for authorization using bearer authentication.
* `get_digest_auth_qop_user_passwd_` - Prompts the user for authorization using Digest Auth.
* `get_digest_auth_qop_user_passwd_algorithm_` - Prompts the user for authorization using Digest Auth + Algorithm.
* `get_digest_auth_qop_user_passwd_algorithm_stale_after_` - Prompts the user for authorization using Digest Auth + Algorithm.
* `get_hidden_basic_auth_user_passwd_` - Prompts the user for authorization using HTTP Basic Auth.

### Cookies

* `get_cookies` - Returns cookie data.
* `get_cookies_delete` - Deletes cookie(s) as provided by the query string and redirects to cookie list.
* `get_cookies_set` - Sets cookie(s) as provided by the query string and redirects to cookie list.
* `get_cookies_set_name_value_` - Sets a cookie and redirects to cookie list.

### Dynamic data

* `delete_delay_delay_` - Returns a delayed response (max of 10 seconds).
* `get_base64_value_` - Decodes base64url-encoded string.
* `get_bytes_n_` - Returns n random bytes generated with given seed
* `get_delay_delay_` - Returns a delayed response (max of 10 seconds).
* `get_drip` - Drips data over a duration after an optional initial delay.
* `get_links_n_offset_` - Generate a page containing n links to other pages which do the same.
* `get_range_numbytes_` - Streams n random bytes generated with given seed, at given chunk size per packet.
* `get_stream_bytes_n_` - Streams n random bytes generated with given seed, at given chunk size per packet.
* `get_stream_n_` - Stream n JSON responses
* `get_uuid` - Return a UUID4.
* `patch_delay_delay_` - Returns a delayed response (max of 10 seconds).
* `post_delay_delay_` - Returns a delayed response (max of 10 seconds).
* `put_delay_delay_` - Returns a delayed response (max of 10 seconds).
* `trace_delay_delay_` - Returns a delayed response (max of 10 seconds).

### HTTP Methods

* `delete_delete` - The request's DELETE parameters.
* `get_get` - The request's query parameters.
* `patch_patch` - The request's PATCH parameters.
* `post_post` - The request's POST parameters.
* `put_put` - The request's PUT parameters.

### Images

* `get_image` - Returns a simple image of the type suggest by the Accept header.
* `get_image_jpeg` - Returns a simple JPEG image.
* `get_image_png` - Returns a simple PNG image.
* `get_image_svg` - Returns a simple SVG image.
* `get_image_webp` - Returns a simple WEBP image.

### Redirects

* `delete_redirect_to` - 302/3XX Redirects to the given URL.
* `get_absolute_redirect_n_` - Absolutely 302 Redirects n times.
* `get_redirect_n_` - 302 Redirects n times.
* `get_redirect_to` - 302/3XX Redirects to the given URL.
* `get_relative_redirect_n_` - Relatively 302 Redirects n times.
* `patch_redirect_to` - 302/3XX Redirects to the given URL.
* `post_redirect_to` - 302/3XX Redirects to the given URL.
* `put_redirect_to` - 302/3XX Redirects to the given URL.
* `trace_redirect_to` - 302/3XX Redirects to the given URL.

### Request inspection

* `get_headers` - Return the incoming request's HTTP headers.
* `get_ip` - Returns the requester's IP Address.
* `get_user_agent` - Return the incoming requests's User-Agent header.

### Response formats

* `get_brotli` - Returns Brotli-encoded data.
* `get_deflate` - Returns Deflate-encoded data.
* `get_deny` - Returns page denied by robots.txt rules.
* `get_encoding_utf8` - Returns a UTF-8 encoded body.
* `get_gzip` - Returns GZip-encoded data.
* `get_html` - Returns a simple HTML document.
* `get_json` - Returns a simple JSON document.
* `get_robots_txt` - Returns some robots.txt rules.
* `get_xml` - Returns a simple XML document.

### Response inspection

* `get_cache` - Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.
* `get_cache_value_` - Sets a Cache-Control header for n seconds.
* `get_etag_etag_` - Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.
* `get_response_headers` - Returns a set of response headers from the query string.
* `post_response_headers` - Returns a set of response headers from the query string.

### Status codes

* `delete_status_codes_` - Return status code or random status code if more than one are given
* `get_status_codes_` - Return status code or random status code if more than one are given
* `patch_status_codes_` - Return status code or random status code if more than one are given
* `post_status_codes_` - Return status code or random status code if more than one are given
* `put_status_codes_` - Return status code or random status code if more than one are given
* `trace_status_codes_` - Return status code or random status code if more than one are given

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
