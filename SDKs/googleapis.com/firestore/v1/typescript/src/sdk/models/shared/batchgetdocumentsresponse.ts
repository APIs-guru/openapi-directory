import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Document } from "./document";


// BatchGetDocumentsResponse
/** 
 * The streamed response for Firestore.BatchGetDocuments.
**/
export class BatchGetDocumentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=found" })
  found?: Document;

  @Metadata({ data: "json, name=missing" })
  missing?: string;

  @Metadata({ data: "json, name=readTime" })
  readTime?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}
