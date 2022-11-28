import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GridProperties
/** 
 * Properties of a grid.
**/
export class GridProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnCount" })
  columnCount?: number;

  @SpeakeasyMetadata({ data: "json, name=columnGroupControlAfter" })
  columnGroupControlAfter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=frozenColumnCount" })
  frozenColumnCount?: number;

  @SpeakeasyMetadata({ data: "json, name=frozenRowCount" })
  frozenRowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=hideGridlines" })
  hideGridlines?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rowGroupControlAfter" })
  rowGroupControlAfter?: boolean;
}
