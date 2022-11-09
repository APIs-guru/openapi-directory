import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRequestContext
/** 
 * HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
**/
export class HttpRequestContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=method" })
  method?: string;

  @Metadata({ data: "json, name=referrer" })
  referrer?: string;

  @Metadata({ data: "json, name=remoteIp" })
  remoteIp?: string;

  @Metadata({ data: "json, name=responseStatusCode" })
  responseStatusCode?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;
}
