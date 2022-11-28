import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelLocalization } from "./channellocalization";
import { ThumbnailDetails } from "./thumbnaildetails";



// ChannelSnippet
/** 
 * Basic details about a channel, including title, description and thumbnails.
**/
export class ChannelSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=customUrl" })
  customUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=localized" })
  localized?: ChannelLocalization;

  @SpeakeasyMetadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
