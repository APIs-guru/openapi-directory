import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1ImportDocumentTemplate } from "./googleclouddialogflowv2beta1importdocumenttemplate";
import { GoogleCloudDialogflowV2beta1GcsSources } from "./googleclouddialogflowv2beta1gcssources";
/**
 * Request message for Documents.ImportDocuments.
**/
export declare class GoogleCloudDialogflowV2beta1ImportDocumentsRequest extends SpeakeasyBase {
    documentTemplate?: GoogleCloudDialogflowV2beta1ImportDocumentTemplate;
    gcsSource?: GoogleCloudDialogflowV2beta1GcsSources;
    importGcsCustomMetadata?: boolean;
}
