import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GridProperties
/** 
 * Properties of a grid.
**/
export class GridProperties extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnCount" })
  columnCount?: number;

  @Metadata({ data: "json, name=columnGroupControlAfter" })
  columnGroupControlAfter?: boolean;

  @Metadata({ data: "json, name=frozenColumnCount" })
  frozenColumnCount?: number;

  @Metadata({ data: "json, name=frozenRowCount" })
  frozenRowCount?: number;

  @Metadata({ data: "json, name=hideGridlines" })
  hideGridlines?: boolean;

  @Metadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @Metadata({ data: "json, name=rowGroupControlAfter" })
  rowGroupControlAfter?: boolean;
}
