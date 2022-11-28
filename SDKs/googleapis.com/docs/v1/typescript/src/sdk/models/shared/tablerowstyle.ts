import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";



// TableRowStyle
/** 
 * Styles that apply to a table row.
**/
export class TableRowStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=minRowHeight" })
  minRowHeight?: Dimension;

  @SpeakeasyMetadata({ data: "json, name=preventOverflow" })
  preventOverflow?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tableHeader" })
  tableHeader?: boolean;
}
