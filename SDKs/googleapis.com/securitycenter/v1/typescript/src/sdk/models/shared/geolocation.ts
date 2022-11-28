import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Geolocation
/** 
 * Represents a geographical location for a given access.
**/
export class Geolocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
