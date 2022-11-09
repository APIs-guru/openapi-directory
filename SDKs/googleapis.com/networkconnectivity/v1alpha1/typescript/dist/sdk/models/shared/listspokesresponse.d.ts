import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Spoke } from "./spoke";
/**
 * The response for HubService.ListSpokes.
**/
export declare class ListSpokesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    spokes?: Spoke[];
    unreachable?: string[];
}
