import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// HttpRequest
/** 
 * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
**/
export class HttpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheFillBytes" })
  cacheFillBytes?: string;

  @Metadata({ data: "json, name=cacheHit" })
  cacheHit?: boolean;

  @Metadata({ data: "json, name=cacheLookup" })
  cacheLookup?: boolean;

  @Metadata({ data: "json, name=cacheValidatedWithOriginServer" })
  cacheValidatedWithOriginServer?: boolean;

  @Metadata({ data: "json, name=latency" })
  latency?: string;

  @Metadata({ data: "json, name=protocol" })
  protocol?: string;

  @Metadata({ data: "json, name=referer" })
  referer?: string;

  @Metadata({ data: "json, name=remoteIp" })
  remoteIp?: string;

  @Metadata({ data: "json, name=requestMethod" })
  requestMethod?: string;

  @Metadata({ data: "json, name=requestSize" })
  requestSize?: string;

  @Metadata({ data: "json, name=requestUrl" })
  requestUrl?: string;

  @Metadata({ data: "json, name=responseSize" })
  responseSize?: string;

  @Metadata({ data: "json, name=serverIp" })
  serverIp?: string;

  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=userAgent" })
  userAgent?: string;
}
