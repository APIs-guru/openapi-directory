import { SpeakeasyBase } from "../../../internal/utils";
import { DataFilter } from "./datafilter";
/**
 * A request to retrieve all developer metadata matching the set of specified criteria.
**/
export declare class SearchDeveloperMetadataRequest extends SpeakeasyBase {
    dataFilters?: DataFilter[];
}
