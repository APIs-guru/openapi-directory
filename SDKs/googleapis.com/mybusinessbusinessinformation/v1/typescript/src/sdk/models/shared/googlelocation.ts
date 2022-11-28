import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";



// GoogleLocation
/** 
 * Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.
**/
export class GoogleLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: Location;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=requestAdminRightsUri" })
  requestAdminRightsUri?: string;
}
