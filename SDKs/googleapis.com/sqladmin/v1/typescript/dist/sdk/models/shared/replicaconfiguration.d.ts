import { SpeakeasyBase } from "../../../internal/utils";
import { MySqlReplicaConfiguration } from "./mysqlreplicaconfiguration";
/**
 * Read-replica configuration for connecting to the primary instance.
**/
export declare class ReplicaConfiguration extends SpeakeasyBase {
    failoverTarget?: boolean;
    kind?: string;
    mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
}
