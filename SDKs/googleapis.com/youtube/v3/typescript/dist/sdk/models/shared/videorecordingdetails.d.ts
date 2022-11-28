import { SpeakeasyBase } from "../../../internal/utils";
import { GeoPoint } from "./geopoint";
/**
 * Recording information associated with the video.
**/
export declare class VideoRecordingDetails extends SpeakeasyBase {
    location?: GeoPoint;
    locationDescription?: string;
    recordingDate?: Date;
}
