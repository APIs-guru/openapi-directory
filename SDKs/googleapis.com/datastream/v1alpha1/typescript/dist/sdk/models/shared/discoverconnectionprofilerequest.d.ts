import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionProfileInput } from "./connectionprofile";
import { MysqlRdbms } from "./mysqlrdbms";
import { OracleRdbms } from "./oraclerdbms";
/**
 * Request message for 'discover' ConnectionProfile request.
**/
export declare class DiscoverConnectionProfileRequestInput extends SpeakeasyBase {
    connectionProfile?: ConnectionProfileInput;
    connectionProfileName?: string;
    mysqlRdbms?: MysqlRdbms;
    oracleRdbms?: OracleRdbms;
    recursionDepth?: number;
    recursive?: boolean;
}
