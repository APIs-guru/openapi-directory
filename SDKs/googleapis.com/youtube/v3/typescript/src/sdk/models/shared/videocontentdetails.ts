import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentRating } from "./contentrating";
import { AccessPolicy } from "./accesspolicy";
import { VideoContentDetailsRegionRestriction } from "./videocontentdetailsregionrestriction";

export enum VideoContentDetailsCaptionEnum {
    True = "true"
,    False = "false"
}

export enum VideoContentDetailsDefinitionEnum {
    Sd = "sd"
,    Hd = "hd"
}

export enum VideoContentDetailsProjectionEnum {
    Rectangular = "rectangular"
,    ThreeHundredAndSixty = "360"
}


// VideoContentDetails
/** 
 * Details about the content of a YouTube Video.
**/
export class VideoContentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=caption" })
  caption?: VideoContentDetailsCaptionEnum;

  @Metadata({ data: "json, name=contentRating" })
  contentRating?: ContentRating;

  @Metadata({ data: "json, name=countryRestriction" })
  countryRestriction?: AccessPolicy;

  @Metadata({ data: "json, name=definition" })
  definition?: VideoContentDetailsDefinitionEnum;

  @Metadata({ data: "json, name=dimension" })
  dimension?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=hasCustomThumbnail" })
  hasCustomThumbnail?: boolean;

  @Metadata({ data: "json, name=licensedContent" })
  licensedContent?: boolean;

  @Metadata({ data: "json, name=projection" })
  projection?: VideoContentDetailsProjectionEnum;

  @Metadata({ data: "json, name=regionRestriction" })
  regionRestriction?: VideoContentDetailsRegionRestriction;
}
