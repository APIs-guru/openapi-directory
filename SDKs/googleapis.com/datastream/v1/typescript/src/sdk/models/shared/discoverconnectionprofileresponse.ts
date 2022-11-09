import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";


// DiscoverConnectionProfileResponse
/** 
 * Response from a discover request.
**/
export class DiscoverConnectionProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=mysqlRdbms" })
  mysqlRdbms?: MysqlRdbms;

  @Metadata({ data: "json, name=oracleRdbms" })
  oracleRdbms?: OracleRdbms;

  @Metadata({ data: "json, name=postgresqlRdbms" })
  postgresqlRdbms?: PostgresqlRdbms;
}
