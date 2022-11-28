import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DemoteMasterMySqlReplicaConfiguration } from "./demotemastermysqlreplicaconfiguration";



// DemoteMasterConfiguration
/** 
 * Read-replica configuration for connecting to the on-premises primary instance.
**/
export class DemoteMasterConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mysqlReplicaConfiguration" })
  mysqlReplicaConfiguration?: DemoteMasterMySqlReplicaConfiguration;
}
