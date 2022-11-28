import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Oracle database profile.
**/
export declare class OracleProfile extends SpeakeasyBase {
    connectionAttributes?: Map<string, string>;
    databaseService?: string;
    hostname?: string;
    password?: string;
    port?: number;
    username?: string;
}
