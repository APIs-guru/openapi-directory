import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcePersistentDiskCsiDriverConfig
/** 
 * Configuration for the Compute Engine PD CSI driver.
**/
export class GcePersistentDiskCsiDriverConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
