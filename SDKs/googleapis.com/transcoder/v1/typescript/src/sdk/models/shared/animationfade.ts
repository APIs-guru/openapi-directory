import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";


export enum AnimationFadeFadeTypeEnum {
    FadeTypeUnspecified = "FADE_TYPE_UNSPECIFIED",
    FadeIn = "FADE_IN",
    FadeOut = "FADE_OUT"
}


// AnimationFade
/** 
 * Display overlay object with fade animation.
**/
export class AnimationFade extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=fadeType" })
  fadeType?: AnimationFadeFadeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=xy" })
  xy?: NormalizedCoordinate;
}
