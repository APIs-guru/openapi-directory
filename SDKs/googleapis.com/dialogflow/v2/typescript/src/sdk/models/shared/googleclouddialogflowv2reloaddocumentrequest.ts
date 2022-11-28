import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2ReloadDocumentRequest
/** 
 * Request message for Documents.ReloadDocument.
**/
export class GoogleCloudDialogflowV2ReloadDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contentUri" })
  contentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=importGcsCustomMetadata" })
  importGcsCustomMetadata?: boolean;

  @SpeakeasyMetadata({ data: "json, name=smartMessagingPartialUpdate" })
  smartMessagingPartialUpdate?: boolean;
}
