import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Widget } from "./widget";



// Row
/** 
 * Defines the layout properties and content for a row.
**/
export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=weight" })
  weight?: string;

  @SpeakeasyMetadata({ data: "json, name=widgets", elemType: Widget })
  widgets?: Widget[];
}
