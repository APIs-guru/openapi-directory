import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlColumn } from "./mysqlcolumn";



// MysqlTable
/** 
 * MySQL table.
**/
export class MysqlTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlColumns", elemType: MysqlColumn })
  mysqlColumns?: MysqlColumn[];

  @SpeakeasyMetadata({ data: "json, name=tableName" })
  tableName?: string;
}
