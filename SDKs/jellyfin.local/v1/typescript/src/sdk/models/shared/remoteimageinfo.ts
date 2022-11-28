import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RatingTypeEnum } from "./ratingtypeenum";
import { ImageTypeEnum } from "./imagetypeenum";



// RemoteImageInfo
/** 
 * Class RemoteImageInfo.
**/
export class RemoteImageInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CommunityRating" })
  communityRating?: number;

  @SpeakeasyMetadata({ data: "json, name=Height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=Language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @SpeakeasyMetadata({ data: "json, name=RatingType" })
  ratingType?: RatingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ThumbnailUrl" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ImageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=VoteCount" })
  voteCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Width" })
  width?: number;
}
