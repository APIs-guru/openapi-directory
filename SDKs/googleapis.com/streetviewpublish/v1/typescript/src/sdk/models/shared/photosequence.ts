import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProcessingFailureDetails } from "./processingfailuredetails";
import { Imu } from "./imu";
import { Pose } from "./pose";
import { LatLngBounds } from "./latlngbounds";
import { UploadRef } from "./uploadref";


export enum PhotoSequenceGpsSourceEnum {
    PhotoSequence = "PHOTO_SEQUENCE",
    CameraMotionMetadataTrack = "CAMERA_MOTION_METADATA_TRACK"
}


// PhotoSequenceInput
/** 
 * A sequence of 360 photos along with metadata.
**/
export class PhotoSequenceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=captureTimeOverride" })
  captureTimeOverride?: string;

  @SpeakeasyMetadata({ data: "json, name=failureDetails" })
  failureDetails?: ProcessingFailureDetails;

  @SpeakeasyMetadata({ data: "json, name=gpsSource" })
  gpsSource?: PhotoSequenceGpsSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=imu" })
  imu?: Imu;

  @SpeakeasyMetadata({ data: "json, name=rawGpsTimeline", elemType: Pose })
  rawGpsTimeline?: Pose[];

  @SpeakeasyMetadata({ data: "json, name=sequenceBounds" })
  sequenceBounds?: LatLngBounds;

  @SpeakeasyMetadata({ data: "json, name=uploadReference" })
  uploadReference?: UploadRef;
}
