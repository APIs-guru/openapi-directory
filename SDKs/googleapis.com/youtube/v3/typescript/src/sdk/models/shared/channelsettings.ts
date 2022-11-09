import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChannelSettings
/** 
 * Branding properties for the channel view.
**/
export class ChannelSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @Metadata({ data: "json, name=defaultTab" })
  defaultTab?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=featuredChannelsTitle" })
  featuredChannelsTitle?: string;

  @Metadata({ data: "json, name=featuredChannelsUrls" })
  featuredChannelsUrls?: string[];

  @Metadata({ data: "json, name=keywords" })
  keywords?: string;

  @Metadata({ data: "json, name=moderateComments" })
  moderateComments?: boolean;

  @Metadata({ data: "json, name=profileColor" })
  profileColor?: string;

  @Metadata({ data: "json, name=showBrowseView" })
  showBrowseView?: boolean;

  @Metadata({ data: "json, name=showRelatedChannels" })
  showRelatedChannels?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=trackingAnalyticsAccountId" })
  trackingAnalyticsAccountId?: string;

  @Metadata({ data: "json, name=unsubscribedTrailer" })
  unsubscribedTrailer?: string;
}
