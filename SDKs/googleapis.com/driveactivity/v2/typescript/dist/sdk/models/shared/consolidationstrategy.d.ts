import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How the individual activities are consolidated. A set of activities may be consolidated into one combined activity if they are related in some way, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.
**/
export declare class ConsolidationStrategy extends SpeakeasyBase {
    legacy?: Map<string, any>;
    none?: Map<string, any>;
}
