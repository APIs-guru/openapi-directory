import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// YaraRuleSignature
/** 
 * A signature corresponding to a YARA rule.
**/
export class YaraRuleSignature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=yaraRule" })
  yaraRule?: string;
}
