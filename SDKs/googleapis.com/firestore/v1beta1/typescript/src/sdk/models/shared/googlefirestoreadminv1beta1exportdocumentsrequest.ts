import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirestoreAdminV1beta1ExportDocumentsRequest
/** 
 * The request for FirestoreAdmin.ExportDocuments.
**/
export class GoogleFirestoreAdminV1beta1ExportDocumentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionIds" })
  collectionIds?: string[];

  @Metadata({ data: "json, name=outputUriPrefix" })
  outputUriPrefix?: string;
}
