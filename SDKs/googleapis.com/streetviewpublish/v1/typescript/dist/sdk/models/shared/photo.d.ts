import { SpeakeasyBase } from "../../../internal/utils";
import { Connection } from "./connection";
import { PhotoId } from "./photoid";
import { PlaceInput } from "./place";
import { Pose } from "./pose";
import { UploadRef } from "./uploadref";
import { Place } from "./place";
export declare enum PhotoMapsPublishStatusEnum {
    UnspecifiedMapsPublishStatus = "UNSPECIFIED_MAPS_PUBLISH_STATUS",
    Published = "PUBLISHED",
    RejectedUnknown = "REJECTED_UNKNOWN"
}
export declare enum PhotoTransferStatusEnum {
    TransferStatusUnknown = "TRANSFER_STATUS_UNKNOWN",
    NeverTransferred = "NEVER_TRANSFERRED",
    Pending = "PENDING",
    Completed = "COMPLETED",
    Rejected = "REJECTED",
    Expired = "EXPIRED",
    Cancelled = "CANCELLED",
    ReceivedViaTransfer = "RECEIVED_VIA_TRANSFER"
}
/**
 * Photo is used to store 360 photos along with photo metadata.
**/
export declare class PhotoInput extends SpeakeasyBase {
    captureTime?: string;
    connections?: Connection[];
    photoId?: PhotoId;
    places?: PlaceInput[];
    pose?: Pose;
    uploadReference?: UploadRef;
}
/**
 * Photo is used to store 360 photos along with photo metadata.
**/
export declare class Photo extends SpeakeasyBase {
    captureTime?: string;
    connections?: Connection[];
    downloadUrl?: string;
    mapsPublishStatus?: PhotoMapsPublishStatusEnum;
    photoId?: PhotoId;
    places?: Place[];
    pose?: Pose;
    shareLink?: string;
    thumbnailUrl?: string;
    transferStatus?: PhotoTransferStatusEnum;
    uploadReference?: UploadRef;
    uploadTime?: string;
    viewCount?: string;
}
