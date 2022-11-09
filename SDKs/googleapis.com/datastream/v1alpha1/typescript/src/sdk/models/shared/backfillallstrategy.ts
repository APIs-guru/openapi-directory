import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";


// BackfillAllStrategy
/** 
 * Backfill strategy to automatically backfill the Stream's objects. Specific objects can be excluded.
**/
export class BackfillAllStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlExcludedObjects" })
  mysqlExcludedObjects?: MysqlRdbms;

  @Metadata({ data: "json, name=oracleExcludedObjects" })
  oracleExcludedObjects?: OracleRdbms;
}
