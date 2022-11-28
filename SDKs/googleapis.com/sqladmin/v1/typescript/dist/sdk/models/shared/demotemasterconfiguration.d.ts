import { SpeakeasyBase } from "../../../internal/utils";
import { DemoteMasterMySqlReplicaConfiguration } from "./demotemastermysqlreplicaconfiguration";
/**
 * Read-replica configuration for connecting to the on-premises primary instance.
**/
export declare class DemoteMasterConfiguration extends SpeakeasyBase {
    kind?: string;
    mysqlReplicaConfiguration?: DemoteMasterMySqlReplicaConfiguration;
}
