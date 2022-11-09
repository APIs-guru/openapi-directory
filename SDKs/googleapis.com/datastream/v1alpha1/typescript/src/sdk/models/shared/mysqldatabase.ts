import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MysqlTable } from "./mysqltable";


// MysqlDatabase
/** 
 * MySQL database.
**/
export class MysqlDatabase extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseName" })
  databaseName?: string;

  @Metadata({ data: "json, name=mysqlTables", elemType: shared.MysqlTable })
  mysqlTables?: MysqlTable[];
}
