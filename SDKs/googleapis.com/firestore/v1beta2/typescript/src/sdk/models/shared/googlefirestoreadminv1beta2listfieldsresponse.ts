import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2Field } from "./googlefirestoreadminv1beta2field";



// GoogleFirestoreAdminV1beta2ListFieldsResponse
/** 
 * The response for FirestoreAdmin.ListFields.
**/
export class GoogleFirestoreAdminV1beta2ListFieldsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: GoogleFirestoreAdminV1beta2Field })
  fields?: GoogleFirestoreAdminV1beta2Field[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
