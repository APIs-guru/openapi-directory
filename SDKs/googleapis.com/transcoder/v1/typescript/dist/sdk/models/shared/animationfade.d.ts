import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NormalizedCoordinate } from "./normalizedcoordinate";
export declare enum AnimationFadeFadeTypeEnum {
    FadeTypeUnspecified = "FADE_TYPE_UNSPECIFIED",
    FadeIn = "FADE_IN",
    FadeOut = "FADE_OUT"
}
/**
 * Display overlay object with fade animation.
**/
export declare class AnimationFade extends SpeakeasyBase {
    endTimeOffset?: string;
    fadeType?: AnimationFadeFadeTypeEnum;
    startTimeOffset?: string;
    xy?: NormalizedCoordinate;
}
