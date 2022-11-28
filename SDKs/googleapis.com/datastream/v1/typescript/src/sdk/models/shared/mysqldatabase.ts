import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlTable } from "./mysqltable";



// MysqlDatabase
/** 
 * MySQL database.
**/
export class MysqlDatabase extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: string;

  @SpeakeasyMetadata({ data: "json, name=mysqlTables", elemType: MysqlTable })
  mysqlTables?: MysqlTable[];
}
