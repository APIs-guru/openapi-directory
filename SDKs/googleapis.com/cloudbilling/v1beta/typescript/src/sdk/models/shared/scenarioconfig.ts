import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScenarioConfig
/** 
 * Configuration for a CostScenario. Specifies how costs are calculated.
**/
export class ScenarioConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=estimateDuration" })
  estimateDuration?: string;
}
