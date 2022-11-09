import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";


// TableRowProperties
/** 
 * Properties of each row in a table.
**/
export class TableRowProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=minRowHeight" })
  minRowHeight?: Dimension;
}
