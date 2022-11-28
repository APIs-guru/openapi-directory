import { SpeakeasyBase } from "../../../internal/utils";
import { MediaFile } from "./mediafile";
export declare enum VideoMetadataVastVersionEnum {
    VastVersionUnspecified = "VAST_VERSION_UNSPECIFIED",
    VastVersion10 = "VAST_VERSION_1_0",
    VastVersion20 = "VAST_VERSION_2_0",
    VastVersion30 = "VAST_VERSION_3_0",
    VastVersion40 = "VAST_VERSION_4_0"
}
/**
 * Video metadata for a creative.
**/
export declare class VideoMetadata extends SpeakeasyBase {
    duration?: string;
    isValidVast?: boolean;
    isVpaid?: boolean;
    mediaFiles?: MediaFile[];
    skipOffset?: string;
    vastVersion?: VideoMetadataVastVersionEnum;
}
