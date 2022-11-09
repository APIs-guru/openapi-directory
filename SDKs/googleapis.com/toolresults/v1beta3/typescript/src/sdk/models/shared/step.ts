import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Timestamp } from "./timestamp";
import { Timestamp } from "./timestamp";
import { Duration } from "./duration";
import { StepDimensionValueEntry } from "./stepdimensionvalueentry";
import { StepLabelsEntry } from "./steplabelsentry";
import { MultiStep } from "./multistep";
import { Outcome } from "./outcome";
import { Duration } from "./duration";
import { TestExecutionStep } from "./testexecutionstep";
import { ToolExecutionStep } from "./toolexecutionstep";

export enum StepStateEnum {
    UnknownState = "unknownState"
,    Pending = "pending"
,    InProgress = "inProgress"
,    Complete = "complete"
}


// Step
/** 
 * A Step represents a single operation performed as part of Execution. A step can be used to represent the execution of a tool ( for example a test runner execution or an execution of a compiler). Steps can overlap (for instance two steps might have the same start time if some operations are done in parallel). Here is an example, let's consider that we have a continuous build is executing a test runner for each iteration. The workflow would look like: - user creates a Execution with id 1 - user creates an TestExecutionStep with id 100 for Execution 1 - user update TestExecutionStep with id 100 to add a raw xml log + the service parses the xml logs and returns a TestExecutionStep with updated TestResult(s). - user update the status of TestExecutionStep with id 100 to COMPLETE A Step can be updated until its state is set to COMPLETE at which points it becomes immutable. Next tag: 27
**/
export class Step extends SpeakeasyBase {
  @Metadata({ data: "json, name=completionTime" })
  completionTime?: Timestamp;

  @Metadata({ data: "json, name=creationTime" })
  creationTime?: Timestamp;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=deviceUsageDuration" })
  deviceUsageDuration?: Duration;

  @Metadata({ data: "json, name=dimensionValue", elemType: shared.StepDimensionValueEntry })
  dimensionValue?: StepDimensionValueEntry[];

  @Metadata({ data: "json, name=hasImages" })
  hasImages?: boolean;

  @Metadata({ data: "json, name=labels", elemType: shared.StepLabelsEntry })
  labels?: StepLabelsEntry[];

  @Metadata({ data: "json, name=multiStep" })
  multiStep?: MultiStep;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=outcome" })
  outcome?: Outcome;

  @Metadata({ data: "json, name=runDuration" })
  runDuration?: Duration;

  @Metadata({ data: "json, name=state" })
  state?: StepStateEnum;

  @Metadata({ data: "json, name=stepId" })
  stepId?: string;

  @Metadata({ data: "json, name=testExecutionStep" })
  testExecutionStep?: TestExecutionStep;

  @Metadata({ data: "json, name=toolExecutionStep" })
  toolExecutionStep?: ToolExecutionStep;
}
