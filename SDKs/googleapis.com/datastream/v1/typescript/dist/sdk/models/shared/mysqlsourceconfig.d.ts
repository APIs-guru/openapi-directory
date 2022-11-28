import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
/**
 * MySQL source configuration
**/
export declare class MysqlSourceConfig extends SpeakeasyBase {
    excludeObjects?: MysqlRdbms;
    includeObjects?: MysqlRdbms;
    maxConcurrentCdcTasks?: number;
}
