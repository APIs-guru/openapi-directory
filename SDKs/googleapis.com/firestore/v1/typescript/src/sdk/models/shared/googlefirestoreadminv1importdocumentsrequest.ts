import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirestoreAdminV1ImportDocumentsRequest
/** 
 * The request for FirestoreAdmin.ImportDocuments.
**/
export class GoogleFirestoreAdminV1ImportDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionIds" })
  collectionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=inputUriPrefix" })
  inputUriPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=namespaceIds" })
  namespaceIds?: string[];
}
