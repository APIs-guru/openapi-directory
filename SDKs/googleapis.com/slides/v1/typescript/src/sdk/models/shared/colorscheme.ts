import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThemeColorPair } from "./themecolorpair";



// ColorScheme
/** 
 * The palette of predefined colors for a page.
**/
export class ColorScheme extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colors", elemType: ThemeColorPair })
  colors?: ThemeColorPair[];
}
