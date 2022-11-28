import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlaylistItemStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
/**
 * Information about the playlist item's privacy status.
**/
export declare class PlaylistItemStatus extends SpeakeasyBase {
    privacyStatus?: PlaylistItemStatusPrivacyStatusEnum;
}
