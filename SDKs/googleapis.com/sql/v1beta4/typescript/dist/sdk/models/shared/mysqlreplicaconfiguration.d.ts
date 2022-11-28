import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Read-replica configuration specific to MySQL databases.
**/
export declare class MySqlReplicaConfiguration extends SpeakeasyBase {
    caCertificate?: string;
    clientCertificate?: string;
    clientKey?: string;
    connectRetryInterval?: number;
    dumpFilePath?: string;
    kind?: string;
    masterHeartbeatPeriod?: string;
    password?: string;
    sslCipher?: string;
    username?: string;
    verifyServerCertificate?: boolean;
}
