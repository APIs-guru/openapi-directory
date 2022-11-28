# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DeleteAnythingResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";


const sdk = new SDK();

sdk.anything.deleteAnything().then((res: DeleteAnythingResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### Anything

* `deleteAnything` - Returns anything passed in request data.
* `deleteAnythingAnything` - Returns anything passed in request data.
* `getAnything` - Returns anything passed in request data.
* `getAnythingAnything` - Returns anything passed in request data.
* `patchAnything` - Returns anything passed in request data.
* `patchAnythingAnything` - Returns anything passed in request data.
* `postAnything` - Returns anything passed in request data.
* `postAnythingAnything` - Returns anything passed in request data.
* `putAnything` - Returns anything passed in request data.
* `putAnythingAnything` - Returns anything passed in request data.
* `traceAnything` - Returns anything passed in request data.
* `traceAnythingAnything` - Returns anything passed in request data.

### Auth

* `getBasicAuthUserPasswd` - Prompts the user for authorization using HTTP Basic Auth.
* `getBearer` - Prompts the user for authorization using bearer authentication.
* `getDigestAuthQopUserPasswd` - Prompts the user for authorization using Digest Auth.
* `getDigestAuthQopUserPasswdAlgorithm` - Prompts the user for authorization using Digest Auth + Algorithm.
* `getDigestAuthQopUserPasswdAlgorithmStaleAfter` - Prompts the user for authorization using Digest Auth + Algorithm.
* `getHiddenBasicAuthUserPasswd` - Prompts the user for authorization using HTTP Basic Auth.

### Cookies

* `getCookies` - Returns cookie data.
* `getCookiesDelete` - Deletes cookie(s) as provided by the query string and redirects to cookie list.
* `getCookiesSet` - Sets cookie(s) as provided by the query string and redirects to cookie list.
* `getCookiesSetNameValue` - Sets a cookie and redirects to cookie list.

### Dynamic data

* `deleteDelayDelay` - Returns a delayed response (max of 10 seconds).
* `getBase64Value` - Decodes base64url-encoded string.
* `getBytesN` - Returns n random bytes generated with given seed
* `getDelayDelay` - Returns a delayed response (max of 10 seconds).
* `getDrip` - Drips data over a duration after an optional initial delay.
* `getLinksNOffset` - Generate a page containing n links to other pages which do the same.
* `getRangeNumbytes` - Streams n random bytes generated with given seed, at given chunk size per packet.
* `getStreamBytesN` - Streams n random bytes generated with given seed, at given chunk size per packet.
* `getStreamN` - Stream n JSON responses
* `getUuid` - Return a UUID4.
* `patchDelayDelay` - Returns a delayed response (max of 10 seconds).
* `postDelayDelay` - Returns a delayed response (max of 10 seconds).
* `putDelayDelay` - Returns a delayed response (max of 10 seconds).
* `traceDelayDelay` - Returns a delayed response (max of 10 seconds).

### HTTP Methods

* `deleteDelete` - The request's DELETE parameters.
* `getGet` - The request's query parameters.
* `patchPatch` - The request's PATCH parameters.
* `postPost` - The request's POST parameters.
* `putPut` - The request's PUT parameters.

### Images

* `getImage` - Returns a simple image of the type suggest by the Accept header.
* `getImageJpeg` - Returns a simple JPEG image.
* `getImagePng` - Returns a simple PNG image.
* `getImageSvg` - Returns a simple SVG image.
* `getImageWebp` - Returns a simple WEBP image.

### Redirects

* `deleteRedirectTo` - 302/3XX Redirects to the given URL.
* `getAbsoluteRedirectN` - Absolutely 302 Redirects n times.
* `getRedirectN` - 302 Redirects n times.
* `getRedirectTo` - 302/3XX Redirects to the given URL.
* `getRelativeRedirectN` - Relatively 302 Redirects n times.
* `patchRedirectTo` - 302/3XX Redirects to the given URL.
* `postRedirectTo` - 302/3XX Redirects to the given URL.
* `putRedirectTo` - 302/3XX Redirects to the given URL.
* `traceRedirectTo` - 302/3XX Redirects to the given URL.

### Request inspection

* `getHeaders` - Return the incoming request's HTTP headers.
* `getIp` - Returns the requester's IP Address.
* `getUserAgent` - Return the incoming requests's User-Agent header.

### Response formats

* `getBrotli` - Returns Brotli-encoded data.
* `getDeflate` - Returns Deflate-encoded data.
* `getDeny` - Returns page denied by robots.txt rules.
* `getEncodingUtf8` - Returns a UTF-8 encoded body.
* `getGzip` - Returns GZip-encoded data.
* `getHtml` - Returns a simple HTML document.
* `getJson` - Returns a simple JSON document.
* `getRobotsTxt` - Returns some robots.txt rules.
* `getXml` - Returns a simple XML document.

### Response inspection

* `getCache` - Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.
* `getCacheValue` - Sets a Cache-Control header for n seconds.
* `getEtagEtag` - Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.
* `getResponseHeaders` - Returns a set of response headers from the query string.
* `postResponseHeaders` - Returns a set of response headers from the query string.

### Status codes

* `deleteStatusCodes` - Return status code or random status code if more than one are given
* `getStatusCodes` - Return status code or random status code if more than one are given
* `patchStatusCodes` - Return status code or random status code if more than one are given
* `postStatusCodes` - Return status code or random status code if more than one are given
* `putStatusCodes` - Return status code or random status code if more than one are given
* `traceStatusCodes` - Return status code or random status code if more than one are given

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
