import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1Field } from "./googlefirestoreadminv1field";


// GoogleFirestoreAdminV1ListFieldsResponse
/** 
 * The response for FirestoreAdmin.ListFields.
**/
export class GoogleFirestoreAdminV1ListFieldsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.GoogleFirestoreAdminV1Field })
  fields?: GoogleFirestoreAdminV1Field[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
