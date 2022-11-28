import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSectionContentDetails } from "./channelsectioncontentdetails";
import { ChannelSectionLocalization } from "./channelsectionlocalization";
import { ChannelSectionSnippet } from "./channelsectionsnippet";
import { ChannelSectionTargeting } from "./channelsectiontargeting";
export declare class ChannelSection extends SpeakeasyBase {
    contentDetails?: ChannelSectionContentDetails;
    etag?: string;
    id?: string;
    kind?: string;
    localizations?: Map<string, ChannelSectionLocalization>;
    snippet?: ChannelSectionSnippet;
    targeting?: ChannelSectionTargeting;
}
