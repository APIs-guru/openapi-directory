import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataFilter } from "./datafilter";


// GetSpreadsheetByDataFilterRequest
/** 
 * The request for retrieving a Spreadsheet.
**/
export class GetSpreadsheetByDataFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFilters", elemType: shared.DataFilter })
  dataFilters?: DataFilter[];

  @Metadata({ data: "json, name=includeGridData" })
  includeGridData?: boolean;
}
