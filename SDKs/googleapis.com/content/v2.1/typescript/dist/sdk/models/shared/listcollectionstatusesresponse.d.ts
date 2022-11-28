import { SpeakeasyBase } from "../../../internal/utils";
import { CollectionStatus } from "./collectionstatus";
/**
 * Response message for the ListCollectionStatuses method.
**/
export declare class ListCollectionStatusesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resources?: CollectionStatus[];
}
