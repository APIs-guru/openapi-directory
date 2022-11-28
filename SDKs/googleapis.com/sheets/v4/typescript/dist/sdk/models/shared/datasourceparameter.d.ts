import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
/**
 * A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.
**/
export declare class DataSourceParameter extends SpeakeasyBase {
    name?: string;
    namedRangeId?: string;
    range?: GridRange;
}
