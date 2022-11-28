import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Availability } from "./availability";



// UpdateAvailabilityRequest
/** 
 * The request to update availability.
**/
export class UpdateAvailabilityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availabilities", elemType: Availability })
  availabilities?: Availability[];
}
