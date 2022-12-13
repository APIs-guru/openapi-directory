import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ApplicationDocumentResultStatusEnum {
    Accepted = "accepted",
    InProgress = "in_progress",
    Incomplete = "incomplete",
    NoyoReview = "noyo_review",
    Rejected = "rejected",
    Submitted = "submitted",
    Wiped = "wiped"
}


export class ApplicationDocumentResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application_id" })
  applicationId: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created: number;

  @SpeakeasyMetadata({ data: "json, name=document_type" })
  documentType: string;

  @SpeakeasyMetadata({ data: "json, name=file_upload_id" })
  fileUploadId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes: string;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: ApplicationDocumentResultStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=status_notes" })
  statusNotes: string;

  @SpeakeasyMetadata({ data: "json, name=template_file_key" })
  templateFileKey: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: string;
}
