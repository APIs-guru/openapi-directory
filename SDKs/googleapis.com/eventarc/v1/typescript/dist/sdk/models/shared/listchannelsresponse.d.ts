import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Channel } from "./channel";
/**
 * The response message for the `ListChannels` method.
**/
export declare class ListChannelsResponse extends SpeakeasyBase {
    channels?: Channel[];
    nextPageToken?: string;
    unreachable?: string[];
}
