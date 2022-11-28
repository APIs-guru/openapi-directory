import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";



// Column
/** 
 * Defines the layout properties and content for a column.
**/
export class Column extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: string;

  @SpeakeasyMetadata({ data: "json, name=widgets", elemType: Widget })
  widgets?: Widget[];
}
