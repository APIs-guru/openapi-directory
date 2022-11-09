import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Availability } from "./availability";


// UpdateAvailabilityRequest
/** 
 * The request to update availability.
**/
export class UpdateAvailabilityRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilities", elemType: shared.Availability })
  availabilities?: Availability[];
}
