import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlSourceConfig } from "./mysqlsourceconfig";
import { OracleSourceConfig } from "./oraclesourceconfig";
/**
 * The configuration of the stream source.
**/
export declare class SourceConfig extends SpeakeasyBase {
    mysqlSourceConfig?: MysqlSourceConfig;
    oracleSourceConfig?: OracleSourceConfig;
    sourceConnectionProfileName?: string;
}
