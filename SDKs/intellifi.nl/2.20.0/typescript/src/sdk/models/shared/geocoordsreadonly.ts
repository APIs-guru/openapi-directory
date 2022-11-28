import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeoCoordsReadOnly
/** 
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
**/
export class GeoCoordsReadOnly extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lng" })
  lng?: number;

  @SpeakeasyMetadata({ data: "json, name=time_updated" })
  timeUpdated?: string;
}
