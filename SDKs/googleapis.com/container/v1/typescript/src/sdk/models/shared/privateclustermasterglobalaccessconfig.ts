import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrivateClusterMasterGlobalAccessConfig
/** 
 * Configuration for controlling master global access settings.
**/
export class PrivateClusterMasterGlobalAccessConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
