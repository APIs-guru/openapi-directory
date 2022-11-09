import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OAuthToken } from "./oauthtoken";
import { OidcToken } from "./oidctoken";

export enum HttpRequestHttpMethodEnum {
    HttpMethodUnspecified = "HTTP_METHOD_UNSPECIFIED"
,    Post = "POST"
,    Get = "GET"
,    Head = "HEAD"
,    Put = "PUT"
,    Delete = "DELETE"
,    Patch = "PATCH"
,    Options = "OPTIONS"
}


// HttpRequest
/** 
 * HTTP request. The task will be pushed to the worker as an HTTP request. If the worker or the redirected worker acknowledges the task by returning a successful HTTP response code ([`200` - `299`]), the task will be removed from the queue. If any other HTTP response code is returned or no response is received, the task will be retried according to the following: * User-specified throttling: retry configuration, rate limits, and the queue's state. * System throttling: To prevent the worker from overloading, Cloud Tasks may temporarily reduce the queue's effective rate. User-specified settings will not be changed. System throttling happens because: * Cloud Tasks backs off on all errors. Normally the backoff specified in rate limits will be used. But if the worker returns `429` (Too Many Requests), `503` (Service Unavailable), or the rate of errors is high, Cloud Tasks will use a higher backoff rate. The retry specified in the `Retry-After` HTTP response header is considered. * To prevent traffic spikes and to smooth sudden increases in traffic, dispatches ramp up slowly when the queue is newly created or idle and if large numbers of tasks suddenly become available to dispatch (due to spikes in create task rates, the queue being unpaused, or many tasks that are scheduled at the same time).
**/
export class HttpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: HttpRequestHttpMethodEnum;

  @Metadata({ data: "json, name=oauthToken" })
  oauthToken?: OAuthToken;

  @Metadata({ data: "json, name=oidcToken" })
  oidcToken?: OidcToken;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
