import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlColumn } from "./postgresqlcolumn";



// PostgresqlTable
/** 
 * PostgreSQL table.
**/
export class PostgresqlTable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postgresqlColumns", elemType: PostgresqlColumn })
  postgresqlColumns?: PostgresqlColumn[];

  @SpeakeasyMetadata({ data: "json, name=table" })
  table?: string;
}
