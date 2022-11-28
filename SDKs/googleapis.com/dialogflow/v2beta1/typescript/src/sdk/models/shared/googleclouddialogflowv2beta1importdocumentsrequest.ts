import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ImportDocumentTemplate } from "./googleclouddialogflowv2beta1importdocumenttemplate";
import { GoogleCloudDialogflowV2beta1GcsSources } from "./googleclouddialogflowv2beta1gcssources";



// GoogleCloudDialogflowV2beta1ImportDocumentsRequest
/** 
 * Request message for Documents.ImportDocuments.
**/
export class GoogleCloudDialogflowV2beta1ImportDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentTemplate" })
  documentTemplate?: GoogleCloudDialogflowV2beta1ImportDocumentTemplate;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDialogflowV2beta1GcsSources;

  @SpeakeasyMetadata({ data: "json, name=importGcsCustomMetadata" })
  importGcsCustomMetadata?: boolean;
}
