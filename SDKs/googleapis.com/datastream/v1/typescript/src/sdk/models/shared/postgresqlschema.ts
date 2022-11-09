import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PostgresqlTable } from "./postgresqltable";


// PostgresqlSchema
/** 
 * PostgreSQL schema.
**/
export class PostgresqlSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=postgresqlTables", elemType: shared.PostgresqlTable })
  postgresqlTables?: PostgresqlTable[];

  @Metadata({ data: "json, name=schema" })
  schema?: string;
}
