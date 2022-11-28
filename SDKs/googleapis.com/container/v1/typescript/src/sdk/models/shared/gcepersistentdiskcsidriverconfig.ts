import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcePersistentDiskCsiDriverConfig
/** 
 * Configuration for the Compute Engine PD CSI driver.
**/
export class GcePersistentDiskCsiDriverConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
