import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleFirestoreAdminV1beta1ExportDocumentsRequest
/** 
 * The request for FirestoreAdmin.ExportDocuments.
**/
export class GoogleFirestoreAdminV1beta1ExportDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collectionIds" })
  collectionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=outputUriPrefix" })
  outputUriPrefix?: string;
}
