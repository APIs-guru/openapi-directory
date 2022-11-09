import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleChromePolicyVersionsV1NetworkSetting
/** 
 * A network setting contains network configurations.
**/
export class GoogleChromePolicyVersionsV1NetworkSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=policySchema" })
  policySchema?: string;

  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}
