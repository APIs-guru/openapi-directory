import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThemeColorPair } from "./themecolorpair";


// SpreadsheetTheme
/** 
 * Represents spreadsheet theme
**/
export class SpreadsheetTheme extends SpeakeasyBase {
  @Metadata({ data: "json, name=primaryFontFamily" })
  primaryFontFamily?: string;

  @Metadata({ data: "json, name=themeColors", elemType: shared.ThemeColorPair })
  themeColors?: ThemeColorPair[];
}
