import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessPolicy } from "./accesspolicy";



// VideoMonetizationDetails
/** 
 * Details about monetization of a YouTube Video.
**/
export class VideoMonetizationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access" })
  access?: AccessPolicy;
}
