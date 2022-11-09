import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { HttpCacheControlResponseHeader } from "./httpcachecontrolresponseheader";
import { Jwk } from "./jwk";


// GetJsonWebKeysResponse
/** 
 * GetJSONWebKeysResponse is a valid JSON Web Key Set as specififed in rfc 7517
**/
export class GetJsonWebKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cacheHeader" })
  cacheHeader?: HttpCacheControlResponseHeader;

  @Metadata({ data: "json, name=keys", elemType: shared.Jwk })
  keys?: Jwk[];
}
