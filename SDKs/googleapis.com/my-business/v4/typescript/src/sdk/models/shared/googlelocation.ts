import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Location } from "./location";


// GoogleLocation
/** 
 * Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.
**/
export class GoogleLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: Location;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=requestAdminRightsUrl" })
  requestAdminRightsUrl?: string;
}
