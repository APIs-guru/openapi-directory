import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointInfo } from "./endpointinfo";
import { Step } from "./step";
/**
 * Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ```
**/
export declare class Trace extends SpeakeasyBase {
    endpointInfo?: EndpointInfo;
    steps?: Step[];
}
