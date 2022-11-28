import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColorInfo } from "./colorinfo";



// DominantColorsAnnotation
/** 
 * Set of dominant colors and their corresponding scores.
**/
export class DominantColorsAnnotation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colors", elemType: ColorInfo })
  colors?: ColorInfo[];
}
