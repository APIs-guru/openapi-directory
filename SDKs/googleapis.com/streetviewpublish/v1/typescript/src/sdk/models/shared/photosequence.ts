import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProcessingFailureDetails } from "./processingfailuredetails";
import { Imu } from "./imu";
import { Photo } from "./photo";
import { Pose } from "./pose";
import { LatLngBounds } from "./latlngbounds";
import { UploadRef } from "./uploadref";

export enum PhotoSequenceFailureReasonEnum {
    ProcessingFailureReasonUnspecified = "PROCESSING_FAILURE_REASON_UNSPECIFIED"
,    LowResolution = "LOW_RESOLUTION"
,    Duplicate = "DUPLICATE"
,    InsufficientGps = "INSUFFICIENT_GPS"
,    NoOverlapGps = "NO_OVERLAP_GPS"
,    InvalidGps = "INVALID_GPS"
,    FailedToRefinePositions = "FAILED_TO_REFINE_POSITIONS"
,    Takedown = "TAKEDOWN"
,    CorruptVideo = "CORRUPT_VIDEO"
,    Internal = "INTERNAL"
,    InvalidVideoFormat = "INVALID_VIDEO_FORMAT"
,    InvalidVideoDimensions = "INVALID_VIDEO_DIMENSIONS"
,    InvalidCaptureTime = "INVALID_CAPTURE_TIME"
,    GpsDataGap = "GPS_DATA_GAP"
,    JumpyGps = "JUMPY_GPS"
,    InvalidImu = "INVALID_IMU"
,    InsufficientImu = "INSUFFICIENT_IMU"
,    InsufficientOverlapTimeSeries = "INSUFFICIENT_OVERLAP_TIME_SERIES"
,    ImuDataGap = "IMU_DATA_GAP"
,    UnsupportedCamera = "UNSUPPORTED_CAMERA"
,    NotOutdoors = "NOT_OUTDOORS"
,    InsufficientVideoFrames = "INSUFFICIENT_VIDEO_FRAMES"
,    InsufficientMovement = "INSUFFICIENT_MOVEMENT"
}

export enum PhotoSequenceGpsSourceEnum {
    PhotoSequence = "PHOTO_SEQUENCE"
,    CameraMotionMetadataTrack = "CAMERA_MOTION_METADATA_TRACK"
}

export enum PhotoSequenceProcessingStateEnum {
    ProcessingStateUnspecified = "PROCESSING_STATE_UNSPECIFIED"
,    Pending = "PENDING"
,    Processing = "PROCESSING"
,    Processed = "PROCESSED"
,    Failed = "FAILED"
}


// PhotoSequence
/** 
 * A sequence of 360 photos along with metadata.
**/
export class PhotoSequence extends SpeakeasyBase {
  @Metadata({ data: "json, name=captureTimeOverride" })
  captureTimeOverride?: string;

  @Metadata({ data: "json, name=distanceMeters" })
  distanceMeters?: number;

  @Metadata({ data: "json, name=failureDetails" })
  failureDetails?: ProcessingFailureDetails;

  @Metadata({ data: "json, name=failureReason" })
  failureReason?: PhotoSequenceFailureReasonEnum;

  @Metadata({ data: "json, name=filename" })
  filename?: string;

  @Metadata({ data: "json, name=gpsSource" })
  gpsSource?: PhotoSequenceGpsSourceEnum;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imu" })
  imu?: Imu;

  @Metadata({ data: "json, name=photos", elemType: shared.Photo })
  photos?: Photo[];

  @Metadata({ data: "json, name=processingState" })
  processingState?: PhotoSequenceProcessingStateEnum;

  @Metadata({ data: "json, name=rawGpsTimeline", elemType: shared.Pose })
  rawGpsTimeline?: Pose[];

  @Metadata({ data: "json, name=sequenceBounds" })
  sequenceBounds?: LatLngBounds;

  @Metadata({ data: "json, name=uploadReference" })
  uploadReference?: UploadRef;

  @Metadata({ data: "json, name=uploadTime" })
  uploadTime?: string;

  @Metadata({ data: "json, name=viewCount" })
  viewCount?: string;
}
