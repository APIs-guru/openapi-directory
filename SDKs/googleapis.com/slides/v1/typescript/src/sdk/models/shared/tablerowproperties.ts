import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";



// TableRowProperties
/** 
 * Properties of each row in a table.
**/
export class TableRowProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minRowHeight" })
  minRowHeight?: Dimension;
}
