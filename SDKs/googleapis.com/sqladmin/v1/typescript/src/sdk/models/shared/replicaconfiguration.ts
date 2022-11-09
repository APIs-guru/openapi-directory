import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MySqlReplicaConfiguration } from "./mysqlreplicaconfiguration";


// ReplicaConfiguration
/** 
 * Read-replica configuration for connecting to the primary instance.
**/
export class ReplicaConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=failoverTarget" })
  failoverTarget?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=mysqlReplicaConfiguration" })
  mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
}
