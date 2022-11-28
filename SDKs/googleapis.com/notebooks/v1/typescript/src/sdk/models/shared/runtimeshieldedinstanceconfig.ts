import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RuntimeShieldedInstanceConfig
/** 
 * A set of Shielded Instance options. Check [Images using supported Shielded VM features](https://cloud.google.com/compute/docs/instances/modifying-shielded-vm). Not all combinations are valid.
**/
export class RuntimeShieldedInstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableIntegrityMonitoring" })
  enableIntegrityMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableSecureBoot" })
  enableSecureBoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableVtpm" })
  enableVtpm?: boolean;
}
