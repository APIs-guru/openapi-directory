import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";



// RegionCount
/** 
 * A region with its associated request count.
**/
export class RegionCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=latlng" })
  latlng?: LatLng;
}
