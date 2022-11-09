import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColorInfo } from "./colorinfo";


// DominantColorsAnnotation
/** 
 * Set of dominant colors and their corresponding scores.
**/
export class DominantColorsAnnotation extends SpeakeasyBase {
  @Metadata({ data: "json, name=colors", elemType: shared.ColorInfo })
  colors?: ColorInfo[];
}
