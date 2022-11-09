import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChannelLocalization } from "./channellocalization";
import { ThumbnailDetails } from "./thumbnaildetails";


// ChannelSnippet
/** 
 * Basic details about a channel, including title, description and thumbnails.
**/
export class ChannelSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=customUrl" })
  customUrl?: string;

  @Metadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=localized" })
  localized?: ChannelLocalization;

  @Metadata({ data: "json, name=publishedAt" })
  publishedAt?: Date;

  @Metadata({ data: "json, name=thumbnails" })
  thumbnails?: ThumbnailDetails;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
