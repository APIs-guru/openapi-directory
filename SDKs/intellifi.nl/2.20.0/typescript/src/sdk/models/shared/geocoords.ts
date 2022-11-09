import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeoCoords
/** 
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
**/
export class GeoCoords extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;
}
