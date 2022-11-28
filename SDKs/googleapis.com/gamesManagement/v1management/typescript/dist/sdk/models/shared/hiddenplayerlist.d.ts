import { SpeakeasyBase } from "../../../internal/utils";
import { HiddenPlayer } from "./hiddenplayer";
/**
 * A list of hidden players.
**/
export declare class HiddenPlayerList extends SpeakeasyBase {
    items?: HiddenPlayer[];
    kind?: string;
    nextPageToken?: string;
}
