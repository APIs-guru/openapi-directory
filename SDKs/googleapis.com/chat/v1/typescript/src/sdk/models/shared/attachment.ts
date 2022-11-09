import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AttachmentDataRef } from "./attachmentdataref";
import { DriveDataRef } from "./drivedataref";

export enum AttachmentSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED"
,    DriveFile = "DRIVE_FILE"
,    UploadedContent = "UPLOADED_CONTENT"
}


// Attachment
/** 
 * An attachment in Google Chat.
**/
export class Attachment extends SpeakeasyBase {
  @Metadata({ data: "json, name=attachmentDataRef" })
  attachmentDataRef?: AttachmentDataRef;

  @Metadata({ data: "json, name=contentName" })
  contentName?: string;

  @Metadata({ data: "json, name=contentType" })
  contentType?: string;

  @Metadata({ data: "json, name=downloadUri" })
  downloadUri?: string;

  @Metadata({ data: "json, name=driveDataRef" })
  driveDataRef?: DriveDataRef;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=source" })
  source?: AttachmentSourceEnum;

  @Metadata({ data: "json, name=thumbnailUri" })
  thumbnailUri?: string;
}
