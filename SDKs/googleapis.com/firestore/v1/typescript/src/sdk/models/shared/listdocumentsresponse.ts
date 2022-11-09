import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Document } from "./document";


// ListDocumentsResponse
/** 
 * The response for Firestore.ListDocuments.
**/
export class ListDocumentsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=documents", elemType: shared.Document })
  documents?: Document[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
