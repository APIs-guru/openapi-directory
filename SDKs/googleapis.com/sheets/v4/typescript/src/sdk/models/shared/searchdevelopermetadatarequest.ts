import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DataFilter } from "./datafilter";


// SearchDeveloperMetadataRequest
/** 
 * A request to retrieve all developer metadata matching the set of specified criteria.
**/
export class SearchDeveloperMetadataRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataFilters", elemType: shared.DataFilter })
  dataFilters?: DataFilter[];
}
