import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Coordinate
/** 
 * Container for coordinates.
**/
export class Coordinate extends SpeakeasyBase {
  @Metadata({ data: "json, name=Latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=Longitude" })
  longitude?: number;
}
