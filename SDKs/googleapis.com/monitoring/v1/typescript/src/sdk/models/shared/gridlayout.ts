import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";



// GridLayout
/** 
 * A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
**/
export class GridLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: string;

  @SpeakeasyMetadata({ data: "json, name=widgets", elemType: Widget })
  widgets?: Widget[];
}
