import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelSectionLocalization } from "./channelsectionlocalization";


export enum ChannelSectionSnippetStyleEnum {
    ChannelsectionStyleUnspecified = "channelsectionStyleUnspecified",
    HorizontalRow = "horizontalRow",
    VerticalList = "verticalList"
}

export enum ChannelSectionSnippetTypeEnum {
    ChannelsectionTypeUndefined = "channelsectionTypeUndefined",
    SinglePlaylist = "singlePlaylist",
    MultiplePlaylists = "multiplePlaylists",
    PopularUploads = "popularUploads",
    RecentUploads = "recentUploads",
    Likes = "likes",
    AllPlaylists = "allPlaylists",
    LikedPlaylists = "likedPlaylists",
    RecentPosts = "recentPosts",
    RecentActivity = "recentActivity",
    LiveEvents = "liveEvents",
    UpcomingEvents = "upcomingEvents",
    CompletedEvents = "completedEvents",
    MultipleChannels = "multipleChannels",
    PostedVideos = "postedVideos",
    PostedPlaylists = "postedPlaylists",
    Subscriptions = "subscriptions"
}


// ChannelSectionSnippet
/** 
 * Basic details about a channel section, including title, style and position.
**/
export class ChannelSectionSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelId" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=localized" })
  localized?: ChannelSectionLocalization;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=style" })
  style?: ChannelSectionSnippetStyleEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ChannelSectionSnippetTypeEnum;
}
