import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HttpCacheControlResponseHeader } from "./httpcachecontrolresponseheader";
import { Jwk } from "./jwk";



// GetJsonWebKeysResponse
/** 
 * GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517
**/
export class GetJsonWebKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cacheHeader" })
  cacheHeader?: HttpCacheControlResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=keys", elemType: Jwk })
  keys?: Jwk[];
}
