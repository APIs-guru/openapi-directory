import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SyncFlags } from "./syncflags";


// MySqlSyncConfig
/** 
 * MySQL-specific external server sync settings.
**/
export class MySqlSyncConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=initialSyncFlags", elemType: shared.SyncFlags })
  initialSyncFlags?: SyncFlags[];
}
