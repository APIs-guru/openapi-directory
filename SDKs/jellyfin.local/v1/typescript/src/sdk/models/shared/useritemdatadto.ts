import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserItemDataDto
/** 
 * Class UserItemDataDto.
**/
export class UserItemDataDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsFavorite" })
  isFavorite?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ItemId" })
  itemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=LastPlayedDate" })
  lastPlayedDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Likes" })
  likes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PlayCount" })
  playCount?: number;

  @SpeakeasyMetadata({ data: "json, name=PlaybackPositionTicks" })
  playbackPositionTicks?: number;

  @SpeakeasyMetadata({ data: "json, name=Played" })
  played?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PlayedPercentage" })
  playedPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=Rating" })
  rating?: number;

  @SpeakeasyMetadata({ data: "json, name=UnplayedItemCount" })
  unplayedItemCount?: number;
}
