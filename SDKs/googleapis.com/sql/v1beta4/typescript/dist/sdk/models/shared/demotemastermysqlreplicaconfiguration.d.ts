import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Read-replica configuration specific to MySQL databases.
**/
export declare class DemoteMasterMySqlReplicaConfiguration extends SpeakeasyBase {
    caCertificate?: string;
    clientCertificate?: string;
    clientKey?: string;
    kind?: string;
    password?: string;
    username?: string;
}
