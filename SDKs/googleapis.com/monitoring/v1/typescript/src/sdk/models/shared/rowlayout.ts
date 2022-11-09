import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Row } from "./row";


// RowLayout
/** 
 * A simplified layout that divides the available space into rows and arranges a set of widgets horizontally in each row.
**/
export class RowLayout extends SpeakeasyBase {
  @Metadata({ data: "json, name=rows", elemType: shared.Row })
  rows?: Row[];
}
