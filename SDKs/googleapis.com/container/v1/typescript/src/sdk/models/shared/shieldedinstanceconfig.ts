import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShieldedInstanceConfig
/** 
 * A set of Shielded Instance options.
**/
export class ShieldedInstanceConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableIntegrityMonitoring" })
  enableIntegrityMonitoring?: boolean;

  @Metadata({ data: "json, name=enableSecureBoot" })
  enableSecureBoot?: boolean;
}
