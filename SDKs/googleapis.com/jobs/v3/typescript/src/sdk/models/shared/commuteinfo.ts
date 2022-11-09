import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// CommuteInfo
/** 
 * Output only. Commute details related to this job.
**/
export class CommuteInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=jobLocation" })
  jobLocation?: Location;

  @Metadata({ data: "json, name=travelDuration" })
  travelDuration?: string;
}
