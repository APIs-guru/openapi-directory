import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlTable } from "./postgresqltable";



// PostgresqlSchema
/** 
 * PostgreSQL schema.
**/
export class PostgresqlSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=postgresqlTables", elemType: PostgresqlTable })
  postgresqlTables?: PostgresqlTable[];

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;
}
