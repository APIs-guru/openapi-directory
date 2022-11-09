import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DemoteMasterMySqlReplicaConfiguration } from "./demotemastermysqlreplicaconfiguration";


// DemoteMasterConfiguration
/** 
 * Read-replica configuration for connecting to the on-premises primary instance.
**/
export class DemoteMasterConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mysqlReplicaConfiguration" })
  mysqlReplicaConfiguration?: DemoteMasterMySqlReplicaConfiguration;
}
