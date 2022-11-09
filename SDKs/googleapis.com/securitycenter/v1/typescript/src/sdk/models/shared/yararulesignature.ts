import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// YaraRuleSignature
/** 
 * A signature corresponding to a YARA rule.
**/
export class YaraRuleSignature extends SpeakeasyBase {
  @Metadata({ data: "json, name=yaraRule" })
  yaraRule?: string;
}
