import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PlaylistStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
export declare class PlaylistStatus extends SpeakeasyBase {
    privacyStatus?: PlaylistStatusPrivacyStatusEnum;
}
