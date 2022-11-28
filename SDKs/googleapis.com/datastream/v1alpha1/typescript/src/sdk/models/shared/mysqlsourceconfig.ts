import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";



// MysqlSourceConfig
/** 
 * MySQL source configuration
**/
export class MysqlSourceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowlist" })
  allowlist?: MysqlRdbms;

  @SpeakeasyMetadata({ data: "json, name=rejectlist" })
  rejectlist?: MysqlRdbms;
}
