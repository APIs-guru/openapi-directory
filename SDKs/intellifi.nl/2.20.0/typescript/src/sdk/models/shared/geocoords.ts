import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeoCoords
/** 
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
**/
export class GeoCoords extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;
}


// GeoCoordsInput
/** 
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
**/
export class GeoCoordsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;
}
