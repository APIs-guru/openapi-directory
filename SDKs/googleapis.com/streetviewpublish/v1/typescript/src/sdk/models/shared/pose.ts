import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LatLng } from "./latlng";
import { Level } from "./level";



// Pose
/** 
 * Raw pose measurement for an entity.
**/
export class Pose extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accuracyMeters" })
  accuracyMeters?: number;

  @SpeakeasyMetadata({ data: "json, name=altitude" })
  altitude?: number;

  @SpeakeasyMetadata({ data: "json, name=gpsRecordTimestampUnixEpoch" })
  gpsRecordTimestampUnixEpoch?: string;

  @SpeakeasyMetadata({ data: "json, name=heading" })
  heading?: number;

  @SpeakeasyMetadata({ data: "json, name=latLngPair" })
  latLngPair?: LatLng;

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: Level;

  @SpeakeasyMetadata({ data: "json, name=pitch" })
  pitch?: number;

  @SpeakeasyMetadata({ data: "json, name=roll" })
  roll?: number;
}
