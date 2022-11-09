import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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


// ActivityContentDetails
/** 
 * Details about the content of an activity: the video that was shared, the channel that was subscribed to, etc.
**/
export class ActivityContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=bulletin" })
  bulletin?: ActivityContentDetailsBulletin;

  @Metadata({ data: "json, name=channelItem" })
  channelItem?: ActivityContentDetailsChannelItem;

  @Metadata({ data: "json, name=comment" })
  comment?: ActivityContentDetailsComment;

  @Metadata({ data: "json, name=favorite" })
  favorite?: ActivityContentDetailsFavorite;

  @Metadata({ data: "json, name=like" })
  like?: ActivityContentDetailsLike;

  @Metadata({ data: "json, name=playlistItem" })
  playlistItem?: ActivityContentDetailsPlaylistItem;

  @Metadata({ data: "json, name=promotedItem" })
  promotedItem?: ActivityContentDetailsPromotedItem;

  @Metadata({ data: "json, name=recommendation" })
  recommendation?: ActivityContentDetailsRecommendation;

  @Metadata({ data: "json, name=social" })
  social?: ActivityContentDetailsSocial;

  @Metadata({ data: "json, name=subscription" })
  subscription?: ActivityContentDetailsSubscription;

  @Metadata({ data: "json, name=upload" })
  upload?: ActivityContentDetailsUpload;
}
