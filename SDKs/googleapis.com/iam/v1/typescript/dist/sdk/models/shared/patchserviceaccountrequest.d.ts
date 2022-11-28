import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceAccountInput } from "./serviceaccount";
/**
 * The service account patch request. You can patch only the `display_name` and `description` fields. You must use the `update_mask` field to specify which of these fields you want to patch. Only the fields specified in the request are guaranteed to be returned in the response. Other fields may be empty in the response.
**/
export declare class PatchServiceAccountRequestInput extends SpeakeasyBase {
    serviceAccount?: ServiceAccountInput;
    updateMask?: string;
}
