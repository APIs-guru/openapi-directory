import { SpeakeasyBase } from "../../../internal/utils";
import { DataSourceColumnReference } from "./datasourcecolumnreference";
/**
 * A column in a data source.
**/
export declare class DataSourceColumn extends SpeakeasyBase {
    formula?: string;
    reference?: DataSourceColumnReference;
}
