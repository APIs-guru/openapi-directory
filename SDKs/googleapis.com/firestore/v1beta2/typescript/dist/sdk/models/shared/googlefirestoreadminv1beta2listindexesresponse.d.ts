import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleFirestoreAdminV1beta2Index } from "./googlefirestoreadminv1beta2index";
/**
 * The response for FirestoreAdmin.ListIndexes.
**/
export declare class GoogleFirestoreAdminV1beta2ListIndexesResponse extends SpeakeasyBase {
    indexes?: GoogleFirestoreAdminV1beta2Index[];
    nextPageToken?: string;
}
