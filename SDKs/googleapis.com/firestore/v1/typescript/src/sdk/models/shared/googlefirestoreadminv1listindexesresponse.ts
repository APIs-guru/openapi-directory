import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1Index } from "./googlefirestoreadminv1index";


// GoogleFirestoreAdminV1ListIndexesResponse
/** 
 * The response for FirestoreAdmin.ListIndexes.
**/
export class GoogleFirestoreAdminV1ListIndexesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=indexes", elemType: shared.GoogleFirestoreAdminV1Index })
  indexes?: GoogleFirestoreAdminV1Index[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
