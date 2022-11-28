import { SpeakeasyBase } from "../../../internal/utils";
import { ActivityContentDetailsBulletin } from "./activitycontentdetailsbulletin";
import { ActivityContentDetailsChannelItem } from "./activitycontentdetailschannelitem";
import { ActivityContentDetailsComment } from "./activitycontentdetailscomment";
import { ActivityContentDetailsFavorite } from "./activitycontentdetailsfavorite";
import { ActivityContentDetailsLike } from "./activitycontentdetailslike";
import { ActivityContentDetailsPlaylistItem } from "./activitycontentdetailsplaylistitem";
import { ActivityContentDetailsPromotedItem } from "./activitycontentdetailspromoteditem";
import { ActivityContentDetailsRecommendation } from "./activitycontentdetailsrecommendation";
import { ActivityContentDetailsSocial } from "./activitycontentdetailssocial";
import { ActivityContentDetailsSubscription } from "./activitycontentdetailssubscription";
import { ActivityContentDetailsUpload } from "./activitycontentdetailsupload";
/**
 * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
**/
export declare class ActivityContentDetails extends SpeakeasyBase {
    bulletin?: ActivityContentDetailsBulletin;
    channelItem?: ActivityContentDetailsChannelItem;
    comment?: ActivityContentDetailsComment;
    favorite?: ActivityContentDetailsFavorite;
    like?: ActivityContentDetailsLike;
    playlistItem?: ActivityContentDetailsPlaylistItem;
    promotedItem?: ActivityContentDetailsPromotedItem;
    recommendation?: ActivityContentDetailsRecommendation;
    social?: ActivityContentDetailsSocial;
    subscription?: ActivityContentDetailsSubscription;
    upload?: ActivityContentDetailsUpload;
}
