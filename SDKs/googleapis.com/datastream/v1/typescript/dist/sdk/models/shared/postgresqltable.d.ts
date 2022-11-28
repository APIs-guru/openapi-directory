import { SpeakeasyBase } from "../../../internal/utils";
import { PostgresqlColumn } from "./postgresqlcolumn";
/**
 * PostgreSQL table.
**/
export declare class PostgresqlTable extends SpeakeasyBase {
    postgresqlColumns?: PostgresqlColumn[];
    table?: string;
}
