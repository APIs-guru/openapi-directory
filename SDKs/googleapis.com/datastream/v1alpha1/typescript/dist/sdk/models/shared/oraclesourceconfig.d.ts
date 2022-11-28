import { SpeakeasyBase } from "../../../internal/utils";
import { OracleRdbms } from "./oraclerdbms";
/**
 * Oracle data source configuration
**/
export declare class OracleSourceConfig extends SpeakeasyBase {
    allowlist?: OracleRdbms;
    dropLargeObjects?: Map<string, any>;
    rejectlist?: OracleRdbms;
}
