import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleFirestoreAdminV1beta2Field } from "./googlefirestoreadminv1beta2field";


// GoogleFirestoreAdminV1beta2ListFieldsResponse
/** 
 * The response for FirestoreAdmin.ListFields.
**/
export class GoogleFirestoreAdminV1beta2ListFieldsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.GoogleFirestoreAdminV1beta2Field })
  fields?: GoogleFirestoreAdminV1beta2Field[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
