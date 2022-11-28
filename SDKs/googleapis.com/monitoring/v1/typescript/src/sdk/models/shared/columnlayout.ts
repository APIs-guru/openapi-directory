import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Column } from "./column";



// ColumnLayout
/** 
 * A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.
**/
export class ColumnLayout extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: Column })
  columns?: Column[];
}
