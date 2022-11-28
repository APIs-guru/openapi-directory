import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";



// TableColumnProperties
/** 
 * Properties of each column in a table.
**/
export class TableColumnProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnWidth" })
  columnWidth?: Dimension;
}
