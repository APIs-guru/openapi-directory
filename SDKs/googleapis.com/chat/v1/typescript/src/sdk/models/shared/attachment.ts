import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachmentDataRef } from "./attachmentdataref";
import { DriveDataRef } from "./drivedataref";


export enum AttachmentSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED",
    DriveFile = "DRIVE_FILE",
    UploadedContent = "UPLOADED_CONTENT"
}


// Attachment
/** 
 * An attachment in Google Chat.
**/
export class Attachment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentDataRef" })
  attachmentDataRef?: AttachmentDataRef;

  @SpeakeasyMetadata({ data: "json, name=contentName" })
  contentName?: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=downloadUri" })
  downloadUri?: string;

  @SpeakeasyMetadata({ data: "json, name=driveDataRef" })
  driveDataRef?: DriveDataRef;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: AttachmentSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=thumbnailUri" })
  thumbnailUri?: string;
}


// AttachmentInput
/** 
 * An attachment in Google Chat.
**/
export class AttachmentInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attachmentDataRef" })
  attachmentDataRef?: AttachmentDataRef;

  @SpeakeasyMetadata({ data: "json, name=contentName" })
  contentName?: string;

  @SpeakeasyMetadata({ data: "json, name=contentType" })
  contentType?: string;

  @SpeakeasyMetadata({ data: "json, name=driveDataRef" })
  driveDataRef?: DriveDataRef;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: AttachmentSourceEnum;
}
