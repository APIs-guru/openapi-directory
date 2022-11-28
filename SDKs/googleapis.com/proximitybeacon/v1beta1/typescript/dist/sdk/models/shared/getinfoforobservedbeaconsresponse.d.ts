import { SpeakeasyBase } from "../../../internal/utils";
import { BeaconInfo } from "./beaconinfo";
/**
 * Information about the requested beacons, optionally including attachment data.
**/
export declare class GetInfoForObservedBeaconsResponse extends SpeakeasyBase {
    beacons?: BeaconInfo[];
}
