import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * Response message for 'ListSources' request.
**/
export declare class ListSourcesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sources?: Source[];
    unreachable?: string[];
}
