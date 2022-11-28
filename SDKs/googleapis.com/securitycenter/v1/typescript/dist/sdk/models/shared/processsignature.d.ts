import { SpeakeasyBase } from "../../../internal/utils";
import { MemoryHashSignature } from "./memoryhashsignature";
import { YaraRuleSignature } from "./yararulesignature";
/**
 * Indicates what signature matched this process.
**/
export declare class ProcessSignature extends SpeakeasyBase {
    memoryHashSignature?: MemoryHashSignature;
    yaraRuleSignature?: YaraRuleSignature;
}
