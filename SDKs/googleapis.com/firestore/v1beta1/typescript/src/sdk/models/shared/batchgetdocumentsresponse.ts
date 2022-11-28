import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";



// BatchGetDocumentsResponse
/** 
 * The streamed response for Firestore.BatchGetDocuments.
**/
export class BatchGetDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=found" })
  found?: Document;

  @SpeakeasyMetadata({ data: "json, name=missing" })
  missing?: string;

  @SpeakeasyMetadata({ data: "json, name=readTime" })
  readTime?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}
