import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Class UserItemDataDto.
**/
export declare class UserItemDataDto extends SpeakeasyBase {
    isFavorite?: boolean;
    itemId?: string;
    key?: string;
    lastPlayedDate?: Date;
    likes?: boolean;
    playCount?: number;
    playbackPositionTicks?: number;
    played?: boolean;
    playedPercentage?: number;
    rating?: number;
    unplayedItemCount?: number;
}
