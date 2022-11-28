import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";
/**
 * Response from a discover request.
**/
export declare class DiscoverConnectionProfileResponse extends SpeakeasyBase {
    mysqlRdbms?: MysqlRdbms;
    oracleRdbms?: OracleRdbms;
    postgresqlRdbms?: PostgresqlRdbms;
}
