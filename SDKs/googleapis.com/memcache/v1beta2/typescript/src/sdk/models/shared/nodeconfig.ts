import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NodeConfig
/** 
 * Configuration for a Memcached Node.
**/
export class NodeConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @Metadata({ data: "json, name=memorySizeMb" })
  memorySizeMb?: number;
}
