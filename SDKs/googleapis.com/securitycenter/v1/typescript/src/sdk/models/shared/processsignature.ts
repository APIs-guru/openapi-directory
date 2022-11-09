import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { MemoryHashSignature } from "./memoryhashsignature";
import { YaraRuleSignature } from "./yararulesignature";


// ProcessSignature
/** 
 * Indicates what signature matched this process.
**/
export class ProcessSignature extends SpeakeasyBase {
  @Metadata({ data: "json, name=memoryHashSignature" })
  memoryHashSignature?: MemoryHashSignature;

  @Metadata({ data: "json, name=yaraRuleSignature" })
  yaraRuleSignature?: YaraRuleSignature;
}
