import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";



// DiscoverConnectionProfileResponse
/** 
 * Response from a discover request.
**/
export class DiscoverConnectionProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mysqlRdbms" })
  mysqlRdbms?: MysqlRdbms;

  @SpeakeasyMetadata({ data: "json, name=oracleRdbms" })
  oracleRdbms?: OracleRdbms;

  @SpeakeasyMetadata({ data: "json, name=postgresqlRdbms" })
  postgresqlRdbms?: PostgresqlRdbms;
}
