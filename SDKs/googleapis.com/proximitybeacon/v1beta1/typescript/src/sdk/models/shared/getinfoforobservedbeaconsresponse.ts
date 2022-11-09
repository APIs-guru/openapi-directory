import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BeaconInfo } from "./beaconinfo";


// GetInfoForObservedBeaconsResponse
/** 
 * Information about the requested beacons, optionally including attachment data.
**/
export class GetInfoForObservedBeaconsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=beacons", elemType: shared.BeaconInfo })
  beacons?: BeaconInfo[];
}
