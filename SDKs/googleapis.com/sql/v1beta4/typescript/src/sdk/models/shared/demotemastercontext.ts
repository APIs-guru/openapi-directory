import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DemoteMasterConfiguration } from "./demotemasterconfiguration";


// DemoteMasterContext
/** 
 * Database instance demote primary instance context.
**/
export class DemoteMasterContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=masterInstanceName" })
  masterInstanceName?: string;

  @Metadata({ data: "json, name=replicaConfiguration" })
  replicaConfiguration?: DemoteMasterConfiguration;

  @Metadata({ data: "json, name=skipReplicationSetup" })
  skipReplicationSetup?: boolean;

  @Metadata({ data: "json, name=verifyGtidConsistency" })
  verifyGtidConsistency?: boolean;
}
