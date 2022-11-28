import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TableRow } from "./tablerow";
import { TableStyle } from "./tablestyle";



// Table
/** 
 * A StructuralElement representing a table.
**/
export class Table extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns" })
  columns?: number;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=tableRows", elemType: TableRow })
  tableRows?: TableRow[];

  @SpeakeasyMetadata({ data: "json, name=tableStyle" })
  tableStyle?: TableStyle;
}
