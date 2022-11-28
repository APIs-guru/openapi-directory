import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleChromePolicyVersionsV1NetworkSetting
/** 
 * A network setting contains network configurations.
**/
export class GoogleChromePolicyVersionsV1NetworkSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policySchema" })
  policySchema?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
