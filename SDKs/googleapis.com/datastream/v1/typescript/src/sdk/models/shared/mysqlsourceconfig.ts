import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";



// MysqlSourceConfig
/** 
 * MySQL source configuration
**/
export class MysqlSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=excludeObjects" })
  excludeObjects?: MysqlRdbms;

  @SpeakeasyMetadata({ data: "json, name=includeObjects" })
  includeObjects?: MysqlRdbms;

  @SpeakeasyMetadata({ data: "json, name=maxConcurrentCdcTasks" })
  maxConcurrentCdcTasks?: number;
}
