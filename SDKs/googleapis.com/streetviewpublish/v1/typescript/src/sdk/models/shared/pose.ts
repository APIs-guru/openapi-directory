import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LatLng } from "./latlng";
import { Level } from "./level";


// Pose
/** 
 * Raw pose measurement for an entity.
**/
export class Pose extends SpeakeasyBase {
  @Metadata({ data: "json, name=accuracyMeters" })
  accuracyMeters?: number;

  @Metadata({ data: "json, name=altitude" })
  altitude?: number;

  @Metadata({ data: "json, name=gpsRecordTimestampUnixEpoch" })
  gpsRecordTimestampUnixEpoch?: string;

  @Metadata({ data: "json, name=heading" })
  heading?: number;

  @Metadata({ data: "json, name=latLngPair" })
  latLngPair?: LatLng;

  @Metadata({ data: "json, name=level" })
  level?: Level;

  @Metadata({ data: "json, name=pitch" })
  pitch?: number;

  @Metadata({ data: "json, name=roll" })
  roll?: number;
}
