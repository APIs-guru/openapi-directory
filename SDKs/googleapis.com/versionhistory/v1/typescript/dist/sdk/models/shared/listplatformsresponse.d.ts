import { SpeakeasyBase } from "../../../internal/utils";
import { Platform } from "./platform";
/**
 * Response message for ListPlatforms.
**/
export declare class ListPlatformsResponse extends SpeakeasyBase {
    nextPageToken?: string;
    platforms?: Platform[];
}
