import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";



// BackfillAllStrategy
/** 
 * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
**/
export class BackfillAllStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlExcludedObjects" })
  mysqlExcludedObjects?: MysqlRdbms;

  @SpeakeasyMetadata({ data: "json, name=oracleExcludedObjects" })
  oracleExcludedObjects?: OracleRdbms;

  @SpeakeasyMetadata({ data: "json, name=postgresqlExcludedObjects" })
  postgresqlExcludedObjects?: PostgresqlRdbms;
}
