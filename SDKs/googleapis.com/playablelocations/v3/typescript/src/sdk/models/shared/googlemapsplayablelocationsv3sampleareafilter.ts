import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleMapsPlayablelocationsV3SampleAreaFilter
/** 
 * Specifies the area to search for playable locations.
**/
export class GoogleMapsPlayablelocationsV3SampleAreaFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=s2CellId" })
  s2CellId?: string;
}
