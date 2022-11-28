import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The response from Firestore.ListCollectionIds.
**/
export declare class ListCollectionIdsResponse extends SpeakeasyBase {
    collectionIds?: string[];
    nextPageToken?: string;
}
