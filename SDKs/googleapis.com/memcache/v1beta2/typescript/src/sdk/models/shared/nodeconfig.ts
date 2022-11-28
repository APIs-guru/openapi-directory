import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NodeConfig
/** 
 * Configuration for a Memcached Node.
**/
export class NodeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpuCount" })
  cpuCount?: number;

  @SpeakeasyMetadata({ data: "json, name=memorySizeMb" })
  memorySizeMb?: number;
}
