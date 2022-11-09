import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessPolicy } from "./accesspolicy";


// VideoMonetizationDetails
/** 
 * Details about monetization of a YouTube Video.
**/
export class VideoMonetizationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=access" })
  access?: AccessPolicy;
}
