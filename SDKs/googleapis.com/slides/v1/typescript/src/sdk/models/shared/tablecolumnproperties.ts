import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";


// TableColumnProperties
/** 
 * Properties of each column in a table.
**/
export class TableColumnProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnWidth" })
  columnWidth?: Dimension;
}
