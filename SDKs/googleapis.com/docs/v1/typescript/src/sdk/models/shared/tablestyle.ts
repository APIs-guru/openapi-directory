import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TableColumnProperties } from "./tablecolumnproperties";


// TableStyle
/** 
 * Styles that apply to a table.
**/
export class TableStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=tableColumnProperties", elemType: shared.TableColumnProperties })
  tableColumnProperties?: TableColumnProperties[];
}
