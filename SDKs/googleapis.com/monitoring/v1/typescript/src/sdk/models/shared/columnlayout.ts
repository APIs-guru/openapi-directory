import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Column } from "./column";


// ColumnLayout
/** 
 * A simplified layout that divides the available space into vertical columns and arranges a set of widgets vertically in each column.
**/
export class ColumnLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.Column })
  columns?: Column[];
}
