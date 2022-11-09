import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RatingTypeEnum } from "./ratingtypeenum";
import { ImageTypeEnum } from "./imagetypeenum";


// RemoteImageInfo
/** 
 * Class RemoteImageInfo.
**/
export class RemoteImageInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=CommunityRating" })
  communityRating?: number;

  @Metadata({ data: "json, name=Height" })
  height?: number;

  @Metadata({ data: "json, name=Language" })
  language?: string;

  @Metadata({ data: "json, name=ProviderName" })
  providerName?: string;

  @Metadata({ data: "json, name=RatingType" })
  ratingType?: RatingTypeEnum;

  @Metadata({ data: "json, name=ThumbnailUrl" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=Type" })
  type?: ImageTypeEnum;

  @Metadata({ data: "json, name=Url" })
  url?: string;

  @Metadata({ data: "json, name=VoteCount" })
  voteCount?: number;

  @Metadata({ data: "json, name=Width" })
  width?: number;
}
