import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { MysqlRdbms } from "./mysqlrdbms";


// MysqlSourceConfig
/** 
 * MySQL source configuration
**/
export class MysqlSourceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowlist" })
  allowlist?: MysqlRdbms;

  @Metadata({ data: "json, name=rejectlist" })
  rejectlist?: MysqlRdbms;
}
