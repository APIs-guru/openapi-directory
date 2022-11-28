import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=bulletin" })
  bulletin?: ActivityContentDetailsBulletin;

  @SpeakeasyMetadata({ data: "json, name=channelItem" })
  channelItem?: ActivityContentDetailsChannelItem;

  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: ActivityContentDetailsComment;

  @SpeakeasyMetadata({ data: "json, name=favorite" })
  favorite?: ActivityContentDetailsFavorite;

  @SpeakeasyMetadata({ data: "json, name=like" })
  like?: ActivityContentDetailsLike;

  @SpeakeasyMetadata({ data: "json, name=playlistItem" })
  playlistItem?: ActivityContentDetailsPlaylistItem;

  @SpeakeasyMetadata({ data: "json, name=promotedItem" })
  promotedItem?: ActivityContentDetailsPromotedItem;

  @SpeakeasyMetadata({ data: "json, name=recommendation" })
  recommendation?: ActivityContentDetailsRecommendation;

  @SpeakeasyMetadata({ data: "json, name=social" })
  social?: ActivityContentDetailsSocial;

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: ActivityContentDetailsSubscription;

  @SpeakeasyMetadata({ data: "json, name=upload" })
  upload?: ActivityContentDetailsUpload;
}
