import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShieldedInstanceConfig
/** 
 * A set of Shielded Instance options. Check [Images using supported Shielded VM features] Not all combinations are valid.
**/
export class ShieldedInstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableIntegrityMonitoring" })
  enableIntegrityMonitoring?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableSecureBoot" })
  enableSecureBoot?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableVtpm" })
  enableVtpm?: boolean;
}
