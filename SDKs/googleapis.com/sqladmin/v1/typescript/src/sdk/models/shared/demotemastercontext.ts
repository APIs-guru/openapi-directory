import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DemoteMasterConfiguration } from "./demotemasterconfiguration";



// DemoteMasterContext
/** 
 * Database instance demote primary instance context.
**/
export class DemoteMasterContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=masterInstanceName" })
  masterInstanceName?: string;

  @SpeakeasyMetadata({ data: "json, name=replicaConfiguration" })
  replicaConfiguration?: DemoteMasterConfiguration;

  @SpeakeasyMetadata({ data: "json, name=skipReplicationSetup" })
  skipReplicationSetup?: boolean;

  @SpeakeasyMetadata({ data: "json, name=verifyGtidConsistency" })
  verifyGtidConsistency?: boolean;
}
