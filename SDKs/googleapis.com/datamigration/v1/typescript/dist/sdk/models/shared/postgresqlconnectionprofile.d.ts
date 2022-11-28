import { SpeakeasyBase } from "../../../internal/utils";
import { SslConfig } from "./sslconfig";
import { SslConfigInput } from "./sslconfig";
export declare enum PostgreSqlConnectionProfileNetworkArchitectureEnum {
    NetworkArchitectureUnspecified = "NETWORK_ARCHITECTURE_UNSPECIFIED",
    NetworkArchitectureOldCsqlProducer = "NETWORK_ARCHITECTURE_OLD_CSQL_PRODUCER",
    NetworkArchitectureNewCsqlProducer = "NETWORK_ARCHITECTURE_NEW_CSQL_PRODUCER"
}
/**
 * Specifies connection parameters required specifically for PostgreSQL databases.
**/
export declare class PostgreSqlConnectionProfile extends SpeakeasyBase {
    cloudSqlId?: string;
    host?: string;
    networkArchitecture?: PostgreSqlConnectionProfileNetworkArchitectureEnum;
    password?: string;
    passwordSet?: boolean;
    port?: number;
    ssl?: SslConfig;
    username?: string;
}
/**
 * Specifies connection parameters required specifically for PostgreSQL databases.
**/
export declare class PostgreSqlConnectionProfileInput extends SpeakeasyBase {
    cloudSqlId?: string;
    host?: string;
    password?: string;
    port?: number;
    ssl?: SslConfigInput;
    username?: string;
}
