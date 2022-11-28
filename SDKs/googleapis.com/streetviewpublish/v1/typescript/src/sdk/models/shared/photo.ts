import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
import { PhotoId } from "./photoid";
import { PlaceInput } from "./place";
import { Pose } from "./pose";
import { UploadRef } from "./uploadref";
import { Place } from "./place";


export enum PhotoMapsPublishStatusEnum {
    UnspecifiedMapsPublishStatus = "UNSPECIFIED_MAPS_PUBLISH_STATUS",
    Published = "PUBLISHED",
    RejectedUnknown = "REJECTED_UNKNOWN"
}

export enum PhotoTransferStatusEnum {
    TransferStatusUnknown = "TRANSFER_STATUS_UNKNOWN",
    NeverTransferred = "NEVER_TRANSFERRED",
    Pending = "PENDING",
    Completed = "COMPLETED",
    Rejected = "REJECTED",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED",
    ReceivedViaTransfer = "RECEIVED_VIA_TRANSFER"
}


// PhotoInput
/** 
 * Photo is used to store 360 photos along with photo metadata.
**/
export class PhotoInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=captureTime" })
  captureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection })
  connections?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=photoId" })
  photoId?: PhotoId;

  @SpeakeasyMetadata({ data: "json, name=places", elemType: PlaceInput })
  places?: PlaceInput[];

  @SpeakeasyMetadata({ data: "json, name=pose" })
  pose?: Pose;

  @SpeakeasyMetadata({ data: "json, name=uploadReference" })
  uploadReference?: UploadRef;
}


// Photo
/** 
 * Photo is used to store 360 photos along with photo metadata.
**/
export class Photo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=captureTime" })
  captureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=connections", elemType: Connection })
  connections?: Connection[];

  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mapsPublishStatus" })
  mapsPublishStatus?: PhotoMapsPublishStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=photoId" })
  photoId?: PhotoId;

  @SpeakeasyMetadata({ data: "json, name=places", elemType: Place })
  places?: Place[];

  @SpeakeasyMetadata({ data: "json, name=pose" })
  pose?: Pose;

  @SpeakeasyMetadata({ data: "json, name=shareLink" })
  shareLink?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=transferStatus" })
  transferStatus?: PhotoTransferStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=uploadReference" })
  uploadReference?: UploadRef;

  @SpeakeasyMetadata({ data: "json, name=uploadTime" })
  uploadTime?: string;

  @SpeakeasyMetadata({ data: "json, name=viewCount" })
  viewCount?: string;
}
