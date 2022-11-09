import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShieldedInstanceConfig
/** 
 * A set of Shielded Instance options. Check [Images using supported Shielded VM features] Not all combinations are valid.
**/
export class ShieldedInstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableIntegrityMonitoring" })
  enableIntegrityMonitoring?: boolean;

  @Metadata({ data: "json, name=enableSecureBoot" })
  enableSecureBoot?: boolean;

  @Metadata({ data: "json, name=enableVtpm" })
  enableVtpm?: boolean;
}
