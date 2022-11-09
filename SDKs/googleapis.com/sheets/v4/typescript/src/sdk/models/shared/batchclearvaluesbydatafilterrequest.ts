import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataFilter } from "./datafilter";


// BatchClearValuesByDataFilterRequest
/** 
 * The request for clearing more than one range selected by a DataFilter in a spreadsheet.
**/
export class BatchClearValuesByDataFilterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFilters", elemType: shared.DataFilter })
  dataFilters?: DataFilter[];
}
