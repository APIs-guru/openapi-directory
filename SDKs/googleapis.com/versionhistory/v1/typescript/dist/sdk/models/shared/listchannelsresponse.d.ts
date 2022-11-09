import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Channel } from "./channel";
/**
 * Response message for ListChannels.
**/
export declare class ListChannelsResponse extends SpeakeasyBase {
    channels?: Channel[];
    nextPageToken?: string;
}
