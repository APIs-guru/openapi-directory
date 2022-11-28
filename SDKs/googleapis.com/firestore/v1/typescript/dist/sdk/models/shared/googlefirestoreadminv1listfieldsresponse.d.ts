import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Field } from "./googlefirestoreadminv1field";
/**
 * The response for FirestoreAdmin.ListFields.
**/
export declare class GoogleFirestoreAdminV1ListFieldsResponse extends SpeakeasyBase {
    fields?: GoogleFirestoreAdminV1Field[];
    nextPageToken?: string;
}
