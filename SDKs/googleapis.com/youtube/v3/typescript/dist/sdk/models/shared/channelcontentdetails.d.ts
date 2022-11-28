import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChannelContentDetailsRelatedPlaylists extends SpeakeasyBase {
    favorites?: string;
    likes?: string;
    uploads?: string;
    watchHistory?: string;
    watchLater?: string;
}
/**
 * Details about the content of a channel.
**/
export declare class ChannelContentDetails extends SpeakeasyBase {
    relatedPlaylists?: ChannelContentDetailsRelatedPlaylists;
}
