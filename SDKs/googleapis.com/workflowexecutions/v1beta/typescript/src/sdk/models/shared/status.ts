import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Step } from "./step";



// Status
/** 
 * Represents the current status of this execution.
**/
export class Status extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currentSteps", elemType: Step })
  currentSteps?: Step[];
}
