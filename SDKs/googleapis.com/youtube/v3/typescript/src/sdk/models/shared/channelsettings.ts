import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChannelSettings
/** 
 * Branding properties for the channel view.
**/
export class ChannelSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultTab" })
  defaultTab?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=featuredChannelsTitle" })
  featuredChannelsTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=featuredChannelsUrls" })
  featuredChannelsUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=keywords" })
  keywords?: string;

  @SpeakeasyMetadata({ data: "json, name=moderateComments" })
  moderateComments?: boolean;

  @SpeakeasyMetadata({ data: "json, name=profileColor" })
  profileColor?: string;

  @SpeakeasyMetadata({ data: "json, name=showBrowseView" })
  showBrowseView?: boolean;

  @SpeakeasyMetadata({ data: "json, name=showRelatedChannels" })
  showRelatedChannels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=trackingAnalyticsAccountId" })
  trackingAnalyticsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=unsubscribedTrailer" })
  unsubscribedTrailer?: string;
}
