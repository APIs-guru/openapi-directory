import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelSectionLocalization } from "./channelsectionlocalization";
export declare enum ChannelSectionSnippetStyleEnum {
    ChannelsectionStyleUnspecified = "channelsectionStyleUnspecified",
    HorizontalRow = "horizontalRow",
    VerticalList = "verticalList"
}
export declare enum ChannelSectionSnippetTypeEnum {
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
/**
 * Basic details about a channel section, including title, style and position.
**/
export declare class ChannelSectionSnippet extends SpeakeasyBase {
    channelId?: string;
    defaultLanguage?: string;
    localized?: ChannelSectionLocalization;
    position?: number;
    style?: ChannelSectionSnippetStyleEnum;
    title?: string;
    type?: ChannelSectionSnippetTypeEnum;
}
