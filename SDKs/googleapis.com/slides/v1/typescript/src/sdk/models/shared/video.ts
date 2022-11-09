import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VideoProperties } from "./videoproperties";

export enum VideoSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED"
,    Youtube = "YOUTUBE"
,    Drive = "DRIVE"
}


// Video
/** 
 * A PageElement kind representing a video.
**/
export class Video extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=source" })
  source?: VideoSourceEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=videoProperties" })
  videoProperties?: VideoProperties;
}
