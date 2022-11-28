import { SpeakeasyBase } from "../../../internal/utils";
import { OracleColumn } from "./oraclecolumn";
/**
 * Oracle table.
**/
export declare class OracleTable extends SpeakeasyBase {
    oracleColumns?: OracleColumn[];
    table?: string;
}
