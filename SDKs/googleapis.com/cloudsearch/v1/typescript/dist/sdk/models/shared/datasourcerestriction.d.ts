import { SpeakeasyBase } from "../../../internal/utils";
import { FilterOptions } from "./filteroptions";
import { Source } from "./source";
/**
 * Restriction on Datasource.
**/
export declare class DataSourceRestriction extends SpeakeasyBase {
    filterOptions?: FilterOptions[];
    source?: Source;
}
