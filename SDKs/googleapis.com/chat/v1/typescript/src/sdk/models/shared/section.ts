import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { WidgetMarkup } from "./widgetmarkup";


// Section
/** 
 * A section contains a collection of widgets that are rendered (vertically) in the order that they are specified. Across all platforms, cards have a narrow fixed width, so there is currently no need for layout properties (e.g. float).
**/
export class Section extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: string;

  @Metadata({ data: "json, name=widgets", elemType: shared.WidgetMarkup })
  widgets?: WidgetMarkup[];
}
