import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Specification for allowing client side cross-origin requests.
**/
export declare class HttpRouteCorsPolicy extends SpeakeasyBase {
    allowCredentials?: boolean;
    allowHeaders?: string[];
    allowMethods?: string[];
    allowOriginRegexes?: string[];
    allowOrigins?: string[];
    disabled?: boolean;
    exposeHeaders?: string[];
    maxAge?: string;
}
