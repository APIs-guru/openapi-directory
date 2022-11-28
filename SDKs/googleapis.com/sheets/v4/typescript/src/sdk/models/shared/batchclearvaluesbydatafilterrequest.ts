import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";



// BatchClearValuesByDataFilterRequest
/** 
 * The request for clearing more than one range selected by a DataFilter in a spreadsheet.
**/
export class BatchClearValuesByDataFilterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilters", elemType: DataFilter })
  dataFilters?: DataFilter[];
}
