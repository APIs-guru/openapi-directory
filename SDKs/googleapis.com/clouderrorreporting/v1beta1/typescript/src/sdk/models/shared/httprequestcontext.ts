import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRequestContext
/** 
 * HTTP request data that is related to a reported error. This data should be provided by the application when reporting an error, unless the error report has been generated automatically from Google App Engine logs.
**/
export class HttpRequestContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;

  @SpeakeasyMetadata({ data: "json, name=referrer" })
  referrer?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteIp" })
  remoteIp?: string;

  @SpeakeasyMetadata({ data: "json, name=responseStatusCode" })
  responseStatusCode?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;
}
