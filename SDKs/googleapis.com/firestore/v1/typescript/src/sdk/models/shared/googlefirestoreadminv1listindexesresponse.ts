import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Index } from "./googlefirestoreadminv1index";



// GoogleFirestoreAdminV1ListIndexesResponse
/** 
 * The response for FirestoreAdmin.ListIndexes.
**/
export class GoogleFirestoreAdminV1ListIndexesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexes", elemType: GoogleFirestoreAdminV1Index })
  indexes?: GoogleFirestoreAdminV1Index[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
