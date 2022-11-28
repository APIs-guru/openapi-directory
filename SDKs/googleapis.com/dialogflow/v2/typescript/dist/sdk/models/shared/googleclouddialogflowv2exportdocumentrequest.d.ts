import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2GcsDestination } from "./googleclouddialogflowv2gcsdestination";
/**
 * Request message for Documents.ExportDocument.
**/
export declare class GoogleCloudDialogflowV2ExportDocumentRequest extends SpeakeasyBase {
    exportFullContent?: boolean;
    gcsDestination?: GoogleCloudDialogflowV2GcsDestination;
    smartMessagingPartialUpdate?: boolean;
}
