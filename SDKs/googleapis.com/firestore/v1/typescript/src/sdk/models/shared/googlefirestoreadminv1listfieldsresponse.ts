import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Field } from "./googlefirestoreadminv1field";



// GoogleFirestoreAdminV1ListFieldsResponse
/** 
 * The response for FirestoreAdmin.ListFields.
**/
export class GoogleFirestoreAdminV1ListFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleFirestoreAdminV1Field })
  fields?: GoogleFirestoreAdminV1Field[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
