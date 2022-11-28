import { SpeakeasyBase } from "../../../internal/utils";
import { AnimationEnd } from "./animationend";
import { AnimationFade } from "./animationfade";
import { AnimationStatic } from "./animationstatic";
/**
 * Animation types.
**/
export declare class Animation extends SpeakeasyBase {
    animationEnd?: AnimationEnd;
    animationFade?: AnimationFade;
    animationStatic?: AnimationStatic;
}
