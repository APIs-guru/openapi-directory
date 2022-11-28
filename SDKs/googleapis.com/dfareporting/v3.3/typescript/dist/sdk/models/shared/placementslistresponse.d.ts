import { SpeakeasyBase } from "../../../internal/utils";
import { Placement } from "./placement";
/**
 * Placement List Response
**/
export declare class PlacementsListResponse extends SpeakeasyBase {
    kind?: string;
    nextPageToken?: string;
    placements?: Placement[];
}
