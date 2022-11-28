import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Availability } from "./availability";



// UpdateAvailabilityResponse
/** 
 * The response to a update availability request.
**/
export class UpdateAvailabilityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availabilities", elemType: Availability })
  availabilities?: Availability[];
}
