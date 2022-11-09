import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2ReloadDocumentRequest
/** 
 * Request message for Documents.ReloadDocument.
**/
export class GoogleCloudDialogflowV2ReloadDocumentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @Metadata({ data: "json, name=importGcsCustomMetadata" })
  importGcsCustomMetadata?: boolean;

  @Metadata({ data: "json, name=smartMessagingPartialUpdate" })
  smartMessagingPartialUpdate?: boolean;
}
