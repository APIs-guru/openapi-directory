import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";



// GetSpreadsheetByDataFilterRequest
/** 
 * The request for retrieving a Spreadsheet.
**/
export class GetSpreadsheetByDataFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilters", elemType: DataFilter })
  dataFilters?: DataFilter[];

  @SpeakeasyMetadata({ data: "json, name=includeGridData" })
  includeGridData?: boolean;
}
