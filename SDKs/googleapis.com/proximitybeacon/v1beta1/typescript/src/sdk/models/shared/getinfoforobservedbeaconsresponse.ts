import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BeaconInfo } from "./beaconinfo";



// GetInfoForObservedBeaconsResponse
/** 
 * Information about the requested beacons, optionally including attachment data.
**/
export class GetInfoForObservedBeaconsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=beacons", elemType: BeaconInfo })
  beacons?: BeaconInfo[];
}
