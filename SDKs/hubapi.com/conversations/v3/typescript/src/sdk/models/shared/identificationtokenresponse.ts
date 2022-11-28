import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IdentificationTokenResponse
/** 
 * The identification token to be passed to the Conversations JS API to identify the visitor
**/
export class IdentificationTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
