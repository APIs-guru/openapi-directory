import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRating } from "./contentrating";
import { AccessPolicy } from "./accesspolicy";
import { VideoContentDetailsRegionRestriction } from "./videocontentdetailsregionrestriction";
export declare enum VideoContentDetailsCaptionEnum {
    True = "true",
    False = "false"
}
export declare enum VideoContentDetailsDefinitionEnum {
    Sd = "sd",
    Hd = "hd"
}
export declare enum VideoContentDetailsProjectionEnum {
    Rectangular = "rectangular",
    ThreeHundredAndSixty = "360"
}
/**
 * Details about the content of a YouTube Video.
**/
export declare class VideoContentDetails extends SpeakeasyBase {
    caption?: VideoContentDetailsCaptionEnum;
    contentRating?: ContentRating;
    countryRestriction?: AccessPolicy;
    definition?: VideoContentDetailsDefinitionEnum;
    dimension?: string;
    duration?: string;
    hasCustomThumbnail?: boolean;
    licensedContent?: boolean;
    projection?: VideoContentDetailsProjectionEnum;
    regionRestriction?: VideoContentDetailsRegionRestriction;
}
