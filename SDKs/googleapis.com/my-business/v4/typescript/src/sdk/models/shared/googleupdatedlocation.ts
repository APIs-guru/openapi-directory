import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// GoogleUpdatedLocation
/** 
 * Represents a location that was modified by Google.
**/
export class GoogleUpdatedLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=diffMask" })
  diffMask?: string;

  @Metadata({ data: "json, name=location" })
  location?: Location;
}
