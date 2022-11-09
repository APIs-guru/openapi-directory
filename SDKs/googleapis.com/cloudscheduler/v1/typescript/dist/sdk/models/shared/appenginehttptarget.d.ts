import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineRouting } from "./appenginerouting";
export declare enum AppEngineHttpTargetHttpMethodEnum {
    HttpMethodUnspecified = "HTTP_METHOD_UNSPECIFIED",
    Post = "POST",
    Get = "GET",
    Head = "HEAD",
    Put = "PUT",
    Delete = "DELETE",
    Patch = "PATCH",
    Options = "OPTIONS"
}
/**
 * App Engine target. The job will be pushed to a job handler by means of an HTTP request via an http_method such as HTTP POST, HTTP GET, etc. The job is acknowledged by means of an HTTP response code in the range [200 - 299]. Error 503 is considered an App Engine system error instead of an application error. Requests returning error 503 will be retried regardless of retry configuration and not counted against retry counts. Any other response code, or a failure to receive a response before the deadline, constitutes a failed attempt.
**/
export declare class AppEngineHttpTarget extends SpeakeasyBase {
    appEngineRouting?: AppEngineRouting;
    body?: string;
    headers?: Map<string, string>;
    httpMethod?: AppEngineHttpTargetHttpMethodEnum;
    relativeUri?: string;
}
