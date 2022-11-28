import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MySqlReplicaConfiguration } from "./mysqlreplicaconfiguration";



// ReplicaConfiguration
/** 
 * Read-replica configuration for connecting to the primary instance.
**/
export class ReplicaConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failoverTarget" })
  failoverTarget?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=mysqlReplicaConfiguration" })
  mysqlReplicaConfiguration?: MySqlReplicaConfiguration;
}
