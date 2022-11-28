import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// CommuteInfo
/** 
 * Output only. Commute details related to this job.
**/
export class CommuteInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=jobLocation" })
  jobLocation?: Location;

  @SpeakeasyMetadata({ data: "json, name=travelDuration" })
  travelDuration?: string;
}
