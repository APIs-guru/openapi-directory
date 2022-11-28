import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColorScheme } from "./colorscheme";
import { PageBackgroundFill } from "./pagebackgroundfill";



// PageProperties
/** 
 * The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.
**/
export class PageProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colorScheme" })
  colorScheme?: ColorScheme;

  @SpeakeasyMetadata({ data: "json, name=pageBackgroundFill" })
  pageBackgroundFill?: PageBackgroundFill;
}
