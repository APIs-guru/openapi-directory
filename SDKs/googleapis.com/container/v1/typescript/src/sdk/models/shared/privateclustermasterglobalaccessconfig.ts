import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrivateClusterMasterGlobalAccessConfig
/** 
 * Configuration for controlling master global access settings.
**/
export class PrivateClusterMasterGlobalAccessConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
