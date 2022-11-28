import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingFailureDetails } from "./processingfailuredetails";
import { Imu } from "./imu";
import { Pose } from "./pose";
import { LatLngBounds } from "./latlngbounds";
import { UploadRef } from "./uploadref";
export declare enum PhotoSequenceGpsSourceEnum {
    PhotoSequence = "PHOTO_SEQUENCE",
    CameraMotionMetadataTrack = "CAMERA_MOTION_METADATA_TRACK"
}
/**
 * A sequence of 360 photos along with metadata.
**/
export declare class PhotoSequenceInput extends SpeakeasyBase {
    captureTimeOverride?: string;
    failureDetails?: ProcessingFailureDetails;
    gpsSource?: PhotoSequenceGpsSourceEnum;
    imu?: Imu;
    rawGpsTimeline?: Pose[];
    sequenceBounds?: LatLngBounds;
    uploadReference?: UploadRef;
}
