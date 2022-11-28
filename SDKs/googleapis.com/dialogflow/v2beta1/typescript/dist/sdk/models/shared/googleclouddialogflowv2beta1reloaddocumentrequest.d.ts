import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1GcsSource } from "./googleclouddialogflowv2beta1gcssource";
/**
 * Request message for Documents.ReloadDocument.
**/
export declare class GoogleCloudDialogflowV2beta1ReloadDocumentRequest extends SpeakeasyBase {
    gcsSource?: GoogleCloudDialogflowV2beta1GcsSource;
    importGcsCustomMetadata?: boolean;
}
