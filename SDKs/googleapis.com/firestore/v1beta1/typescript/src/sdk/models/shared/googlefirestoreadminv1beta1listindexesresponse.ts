import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta1Index } from "./googlefirestoreadminv1beta1index";



// GoogleFirestoreAdminV1beta1ListIndexesResponse
/** 
 * The response for FirestoreAdmin.ListIndexes.
**/
export class GoogleFirestoreAdminV1beta1ListIndexesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexes", elemType: GoogleFirestoreAdminV1beta1Index })
  indexes?: GoogleFirestoreAdminV1beta1Index[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
