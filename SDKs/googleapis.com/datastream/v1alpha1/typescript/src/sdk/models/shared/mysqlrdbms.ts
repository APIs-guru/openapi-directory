import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MysqlDatabase } from "./mysqldatabase";


// MysqlRdbms
/** 
 * MySQL database structure
**/
export class MysqlRdbms extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlDatabases", elemType: shared.MysqlDatabase })
  mysqlDatabases?: MysqlDatabase[];
}
