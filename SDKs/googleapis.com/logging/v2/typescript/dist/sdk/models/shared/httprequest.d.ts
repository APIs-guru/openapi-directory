import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message.
**/
export declare class HttpRequest extends SpeakeasyBase {
    cacheFillBytes?: string;
    cacheHit?: boolean;
    cacheLookup?: boolean;
    cacheValidatedWithOriginServer?: boolean;
    latency?: string;
    protocol?: string;
    referer?: string;
    remoteIp?: string;
    requestMethod?: string;
    requestSize?: string;
    requestUrl?: string;
    responseSize?: string;
    serverIp?: string;
    status?: number;
    userAgent?: string;
}
