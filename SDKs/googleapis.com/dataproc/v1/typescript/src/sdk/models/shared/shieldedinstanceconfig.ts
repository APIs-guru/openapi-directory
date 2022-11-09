import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShieldedInstanceConfig
/** 
 * Shielded Instance Config for clusters using Compute Engine Shielded VMs (https://cloud.google.com/security/shielded-cloud/shielded-vm).
**/
export class ShieldedInstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableIntegrityMonitoring" })
  enableIntegrityMonitoring?: boolean;

  @Metadata({ data: "json, name=enableSecureBoot" })
  enableSecureBoot?: boolean;

  @Metadata({ data: "json, name=enableVtpm" })
  enableVtpm?: boolean;
}
