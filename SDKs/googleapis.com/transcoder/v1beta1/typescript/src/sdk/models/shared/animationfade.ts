import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";

export enum AnimationFadeFadeTypeEnum {
    FadeTypeUnspecified = "FADE_TYPE_UNSPECIFIED"
,    FadeIn = "FADE_IN"
,    FadeOut = "FADE_OUT"
}


// AnimationFade
/** 
 * Display overlay object with fade animation.
**/
export class AnimationFade extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @Metadata({ data: "json, name=fadeType" })
  fadeType?: AnimationFadeFadeTypeEnum;

  @Metadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;

  @Metadata({ data: "json, name=xy" })
  xy?: NormalizedCoordinate;
}
