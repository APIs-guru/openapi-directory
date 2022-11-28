import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// GoogleUpdatedLocation
/** 
 * Represents a location that was modified by Google.
**/
export class GoogleUpdatedLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=diffMask" })
  diffMask?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;
}
