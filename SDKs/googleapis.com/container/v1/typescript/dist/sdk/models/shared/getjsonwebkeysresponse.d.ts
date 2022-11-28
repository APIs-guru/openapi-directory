import { SpeakeasyBase } from "../../../internal/utils";
import { HttpCacheControlResponseHeader } from "./httpcachecontrolresponseheader";
import { Jwk } from "./jwk";
/**
 * GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517
**/
export declare class GetJsonWebKeysResponse extends SpeakeasyBase {
    cacheHeader?: HttpCacheControlResponseHeader;
    keys?: Jwk[];
}
