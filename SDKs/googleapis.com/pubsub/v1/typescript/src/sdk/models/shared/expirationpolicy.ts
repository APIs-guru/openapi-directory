import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExpirationPolicy
/** 
 * A policy that specifies the conditions for resource expiration (i.e., automatic resource deletion).
**/
export class ExpirationPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: string;
}
