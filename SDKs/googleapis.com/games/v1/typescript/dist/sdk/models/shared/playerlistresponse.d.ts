import { SpeakeasyBase } from "../../../internal/utils";
import { Player } from "./player";
/**
 * A third party player list response.
**/
export declare class PlayerListResponse extends SpeakeasyBase {
    items?: Player[];
    kind?: string;
    nextPageToken?: string;
}
