import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EndpointInfo } from "./endpointinfo";
import { Step } from "./step";


// Trace
/** 
 * Trace represents one simulated packet forwarding path. * Each trace contains multiple ordered steps. * Each step is in a particular state with associated configuration. * State is categorized as final or non-final states. * Each final state has a reason associated. * Each trace must end with a final state (the last step). ``` |---------------------Trace----------------------| Step1(State) Step2(State) --- StepN(State(final)) ```
**/
export class Trace extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointInfo" })
  endpointInfo?: EndpointInfo;

  @Metadata({ data: "json, name=steps", elemType: shared.Step })
  steps?: Step[];
}
