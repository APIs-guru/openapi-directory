import { SpeakeasyBase } from "../../../internal/utils";
import { Commitment } from "./commitment";
import { ScenarioConfig } from "./scenarioconfig";
import { Workload } from "./workload";
/**
 * Encapsulates all the information needed to perform a cost estimate. It includes a specification of the Google Cloud usage whose costs are estimated, and configuration options.
**/
export declare class CostScenario extends SpeakeasyBase {
    commitments?: Commitment[];
    scenarioConfig?: ScenarioConfig;
    workloads?: Workload[];
}
