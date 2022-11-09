import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PostgresqlColumn } from "./postgresqlcolumn";


// PostgresqlTable
/** 
 * PostgreSQL table.
**/
export class PostgresqlTable extends SpeakeasyBase {
  @Metadata({ data: "json, name=postgresqlColumns", elemType: shared.PostgresqlColumn })
  postgresqlColumns?: PostgresqlColumn[];

  @Metadata({ data: "json, name=table" })
  table?: string;
}
