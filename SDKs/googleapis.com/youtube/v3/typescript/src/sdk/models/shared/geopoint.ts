import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeoPoint
/** 
 * Geographical coordinates of a point, in WGS84.
**/
export class GeoPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=altitude" })
  altitude?: number;

  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}
