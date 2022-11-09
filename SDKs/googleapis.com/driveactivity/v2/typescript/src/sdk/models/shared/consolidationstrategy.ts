import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ConsolidationStrategy
/** 
 * How the individual activities are consolidated. A set of activities may be consolidated into one combined activity if they are related in some way, such as one actor performing the same action on multiple targets, or multiple actors performing the same action on a single target. The strategy defines the rules for which activities are related.
**/
export class ConsolidationStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=legacy" })
  legacy?: Map<string, any>;

  @Metadata({ data: "json, name=none" })
  none?: Map<string, any>;
}
