import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemoryHashSignature } from "./memoryhashsignature";
import { YaraRuleSignature } from "./yararulesignature";



// ProcessSignature
/** 
 * Indicates what signature matched this process.
**/
export class ProcessSignature extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=memoryHashSignature" })
  memoryHashSignature?: MemoryHashSignature;

  @SpeakeasyMetadata({ data: "json, name=yaraRuleSignature" })
  yaraRuleSignature?: YaraRuleSignature;
}
