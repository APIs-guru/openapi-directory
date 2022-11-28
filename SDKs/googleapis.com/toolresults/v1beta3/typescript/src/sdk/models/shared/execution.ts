import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Timestamp } from "./timestamp";
import { Outcome } from "./outcome";
import { Specification } from "./specification";


export enum ExecutionStateEnum {
    UnknownState = "unknownState",
    Pending = "pending",
    InProgress = "inProgress",
    Complete = "complete"
}


// Execution
/** 
 * An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
**/
export class Execution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completionTime" })
  completionTime?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=creationTime" })
  creationTime?: Timestamp;

  @SpeakeasyMetadata({ data: "json, name=dimensionDefinitions" })
  dimensionDefinitions?: Map<string, any>[];

  @SpeakeasyMetadata({ data: "json, name=executionId" })
  executionId?: string;

  @SpeakeasyMetadata({ data: "json, name=outcome" })
  outcome?: Outcome;

  @SpeakeasyMetadata({ data: "json, name=specification" })
  specification?: Specification;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=testExecutionMatrixId" })
  testExecutionMatrixId?: string;
}
