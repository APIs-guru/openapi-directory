import { SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";
/**
 * A response for listing creatives.
**/
export declare class ListCreativesResponse extends SpeakeasyBase {
    creatives?: Creative[];
    nextPageToken?: string;
}
