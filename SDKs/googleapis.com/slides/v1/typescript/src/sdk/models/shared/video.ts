import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VideoProperties } from "./videoproperties";


export enum VideoSourceEnum {
    SourceUnspecified = "SOURCE_UNSPECIFIED",
    Youtube = "YOUTUBE",
    Drive = "DRIVE"
}


// Video
/** 
 * A PageElement kind representing a video.
**/
export class Video extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: VideoSourceEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=videoProperties" })
  videoProperties?: VideoProperties;
}
