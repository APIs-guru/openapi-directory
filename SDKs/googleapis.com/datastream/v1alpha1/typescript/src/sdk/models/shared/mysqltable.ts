import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MysqlColumn } from "./mysqlcolumn";


// MysqlTable
/** 
 * MySQL table.
**/
export class MysqlTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlColumns", elemType: shared.MysqlColumn })
  mysqlColumns?: MysqlColumn[];

  @Metadata({ data: "json, name=tableName" })
  tableName?: string;
}
