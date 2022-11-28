import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelAuditDetails } from "./channelauditdetails";
import { ChannelBrandingSettings } from "./channelbrandingsettings";
import { ChannelContentDetails } from "./channelcontentdetails";
import { ChannelContentOwnerDetails } from "./channelcontentownerdetails";
import { ChannelConversionPings } from "./channelconversionpings";
import { ChannelLocalization } from "./channellocalization";
import { ChannelSnippet } from "./channelsnippet";
import { ChannelStatistics } from "./channelstatistics";
import { ChannelStatus } from "./channelstatus";
import { ChannelTopicDetails } from "./channeltopicdetails";
/**
 * A *channel* resource contains information about a YouTube channel.
**/
export declare class Channel extends SpeakeasyBase {
    auditDetails?: ChannelAuditDetails;
    brandingSettings?: ChannelBrandingSettings;
    contentDetails?: ChannelContentDetails;
    contentOwnerDetails?: ChannelContentOwnerDetails;
    conversionPings?: ChannelConversionPings;
    etag?: string;
    id?: string;
    kind?: string;
    localizations?: Map<string, ChannelLocalization>;
    snippet?: ChannelSnippet;
    statistics?: ChannelStatistics;
    status?: ChannelStatus;
    topicDetails?: ChannelTopicDetails;
}
