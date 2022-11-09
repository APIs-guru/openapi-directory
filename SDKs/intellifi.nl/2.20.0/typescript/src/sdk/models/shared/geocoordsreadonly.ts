import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeoCoordsReadOnly
/** 
 * Last known geolocation estimate of this object. Not guaranteed to be included in response.
**/
export class GeoCoordsReadOnly extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lng" })
  lng?: number;

  @Metadata({ data: "json, name=time_updated" })
  timeUpdated?: string;
}
