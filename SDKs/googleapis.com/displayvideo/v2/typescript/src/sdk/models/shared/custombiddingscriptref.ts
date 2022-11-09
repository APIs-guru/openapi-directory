import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomBiddingScriptRef
/** 
 * The reference to the uploaded custom bidding script file.
**/
export class CustomBiddingScriptRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
