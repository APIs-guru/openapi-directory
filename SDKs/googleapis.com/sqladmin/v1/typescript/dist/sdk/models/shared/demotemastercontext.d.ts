import { SpeakeasyBase } from "../../../internal/utils";
import { DemoteMasterConfiguration } from "./demotemasterconfiguration";
/**
 * Database instance demote primary instance context.
**/
export declare class DemoteMasterContext extends SpeakeasyBase {
    kind?: string;
    masterInstanceName?: string;
    replicaConfiguration?: DemoteMasterConfiguration;
    skipReplicationSetup?: boolean;
    verifyGtidConsistency?: boolean;
}
