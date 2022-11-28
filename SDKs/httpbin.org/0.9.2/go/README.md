# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    s := sdk.New()
    
    res, err := s.Anything.DeleteAnything(ctx)
    if err != nil {
        log.Fatal(err)
    }

    if res.StatusCode == http.StatusOK {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Anything

* `DeleteAnything` - Returns anything passed in request data.
* `DeleteAnythingAnything` - Returns anything passed in request data.
* `GetAnything` - Returns anything passed in request data.
* `GetAnythingAnything` - Returns anything passed in request data.
* `PatchAnything` - Returns anything passed in request data.
* `PatchAnythingAnything` - Returns anything passed in request data.
* `PostAnything` - Returns anything passed in request data.
* `PostAnythingAnything` - Returns anything passed in request data.
* `PutAnything` - Returns anything passed in request data.
* `PutAnythingAnything` - Returns anything passed in request data.
* `TraceAnything` - Returns anything passed in request data.
* `TraceAnythingAnything` - Returns anything passed in request data.

### Auth

* `GetBasicAuthUserPasswd` - Prompts the user for authorization using HTTP Basic Auth.
* `GetBearer` - Prompts the user for authorization using bearer authentication.
* `GetDigestAuthQopUserPasswd` - Prompts the user for authorization using Digest Auth.
* `GetDigestAuthQopUserPasswdAlgorithm` - Prompts the user for authorization using Digest Auth + Algorithm.
* `GetDigestAuthQopUserPasswdAlgorithmStaleAfter` - Prompts the user for authorization using Digest Auth + Algorithm.
* `GetHiddenBasicAuthUserPasswd` - Prompts the user for authorization using HTTP Basic Auth.

### Cookies

* `GetCookies` - Returns cookie data.
* `GetCookiesDelete` - Deletes cookie(s) as provided by the query string and redirects to cookie list.
* `GetCookiesSet` - Sets cookie(s) as provided by the query string and redirects to cookie list.
* `GetCookiesSetNameValue` - Sets a cookie and redirects to cookie list.

### Dynamic data

* `DeleteDelayDelay` - Returns a delayed response (max of 10 seconds).
* `GetBase64Value` - Decodes base64url-encoded string.
* `GetBytesN` - Returns n random bytes generated with given seed
* `GetDelayDelay` - Returns a delayed response (max of 10 seconds).
* `GetDrip` - Drips data over a duration after an optional initial delay.
* `GetLinksNOffset` - Generate a page containing n links to other pages which do the same.
* `GetRangeNumbytes` - Streams n random bytes generated with given seed, at given chunk size per packet.
* `GetStreamBytesN` - Streams n random bytes generated with given seed, at given chunk size per packet.
* `GetStreamN` - Stream n JSON responses
* `GetUUID` - Return a UUID4.
* `PatchDelayDelay` - Returns a delayed response (max of 10 seconds).
* `PostDelayDelay` - Returns a delayed response (max of 10 seconds).
* `PutDelayDelay` - Returns a delayed response (max of 10 seconds).
* `TraceDelayDelay` - Returns a delayed response (max of 10 seconds).

### HTTP Methods

* `DeleteDelete` - The request's DELETE parameters.
* `GetGet` - The request's query parameters.
* `PatchPatch` - The request's PATCH parameters.
* `PostPost` - The request's POST parameters.
* `PutPut` - The request's PUT parameters.

### Images

* `GetImage` - Returns a simple image of the type suggest by the Accept header.
* `GetImageJpeg` - Returns a simple JPEG image.
* `GetImagePng` - Returns a simple PNG image.
* `GetImageSvg` - Returns a simple SVG image.
* `GetImageWebp` - Returns a simple WEBP image.

### Redirects

* `DeleteRedirectTo` - 302/3XX Redirects to the given URL.
* `GetAbsoluteRedirectN` - Absolutely 302 Redirects n times.
* `GetRedirectN` - 302 Redirects n times.
* `GetRedirectTo` - 302/3XX Redirects to the given URL.
* `GetRelativeRedirectN` - Relatively 302 Redirects n times.
* `PatchRedirectTo` - 302/3XX Redirects to the given URL.
* `PostRedirectTo` - 302/3XX Redirects to the given URL.
* `PutRedirectTo` - 302/3XX Redirects to the given URL.
* `TraceRedirectTo` - 302/3XX Redirects to the given URL.

### Request inspection

* `GetHeaders` - Return the incoming request's HTTP headers.
* `GetIP` - Returns the requester's IP Address.
* `GetUserAgent` - Return the incoming requests's User-Agent header.

### Response formats

* `GetBrotli` - Returns Brotli-encoded data.
* `GetDeflate` - Returns Deflate-encoded data.
* `GetDeny` - Returns page denied by robots.txt rules.
* `GetEncodingUTF8` - Returns a UTF-8 encoded body.
* `GetGzip` - Returns GZip-encoded data.
* `GetHTML` - Returns a simple HTML document.
* `GetJSON` - Returns a simple JSON document.
* `GetRobotsTxt` - Returns some robots.txt rules.
* `GetXML` - Returns a simple XML document.

### Response inspection

* `GetCache` - Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.
* `GetCacheValue` - Sets a Cache-Control header for n seconds.
* `GetEtagEtag` - Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.
* `GetResponseHeaders` - Returns a set of response headers from the query string.
* `PostResponseHeaders` - Returns a set of response headers from the query string.

### Status codes

* `DeleteStatusCodes` - Return status code or random status code if more than one are given
* `GetStatusCodes` - Return status code or random status code if more than one are given
* `PatchStatusCodes` - Return status code or random status code if more than one are given
* `PostStatusCodes` - Return status code or random status code if more than one are given
* `PutStatusCodes` - Return status code or random status code if more than one are given
* `TraceStatusCodes` - Return status code or random status code if more than one are given

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
