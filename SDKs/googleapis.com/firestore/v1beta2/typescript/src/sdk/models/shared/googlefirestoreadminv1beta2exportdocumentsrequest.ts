import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleFirestoreAdminV1beta2ExportDocumentsRequest
/** 
 * The request for FirestoreAdmin.ExportDocuments.
**/
export class GoogleFirestoreAdminV1beta2ExportDocumentsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=collectionIds" })
  collectionIds?: string[];

  @Metadata({ data: "json, name=outputUriPrefix" })
  outputUriPrefix?: string;
}
