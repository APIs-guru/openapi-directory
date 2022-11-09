import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Connection } from "./connection";
import { PhotoId } from "./photoid";
import { Place } from "./place";
import { Pose } from "./pose";
import { UploadRef } from "./uploadref";

export enum PhotoMapsPublishStatusEnum {
    UnspecifiedMapsPublishStatus = "UNSPECIFIED_MAPS_PUBLISH_STATUS"
,    Published = "PUBLISHED"
,    RejectedUnknown = "REJECTED_UNKNOWN"
}

export enum PhotoTransferStatusEnum {
    TransferStatusUnknown = "TRANSFER_STATUS_UNKNOWN"
,    NeverTransferred = "NEVER_TRANSFERRED"
,    Pending = "PENDING"
,    Completed = "COMPLETED"
,    Rejected = "REJECTED"
,    Expired = "EXPIRED"
,    Cancelled = "CANCELLED"
,    ReceivedViaTransfer = "RECEIVED_VIA_TRANSFER"
}


// Photo
/** 
 * Photo is used to store 360 photos along with photo metadata.
**/
export class Photo extends SpeakeasyBase {
  @Metadata({ data: "json, name=captureTime" })
  captureTime?: string;

  @Metadata({ data: "json, name=connections", elemType: shared.Connection })
  connections?: Connection[];

  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=mapsPublishStatus" })
  mapsPublishStatus?: PhotoMapsPublishStatusEnum;

  @Metadata({ data: "json, name=photoId" })
  photoId?: PhotoId;

  @Metadata({ data: "json, name=places", elemType: shared.Place })
  places?: Place[];

  @Metadata({ data: "json, name=pose" })
  pose?: Pose;

  @Metadata({ data: "json, name=shareLink" })
  shareLink?: string;

  @Metadata({ data: "json, name=thumbnailUrl" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=transferStatus" })
  transferStatus?: PhotoTransferStatusEnum;

  @Metadata({ data: "json, name=uploadReference" })
  uploadReference?: UploadRef;

  @Metadata({ data: "json, name=uploadTime" })
  uploadTime?: string;

  @Metadata({ data: "json, name=viewCount" })
  viewCount?: string;
}
