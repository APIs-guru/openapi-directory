import { SpeakeasyBase } from "../../../internal/utils";
import { QueryPlan } from "./queryplan";
/**
 * Additional statistics about a ResultSet or PartialResultSet.
**/
export declare class ResultSetStats extends SpeakeasyBase {
    queryPlan?: QueryPlan;
    queryStats?: Map<string, any>;
    rowCountExact?: string;
    rowCountLowerBound?: string;
}
