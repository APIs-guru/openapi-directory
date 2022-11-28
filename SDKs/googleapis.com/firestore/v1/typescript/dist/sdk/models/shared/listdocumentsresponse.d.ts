import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * The response for Firestore.ListDocuments.
**/
export declare class ListDocumentsResponse extends SpeakeasyBase {
    documents?: Document[];
    nextPageToken?: string;
}
