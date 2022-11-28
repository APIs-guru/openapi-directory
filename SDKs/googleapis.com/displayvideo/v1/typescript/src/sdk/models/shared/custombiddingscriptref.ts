import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomBiddingScriptRef
/** 
 * The reference to the uploaded custom bidding script file.
**/
export class CustomBiddingScriptRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName?: string;
}
