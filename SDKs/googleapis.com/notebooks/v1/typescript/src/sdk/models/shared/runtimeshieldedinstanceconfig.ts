import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RuntimeShieldedInstanceConfig
/** 
 * A set of Shielded Instance options. Check [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid.
**/
export class RuntimeShieldedInstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableIntegrityMonitoring" })
  enableIntegrityMonitoring?: boolean;

  @Metadata({ data: "json, name=enableSecureBoot" })
  enableSecureBoot?: boolean;

  @Metadata({ data: "json, name=enableVtpm" })
  enableVtpm?: boolean;
}
