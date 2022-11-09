import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { MysqlRdbms } from "./mysqlrdbms";


// MysqlSourceConfig
/** 
 * MySQL source configuration
**/
export class MysqlSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludeObjects" })
  excludeObjects?: MysqlRdbms;

  @Metadata({ data: "json, name=includeObjects" })
  includeObjects?: MysqlRdbms;

  @Metadata({ data: "json, name=maxConcurrentCdcTasks" })
  maxConcurrentCdcTasks?: number;
}
