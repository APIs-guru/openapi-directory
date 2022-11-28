import { SpeakeasyBase } from "../../../internal/utils";
import { OracleTable } from "./oracletable";
/**
 * Oracle schema.
**/
export declare class OracleSchema extends SpeakeasyBase {
    oracleTables?: OracleTable[];
    schemaName?: string;
}
