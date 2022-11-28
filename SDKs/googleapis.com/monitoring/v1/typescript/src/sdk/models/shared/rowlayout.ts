import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";



// RowLayout
/** 
 * A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row.
**/
export class RowLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rows", elemType: Row })
  rows?: Row[];
}
