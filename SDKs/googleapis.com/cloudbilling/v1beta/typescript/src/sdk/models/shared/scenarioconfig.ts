import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScenarioConfig
/** 
 * Configuration for a CostScenario. Specifies how costs are calculated.
**/
export class ScenarioConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=estimateDuration" })
  estimateDuration?: string;
}
