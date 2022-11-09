import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RenewalSettings
/** 
 * JSON template for a subscription renewal settings.
**/
export class RenewalSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=renewalType" })
  renewalType?: string;
}
