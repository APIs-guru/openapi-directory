import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Geolocation
/** 
 * Represents a geographical location for a given access.
**/
export class Geolocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
