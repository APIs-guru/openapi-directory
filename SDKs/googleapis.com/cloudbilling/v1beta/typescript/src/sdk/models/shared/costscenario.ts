import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Commitment } from "./commitment";
import { ScenarioConfig } from "./scenarioconfig";
import { Workload } from "./workload";


// CostScenario
/** 
 * Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
**/
export class CostScenario extends SpeakeasyBase {
  @Metadata({ data: "json, name=commitments", elemType: shared.Commitment })
  commitments?: Commitment[];

  @Metadata({ data: "json, name=scenarioConfig" })
  scenarioConfig?: ScenarioConfig;

  @Metadata({ data: "json, name=workloads", elemType: shared.Workload })
  workloads?: Workload[];
}
