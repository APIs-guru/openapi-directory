import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Widget } from "./widget";


// Column
/** 
 * Defines the layout properties and content for a column.
**/
export class Column extends SpeakeasyBase {
  @Metadata({ data: "json, name=weight" })
  weight?: string;

  @Metadata({ data: "json, name=widgets", elemType: shared.Widget })
  widgets?: Widget[];
}
