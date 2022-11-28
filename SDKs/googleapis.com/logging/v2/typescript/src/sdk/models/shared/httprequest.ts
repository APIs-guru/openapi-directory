import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// HttpRequest
/** 
 * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
**/
export class HttpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheFillBytes" })
  cacheFillBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=cacheHit" })
  cacheHit?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cacheLookup" })
  cacheLookup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=cacheValidatedWithOriginServer" })
  cacheValidatedWithOriginServer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=protocol" })
  protocol?: string;

  @SpeakeasyMetadata({ data: "json, name=referer" })
  referer?: string;

  @SpeakeasyMetadata({ data: "json, name=remoteIp" })
  remoteIp?: string;

  @SpeakeasyMetadata({ data: "json, name=requestMethod" })
  requestMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=requestSize" })
  requestSize?: string;

  @SpeakeasyMetadata({ data: "json, name=requestUrl" })
  requestUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=responseSize" })
  responseSize?: string;

  @SpeakeasyMetadata({ data: "json, name=serverIp" })
  serverIp?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=userAgent" })
  userAgent?: string;
}
