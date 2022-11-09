import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExpirationPolicy
/** 
 * A policy that specifies the conditions for resource expiration (i.e., automatic resource deletion).
**/
export class ExpirationPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=ttl" })
  ttl?: string;
}
