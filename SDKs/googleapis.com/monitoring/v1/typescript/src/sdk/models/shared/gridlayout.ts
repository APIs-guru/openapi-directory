import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Widget } from "./widget";


// GridLayout
/** 
 * A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.
**/
export class GridLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: string;

  @Metadata({ data: "json, name=widgets", elemType: shared.Widget })
  widgets?: Widget[];
}
