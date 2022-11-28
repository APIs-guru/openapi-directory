import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RenewalSettings
/** 
 * JSON template for a subscription renewal settings.
**/
export class RenewalSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=renewalType" })
  renewalType?: string;
}
