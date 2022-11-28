import { SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";
/**
 * Response message for the ListCollections method.
**/
export declare class ListCollectionsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    resources?: Collection[];
}
