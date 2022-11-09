import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Widget } from "./widget";


// Row
/** 
 * Defines the layout properties and content for a row.
**/
export class Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=weight" })
  weight?: string;

  @Metadata({ data: "json, name=widgets", elemType: shared.Widget })
  widgets?: Widget[];
}
