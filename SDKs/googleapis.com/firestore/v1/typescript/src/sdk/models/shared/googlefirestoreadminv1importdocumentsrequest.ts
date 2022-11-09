import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirestoreAdminV1ImportDocumentsRequest
/** 
 * The request for FirestoreAdmin.ImportDocuments.
**/
export class GoogleFirestoreAdminV1ImportDocumentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionIds" })
  collectionIds?: string[];

  @Metadata({ data: "json, name=inputUriPrefix" })
  inputUriPrefix?: string;
}
