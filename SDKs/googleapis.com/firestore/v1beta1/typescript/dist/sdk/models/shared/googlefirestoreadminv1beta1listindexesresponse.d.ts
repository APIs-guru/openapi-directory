import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta1Index } from "./googlefirestoreadminv1beta1index";
/**
 * The response for FirestoreAdmin.ListIndexes.
**/
export declare class GoogleFirestoreAdminV1beta1ListIndexesResponse extends SpeakeasyBase {
    indexes?: GoogleFirestoreAdminV1beta1Index[];
    nextPageToken?: string;
}
