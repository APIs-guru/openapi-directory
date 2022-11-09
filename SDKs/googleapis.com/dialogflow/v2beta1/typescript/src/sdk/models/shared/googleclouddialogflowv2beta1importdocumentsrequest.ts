import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1ImportDocumentTemplate } from "./googleclouddialogflowv2beta1importdocumenttemplate";
import { GoogleCloudDialogflowV2beta1GcsSources } from "./googleclouddialogflowv2beta1gcssources";


// GoogleCloudDialogflowV2beta1ImportDocumentsRequest
/** 
 * Request message for Documents.ImportDocuments.
**/
export class GoogleCloudDialogflowV2beta1ImportDocumentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentTemplate" })
  documentTemplate?: GoogleCloudDialogflowV2beta1ImportDocumentTemplate;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDialogflowV2beta1GcsSources;

  @Metadata({ data: "json, name=importGcsCustomMetadata" })
  importGcsCustomMetadata?: boolean;
}
