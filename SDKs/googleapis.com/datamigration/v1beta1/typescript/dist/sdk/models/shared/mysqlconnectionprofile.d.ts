import { SpeakeasyBase } from "../../../internal/utils";
import { SslConfigInput } from "./sslconfig";
import { SslConfig } from "./sslconfig";
/**
 * Specifies connection parameters required specifically for MySQL databases.
**/
export declare class MySqlConnectionProfileInput extends SpeakeasyBase {
    cloudSqlId?: string;
    host?: string;
    password?: string;
    port?: number;
    ssl?: SslConfigInput;
    username?: string;
}
/**
 * Specifies connection parameters required specifically for MySQL databases.
**/
export declare class MySqlConnectionProfile extends SpeakeasyBase {
    cloudSqlId?: string;
    host?: string;
    password?: string;
    passwordSet?: boolean;
    port?: number;
    ssl?: SslConfig;
    username?: string;
}
