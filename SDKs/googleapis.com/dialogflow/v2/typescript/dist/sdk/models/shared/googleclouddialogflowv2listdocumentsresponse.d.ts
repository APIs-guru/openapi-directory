import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2Document } from "./googleclouddialogflowv2document";
/**
 * Response message for Documents.ListDocuments.
**/
export declare class GoogleCloudDialogflowV2ListDocumentsResponse extends SpeakeasyBase {
    documents?: GoogleCloudDialogflowV2Document[];
    nextPageToken?: string;
}
