import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * The streamed response for Firestore.BatchGetDocuments.
**/
export declare class BatchGetDocumentsResponse extends SpeakeasyBase {
    found?: Document;
    missing?: string;
    readTime?: string;
    transaction?: string;
}
