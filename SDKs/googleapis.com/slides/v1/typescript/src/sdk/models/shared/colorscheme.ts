import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThemeColorPair } from "./themecolorpair";


// ColorScheme
/** 
 * The palette of predefined colors for a page.
**/
export class ColorScheme extends SpeakeasyBase {
  @Metadata({ data: "json, name=colors", elemType: shared.ThemeColorPair })
  colors?: ThemeColorPair[];
}
