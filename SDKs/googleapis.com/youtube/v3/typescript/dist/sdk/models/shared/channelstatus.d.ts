import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ChannelStatusLongUploadsStatusEnum {
    LongUploadsUnspecified = "longUploadsUnspecified",
    Allowed = "allowed",
    Eligible = "eligible",
    Disallowed = "disallowed"
}
export declare enum ChannelStatusPrivacyStatusEnum {
    Public = "public",
    Unlisted = "unlisted",
    Private = "private"
}
/**
 * JSON template for the status part of a channel.
**/
export declare class ChannelStatus extends SpeakeasyBase {
    isLinked?: boolean;
    longUploadsStatus?: ChannelStatusLongUploadsStatusEnum;
    madeForKids?: boolean;
    privacyStatus?: ChannelStatusPrivacyStatusEnum;
    selfDeclaredMadeForKids?: boolean;
}
