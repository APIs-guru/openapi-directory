import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirestoreAdminV1beta1ImportDocumentsRequest
/** 
 * The request for FirestoreAdmin.ImportDocuments.
**/
export class GoogleFirestoreAdminV1beta1ImportDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionIds" })
  collectionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=inputUriPrefix" })
  inputUriPrefix?: string;
}
