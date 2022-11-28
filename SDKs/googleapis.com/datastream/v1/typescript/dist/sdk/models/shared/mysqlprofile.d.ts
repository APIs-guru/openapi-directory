import { SpeakeasyBase } from "../../../internal/utils";
import { MysqlSslConfigInput } from "./mysqlsslconfig";
import { MysqlSslConfig } from "./mysqlsslconfig";
/**
 * MySQL database profile.
**/
export declare class MysqlProfileInput extends SpeakeasyBase {
    hostname?: string;
    password?: string;
    port?: number;
    sslConfig?: MysqlSslConfigInput;
    username?: string;
}
/**
 * MySQL database profile.
**/
export declare class MysqlProfile extends SpeakeasyBase {
    hostname?: string;
    password?: string;
    port?: number;
    sslConfig?: MysqlSslConfig;
    username?: string;
}
