import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlDatabase } from "./mysqldatabase";



// MysqlRdbms
/** 
 * MySQL database structure
**/
export class MysqlRdbms extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlDatabases", elemType: MysqlDatabase })
  mysqlDatabases?: MysqlDatabase[];
}
