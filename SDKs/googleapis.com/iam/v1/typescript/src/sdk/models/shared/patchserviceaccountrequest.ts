import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountInput } from "./serviceaccount";



// PatchServiceAccountRequestInput
/** 
 * The service account patch request. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response.
**/
export class PatchServiceAccountRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: ServiceAccountInput;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
