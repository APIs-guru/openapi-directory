import { SpeakeasyBase } from "../../../internal/utils";
/**
 * RFC-2616: cache control support
**/
export declare class HttpCacheControlResponseHeader extends SpeakeasyBase {
    age?: string;
    directive?: string;
    expires?: string;
}
