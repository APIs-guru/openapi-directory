import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";



// SearchDeveloperMetadataRequest
/** 
 * A request to retrieve all developer metadata matching the set of specified criteria.
**/
export class SearchDeveloperMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataFilters", elemType: DataFilter })
  dataFilters?: DataFilter[];
}
