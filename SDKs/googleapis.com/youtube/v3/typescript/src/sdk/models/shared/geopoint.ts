import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeoPoint
/** 
 * Geographical coordinates of a point, in WGS84.
**/
export class GeoPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altitude" })
  altitude?: number;

  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}
