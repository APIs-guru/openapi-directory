import { SpeakeasyBase } from "../../../internal/utils";
import { QuerySource } from "./querysource";
/**
 * List sources response.
**/
export declare class ListQuerySourcesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    sources?: QuerySource[];
}
