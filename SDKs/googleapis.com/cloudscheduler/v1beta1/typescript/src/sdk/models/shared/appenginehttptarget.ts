import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineRouting } from "./appenginerouting";

export enum AppEngineHttpTargetHttpMethodEnum {
    HttpMethodUnspecified = "HTTP_METHOD_UNSPECIFIED"
,    Post = "POST"
,    Get = "GET"
,    Head = "HEAD"
,    Put = "PUT"
,    Delete = "DELETE"
,    Patch = "PATCH"
,    Options = "OPTIONS"
}


// AppEngineHttpTarget
/** 
 * App Engine target. The job will be pushed to a job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.
**/
export class AppEngineHttpTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=appEngineRouting" })
  appEngineRouting?: AppEngineRouting;

  @Metadata({ data: "json, name=body" })
  body?: string;

  @Metadata({ data: "json, name=headers" })
  headers?: Map<string, string>;

  @Metadata({ data: "json, name=httpMethod" })
  httpMethod?: AppEngineHttpTargetHttpMethodEnum;

  @Metadata({ data: "json, name=relativeUri" })
  relativeUri?: string;
}
