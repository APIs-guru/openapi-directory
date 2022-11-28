import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Document } from "./googleclouddialogflowv2beta1document";
/**
 * Response message for Documents.ListDocuments.
**/
export declare class GoogleCloudDialogflowV2beta1ListDocumentsResponse extends SpeakeasyBase {
    documents?: GoogleCloudDialogflowV2beta1Document[];
    nextPageToken?: string;
}
