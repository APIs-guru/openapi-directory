import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableRow } from "./tablerow";
import { TableStyle } from "./tablestyle";


// Table
/** 
 * A StructuralElement representing a table.
**/
export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns" })
  columns?: number;

  @Metadata({ data: "json, name=rows" })
  rows?: number;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionIds" })
  suggestedInsertionIds?: string[];

  @Metadata({ data: "json, name=tableRows", elemType: shared.TableRow })
  tableRows?: TableRow[];

  @Metadata({ data: "json, name=tableStyle" })
  tableStyle?: TableStyle;
}
