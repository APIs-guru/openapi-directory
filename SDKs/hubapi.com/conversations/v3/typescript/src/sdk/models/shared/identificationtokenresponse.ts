import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IdentificationTokenResponse
/** 
 * The identification token to be passed to the Conversations JS API to identify the visitor
**/
export class IdentificationTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=token" })
  token: string;
}
