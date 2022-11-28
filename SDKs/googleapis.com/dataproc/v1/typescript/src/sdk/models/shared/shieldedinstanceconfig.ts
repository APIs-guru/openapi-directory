import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShieldedInstanceConfig
/** 
 * Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).
**/
export class ShieldedInstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableIntegrityMonitoring" })
  enableIntegrityMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableSecureBoot" })
  enableSecureBoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableVtpm" })
  enableVtpm?: boolean;
}
