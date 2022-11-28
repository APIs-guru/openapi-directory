import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GcpFilestoreCsiDriverConfig
/** 
 * Configuration for the GCP Filestore CSI driver.
**/
export class GcpFilestoreCsiDriverConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
