import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnimationEnd } from "./animationend";
import { AnimationFade } from "./animationfade";
import { AnimationStatic } from "./animationstatic";



// Animation
/** 
 * Animation types.
**/
export class Animation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=animationEnd" })
  animationEnd?: AnimationEnd;

  @SpeakeasyMetadata({ data: "json, name=animationFade" })
  animationFade?: AnimationFade;

  @SpeakeasyMetadata({ data: "json, name=animationStatic" })
  animationStatic?: AnimationStatic;
}
