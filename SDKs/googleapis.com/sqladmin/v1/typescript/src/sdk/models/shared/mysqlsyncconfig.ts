import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SyncFlags } from "./syncflags";



// MySqlSyncConfig
/** 
 * MySQL-specific external server sync settings.
**/
export class MySqlSyncConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=initialSyncFlags", elemType: SyncFlags })
  initialSyncFlags?: SyncFlags[];
}
