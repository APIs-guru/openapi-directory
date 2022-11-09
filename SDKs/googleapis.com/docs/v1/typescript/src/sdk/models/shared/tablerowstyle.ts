import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Dimension } from "./dimension";


// TableRowStyle
/** 
 * Styles that apply to a table row.
**/
export class TableRowStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=minRowHeight" })
  minRowHeight?: Dimension;

  @Metadata({ data: "json, name=preventOverflow" })
  preventOverflow?: boolean;

  @Metadata({ data: "json, name=tableHeader" })
  tableHeader?: boolean;
}
