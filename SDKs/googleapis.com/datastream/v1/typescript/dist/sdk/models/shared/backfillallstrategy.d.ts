import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";
/**
 * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
**/
export declare class BackfillAllStrategy extends SpeakeasyBase {
    mysqlExcludedObjects?: MysqlRdbms;
    oracleExcludedObjects?: OracleRdbms;
    postgresqlExcludedObjects?: PostgresqlRdbms;
}
