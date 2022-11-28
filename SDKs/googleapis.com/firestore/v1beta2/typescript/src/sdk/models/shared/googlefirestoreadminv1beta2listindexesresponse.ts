import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2Index } from "./googlefirestoreadminv1beta2index";



// GoogleFirestoreAdminV1beta2ListIndexesResponse
/** 
 * The response for FirestoreAdmin.ListIndexes.
**/
export class GoogleFirestoreAdminV1beta2ListIndexesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=indexes", elemType: GoogleFirestoreAdminV1beta2Index })
  indexes?: GoogleFirestoreAdminV1beta2Index[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
