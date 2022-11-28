import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1Index } from "./googlefirestoreadminv1index";
/**
 * The response for FirestoreAdmin.ListIndexes.
**/
export declare class GoogleFirestoreAdminV1ListIndexesResponse extends SpeakeasyBase {
    indexes?: GoogleFirestoreAdminV1Index[];
    nextPageToken?: string;
}
