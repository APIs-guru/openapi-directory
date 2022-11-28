import { SpeakeasyBase } from "../../../internal/utils";
import { OracleRdbms } from "./oraclerdbms";
/**
 * Oracle data source configuration
**/
export declare class OracleSourceConfig extends SpeakeasyBase {
    dropLargeObjects?: Map<string, any>;
    excludeObjects?: OracleRdbms;
    includeObjects?: OracleRdbms;
    maxConcurrentCdcTasks?: number;
    streamLargeObjects?: Map<string, any>;
}
