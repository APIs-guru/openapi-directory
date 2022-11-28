import { SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
import { Level } from "./level";
/**
 * Raw pose measurement for an entity.
**/
export declare class Pose extends SpeakeasyBase {
    accuracyMeters?: number;
    altitude?: number;
    gpsRecordTimestampUnixEpoch?: string;
    heading?: number;
    latLngPair?: LatLng;
    level?: Level;
    pitch?: number;
    roll?: number;
}
