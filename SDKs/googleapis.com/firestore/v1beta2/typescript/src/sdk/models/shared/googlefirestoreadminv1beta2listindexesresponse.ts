import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1beta2Index } from "./googlefirestoreadminv1beta2index";


// GoogleFirestoreAdminV1beta2ListIndexesResponse
/** 
 * The response for FirestoreAdmin.ListIndexes.
**/
export class GoogleFirestoreAdminV1beta2ListIndexesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexes", elemType: shared.GoogleFirestoreAdminV1beta2Index })
  indexes?: GoogleFirestoreAdminV1beta2Index[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
