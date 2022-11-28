import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ImportDocumentTemplate } from "./googleclouddialogflowv2importdocumenttemplate";
import { GoogleCloudDialogflowV2GcsSources } from "./googleclouddialogflowv2gcssources";



// GoogleCloudDialogflowV2ImportDocumentsRequest
/** 
 * Request message for Documents.ImportDocuments.
**/
export class GoogleCloudDialogflowV2ImportDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentTemplate" })
  documentTemplate?: GoogleCloudDialogflowV2ImportDocumentTemplate;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDialogflowV2GcsSources;

  @SpeakeasyMetadata({ data: "json, name=importGcsCustomMetadata" })
  importGcsCustomMetadata?: boolean;
}
