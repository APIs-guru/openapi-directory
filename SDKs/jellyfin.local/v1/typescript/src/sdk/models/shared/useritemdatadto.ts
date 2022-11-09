import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserItemDataDto
/** 
 * Class UserItemDataDto.
**/
export class UserItemDataDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsFavorite" })
  isFavorite?: boolean;

  @Metadata({ data: "json, name=ItemId" })
  itemId?: string;

  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=LastPlayedDate" })
  lastPlayedDate?: Date;

  @Metadata({ data: "json, name=Likes" })
  likes?: boolean;

  @Metadata({ data: "json, name=PlayCount" })
  playCount?: number;

  @Metadata({ data: "json, name=PlaybackPositionTicks" })
  playbackPositionTicks?: number;

  @Metadata({ data: "json, name=Played" })
  played?: boolean;

  @Metadata({ data: "json, name=PlayedPercentage" })
  playedPercentage?: number;

  @Metadata({ data: "json, name=Rating" })
  rating?: number;

  @Metadata({ data: "json, name=UnplayedItemCount" })
  unplayedItemCount?: number;
}
