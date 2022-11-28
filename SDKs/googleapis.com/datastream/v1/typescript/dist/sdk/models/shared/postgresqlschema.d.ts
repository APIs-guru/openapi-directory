import { SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlTable } from "./postgresqltable";
/**
 * PostgreSQL schema.
**/
export declare class PostgresqlSchema extends SpeakeasyBase {
    postgresqlTables?: PostgresqlTable[];
    schema?: string;
}
