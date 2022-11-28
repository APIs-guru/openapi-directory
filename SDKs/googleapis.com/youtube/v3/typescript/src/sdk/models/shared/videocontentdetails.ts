import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentRating } from "./contentrating";
import { AccessPolicy } from "./accesspolicy";
import { VideoContentDetailsRegionRestriction } from "./videocontentdetailsregionrestriction";


export enum VideoContentDetailsCaptionEnum {
    True = "true",
    False = "false"
}

export enum VideoContentDetailsDefinitionEnum {
    Sd = "sd",
    Hd = "hd"
}

export enum VideoContentDetailsProjectionEnum {
    Rectangular = "rectangular",
    ThreeHundredAndSixty = "360"
}


// VideoContentDetails
/** 
 * Details about the content of a YouTube Video.
**/
export class VideoContentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=caption" })
  caption?: VideoContentDetailsCaptionEnum;

  @SpeakeasyMetadata({ data: "json, name=contentRating" })
  contentRating?: ContentRating;

  @SpeakeasyMetadata({ data: "json, name=countryRestriction" })
  countryRestriction?: AccessPolicy;

  @SpeakeasyMetadata({ data: "json, name=definition" })
  definition?: VideoContentDetailsDefinitionEnum;

  @SpeakeasyMetadata({ data: "json, name=dimension" })
  dimension?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=hasCustomThumbnail" })
  hasCustomThumbnail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=licensedContent" })
  licensedContent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=projection" })
  projection?: VideoContentDetailsProjectionEnum;

  @SpeakeasyMetadata({ data: "json, name=regionRestriction" })
  regionRestriction?: VideoContentDetailsRegionRestriction;
}
