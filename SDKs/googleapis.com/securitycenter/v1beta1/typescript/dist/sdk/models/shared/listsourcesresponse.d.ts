import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Response message for listing sources.
**/
export declare class ListSourcesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sources?: Source[];
}
