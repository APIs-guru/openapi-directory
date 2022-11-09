import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1beta1Index } from "./googlefirestoreadminv1beta1index";


// GoogleFirestoreAdminV1beta1ListIndexesResponse
/** 
 * The response for FirestoreAdmin.ListIndexes.
**/
export class GoogleFirestoreAdminV1beta1ListIndexesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexes", elemType: shared.GoogleFirestoreAdminV1beta1Index })
  indexes?: GoogleFirestoreAdminV1beta1Index[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
