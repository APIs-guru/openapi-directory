import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProfileInput } from "./connectionprofile";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
import { PostgresqlRdbms } from "./postgresqlrdbms";
/**
 * Request message for 'discover' ConnectionProfile request.
**/
export declare class DiscoverConnectionProfileRequestInput extends SpeakeasyBase {
    connectionProfile?: ConnectionProfileInput;
    connectionProfileName?: string;
    fullHierarchy?: boolean;
    hierarchyDepth?: number;
    mysqlRdbms?: MysqlRdbms;
    oracleRdbms?: OracleRdbms;
    postgresqlRdbms?: PostgresqlRdbms;
}
