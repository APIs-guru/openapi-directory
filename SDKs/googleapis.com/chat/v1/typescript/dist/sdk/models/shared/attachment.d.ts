import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentDataRef } from "./attachmentdataref";
import { DriveDataRef } from "./drivedataref";
export declare enum AttachmentSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED",
    DriveFile = "DRIVE_FILE",
    UploadedContent = "UPLOADED_CONTENT"
}
/**
 * An attachment in Google Chat.
**/
export declare class Attachment extends SpeakeasyBase {
    attachmentDataRef?: AttachmentDataRef;
    contentName?: string;
    contentType?: string;
    downloadUri?: string;
    driveDataRef?: DriveDataRef;
    name?: string;
    source?: AttachmentSourceEnum;
    thumbnailUri?: string;
}
/**
 * An attachment in Google Chat.
**/
export declare class AttachmentInput extends SpeakeasyBase {
    attachmentDataRef?: AttachmentDataRef;
    contentName?: string;
    contentType?: string;
    driveDataRef?: DriveDataRef;
    name?: string;
    source?: AttachmentSourceEnum;
}
