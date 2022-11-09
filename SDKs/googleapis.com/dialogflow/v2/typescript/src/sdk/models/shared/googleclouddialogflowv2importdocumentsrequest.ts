import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2ImportDocumentTemplate } from "./googleclouddialogflowv2importdocumenttemplate";
import { GoogleCloudDialogflowV2GcsSources } from "./googleclouddialogflowv2gcssources";


// GoogleCloudDialogflowV2ImportDocumentsRequest
/** 
 * Request message for Documents.ImportDocuments.
**/
export class GoogleCloudDialogflowV2ImportDocumentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentTemplate" })
  documentTemplate?: GoogleCloudDialogflowV2ImportDocumentTemplate;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDialogflowV2GcsSources;

  @Metadata({ data: "json, name=importGcsCustomMetadata" })
  importGcsCustomMetadata?: boolean;
}
