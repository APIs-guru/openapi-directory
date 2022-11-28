import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WidgetMarkup } from "./widgetmarkup";



// Section
/** 
 * A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
**/
export class Section extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: string;

  @SpeakeasyMetadata({ data: "json, name=widgets", elemType: WidgetMarkup })
  widgets?: WidgetMarkup[];
}
