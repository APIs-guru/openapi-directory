import { SpeakeasyBase } from "../../../internal/utils";
import { PlayerEvent } from "./playerevent";
/**
 * A ListByPlayer response.
**/
export declare class PlayerEventListResponse extends SpeakeasyBase {
    items?: PlayerEvent[];
    kind?: string;
    nextPageToken?: string;
}
