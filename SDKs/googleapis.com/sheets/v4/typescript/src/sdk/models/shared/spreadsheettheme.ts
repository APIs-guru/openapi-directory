import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThemeColorPair } from "./themecolorpair";



// SpreadsheetTheme
/** 
 * Represents spreadsheet theme
**/
export class SpreadsheetTheme extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primaryFontFamily" })
  primaryFontFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=themeColors", elemType: ThemeColorPair })
  themeColors?: ThemeColorPair[];
}
