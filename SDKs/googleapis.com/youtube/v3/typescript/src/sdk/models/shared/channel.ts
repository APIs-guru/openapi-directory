import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=auditDetails" })
  auditDetails?: ChannelAuditDetails;

  @SpeakeasyMetadata({ data: "json, name=brandingSettings" })
  brandingSettings?: ChannelBrandingSettings;

  @SpeakeasyMetadata({ data: "json, name=contentDetails" })
  contentDetails?: ChannelContentDetails;

  @SpeakeasyMetadata({ data: "json, name=contentOwnerDetails" })
  contentOwnerDetails?: ChannelContentOwnerDetails;

  @SpeakeasyMetadata({ data: "json, name=conversionPings" })
  conversionPings?: ChannelConversionPings;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=localizations", elemType: ChannelLocalization })
  localizations?: Map<string, ChannelLocalization>;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: ChannelSnippet;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: ChannelStatistics;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChannelStatus;

  @SpeakeasyMetadata({ data: "json, name=topicDetails" })
  topicDetails?: ChannelTopicDetails;
}
