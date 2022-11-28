import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShieldedInstanceConfig
/** 
 * A set of Shielded Instance options.
**/
export class ShieldedInstanceConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableSecureBoot" })
  enableSecureBoot?: boolean;
}
