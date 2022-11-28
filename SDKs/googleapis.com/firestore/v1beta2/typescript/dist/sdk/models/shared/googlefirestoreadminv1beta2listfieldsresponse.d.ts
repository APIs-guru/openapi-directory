import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2Field } from "./googlefirestoreadminv1beta2field";
/**
 * The response for FirestoreAdmin.ListFields.
**/
export declare class GoogleFirestoreAdminV1beta2ListFieldsResponse extends SpeakeasyBase {
    fields?: GoogleFirestoreAdminV1beta2Field[];
    nextPageToken?: string;
}
