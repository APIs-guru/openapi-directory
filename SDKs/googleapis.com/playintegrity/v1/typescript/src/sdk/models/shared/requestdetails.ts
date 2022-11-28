import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RequestDetails
/** 
 * Contains the integrity request information.
**/
export class RequestDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce?: string;

  @SpeakeasyMetadata({ data: "json, name=requestPackageName" })
  requestPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=timestampMillis" })
  timestampMillis?: string;
}
