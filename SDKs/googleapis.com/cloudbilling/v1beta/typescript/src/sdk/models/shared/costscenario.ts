import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Commitment } from "./commitment";
import { ScenarioConfig } from "./scenarioconfig";
import { Workload } from "./workload";



// CostScenario
/** 
 * Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
**/
export class CostScenario extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commitments", elemType: Commitment })
  commitments?: Commitment[];

  @SpeakeasyMetadata({ data: "json, name=scenarioConfig" })
  scenarioConfig?: ScenarioConfig;

  @SpeakeasyMetadata({ data: "json, name=workloads", elemType: Workload })
  workloads?: Workload[];
}
