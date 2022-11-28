import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Coordinate
/** 
 * Container for coordinates.
**/
export class Coordinate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude?: number;
}
