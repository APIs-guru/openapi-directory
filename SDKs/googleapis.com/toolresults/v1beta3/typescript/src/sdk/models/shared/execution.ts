import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Timestamp } from "./timestamp";
import { Timestamp } from "./timestamp";
import { Outcome } from "./outcome";
import { Specification } from "./specification";

export enum ExecutionStateEnum {
    UnknownState = "unknownState"
,    Pending = "pending"
,    InProgress = "inProgress"
,    Complete = "complete"
}


// Execution
/** 
 * An Execution represents a collection of Steps. For instance, it could represent: - a mobile test executed across a range of device configurations - a jenkins job with a build step followed by a test step The maximum size of an execution message is 1 MiB. An Execution can be updated until its state is set to COMPLETE at which point it becomes immutable.
**/
export class Execution extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionTime" })
  completionTime?: Timestamp;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Timestamp;

  @Metadata({ data: "json, name=dimensionDefinitions" })
  dimensionDefinitions?: Map<string, any>[];

  @Metadata({ data: "json, name=executionId" })
  executionId?: string;

  @Metadata({ data: "json, name=outcome" })
  outcome?: Outcome;

  @Metadata({ data: "json, name=specification" })
  specification?: Specification;

  @Metadata({ data: "json, name=state" })
  state?: ExecutionStateEnum;

  @Metadata({ data: "json, name=testExecutionMatrixId" })
  testExecutionMatrixId?: string;
}
