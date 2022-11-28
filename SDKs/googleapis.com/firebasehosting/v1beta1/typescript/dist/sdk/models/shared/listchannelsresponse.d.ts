import { SpeakeasyBase } from "../../../internal/utils";
import { Channel } from "./channel";
export declare class ListChannelsResponse extends SpeakeasyBase {
    channels?: Channel[];
    nextPageToken?: string;
}
