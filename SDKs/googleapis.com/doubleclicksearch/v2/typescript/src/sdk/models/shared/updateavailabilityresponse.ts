import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Availability } from "./availability";


// UpdateAvailabilityResponse
/** 
 * The response to a update availability request.
**/
export class UpdateAvailabilityResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=availabilities", elemType: shared.Availability })
  availabilities?: Availability[];
}
