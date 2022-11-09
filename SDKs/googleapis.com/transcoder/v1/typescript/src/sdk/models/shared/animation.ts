import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AnimationEnd } from "./animationend";
import { AnimationFade } from "./animationfade";
import { AnimationStatic } from "./animationstatic";


// Animation
/** 
 * Animation types.
**/
export class Animation extends SpeakeasyBase {
  @Metadata({ data: "json, name=animationEnd" })
  animationEnd?: AnimationEnd;

  @Metadata({ data: "json, name=animationFade" })
  animationFade?: AnimationFade;

  @Metadata({ data: "json, name=animationStatic" })
  animationStatic?: AnimationStatic;
}
