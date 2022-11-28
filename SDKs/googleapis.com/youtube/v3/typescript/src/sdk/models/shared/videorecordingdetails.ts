import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GeoPoint } from "./geopoint";



// VideoRecordingDetails
/** 
 * Recording information associated with the video.
**/
export class VideoRecordingDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: GeoPoint;

  @SpeakeasyMetadata({ data: "json, name=locationDescription" })
  locationDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=recordingDate" })
  recordingDate?: Date;
}
