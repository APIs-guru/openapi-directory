import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RequestDetails
/** 
 * Contains the integrity request information.
**/
export class RequestDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=nonce" })
  nonce?: string;

  @Metadata({ data: "json, name=requestPackageName" })
  requestPackageName?: string;

  @Metadata({ data: "json, name=timestampMillis" })
  timestampMillis?: string;
}
