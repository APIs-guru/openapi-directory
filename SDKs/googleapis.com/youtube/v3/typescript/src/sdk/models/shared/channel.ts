import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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


// Channel
/** 
 * A *channel* resource contains information about a YouTube channel.
**/
export class Channel extends SpeakeasyBase {
  @Metadata({ data: "json, name=auditDetails" })
  auditDetails?: ChannelAuditDetails;

  @Metadata({ data: "json, name=brandingSettings" })
  brandingSettings?: ChannelBrandingSettings;

  @Metadata({ data: "json, name=contentDetails" })
  contentDetails?: ChannelContentDetails;

  @Metadata({ data: "json, name=contentOwnerDetails" })
  contentOwnerDetails?: ChannelContentOwnerDetails;

  @Metadata({ data: "json, name=conversionPings" })
  conversionPings?: ChannelConversionPings;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=localizations", elemType: shared.ChannelLocalization })
  localizations?: Map<string, ChannelLocalization>;

  @Metadata({ data: "json, name=snippet" })
  snippet?: ChannelSnippet;

  @Metadata({ data: "json, name=statistics" })
  statistics?: ChannelStatistics;

  @Metadata({ data: "json, name=status" })
  status?: ChannelStatus;

  @Metadata({ data: "json, name=topicDetails" })
  topicDetails?: ChannelTopicDetails;
}
