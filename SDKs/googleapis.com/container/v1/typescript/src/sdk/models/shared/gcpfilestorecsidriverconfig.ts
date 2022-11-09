import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GcpFilestoreCsiDriverConfig
/** 
 * Configuration for the GCP Filestore CSI driver.
**/
export class GcpFilestoreCsiDriverConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
