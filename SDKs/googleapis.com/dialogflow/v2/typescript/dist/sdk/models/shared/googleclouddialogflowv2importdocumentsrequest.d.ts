import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2ImportDocumentTemplate } from "./googleclouddialogflowv2importdocumenttemplate";
import { GoogleCloudDialogflowV2GcsSources } from "./googleclouddialogflowv2gcssources";
/**
 * Request message for Documents.ImportDocuments.
**/
export declare class GoogleCloudDialogflowV2ImportDocumentsRequest extends SpeakeasyBase {
    documentTemplate?: GoogleCloudDialogflowV2ImportDocumentTemplate;
    gcsSource?: GoogleCloudDialogflowV2GcsSources;
    importGcsCustomMetadata?: boolean;
}
