import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
**/
export declare class HttpRequestContext extends SpeakeasyBase {
    method?: string;
    referrer?: string;
    remoteIp?: string;
    responseStatusCode?: number;
    url?: string;
    userAgent?: string;
}
