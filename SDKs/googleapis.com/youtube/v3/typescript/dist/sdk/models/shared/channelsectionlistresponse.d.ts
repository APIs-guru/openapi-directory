import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSection } from "./channelsection";
export declare class ChannelSectionListResponse extends SpeakeasyBase {
    etag?: string;
    eventId?: string;
    items?: ChannelSection[];
    kind?: string;
    visitorId?: string;
}
