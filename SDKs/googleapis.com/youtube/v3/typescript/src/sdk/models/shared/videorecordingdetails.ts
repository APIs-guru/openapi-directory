import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GeoPoint } from "./geopoint";


// VideoRecordingDetails
/** 
 * Recording information associated with the video.
**/
export class VideoRecordingDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: GeoPoint;

  @Metadata({ data: "json, name=locationDescription" })
  locationDescription?: string;

  @Metadata({ data: "json, name=recordingDate" })
  recordingDate?: Date;
}
