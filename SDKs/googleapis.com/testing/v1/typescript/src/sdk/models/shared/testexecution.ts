import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { Shard } from "./shard";
import { TestDetails } from "./testdetails";
import { TestSpecification } from "./testspecification";
import { ToolResultsStep } from "./toolresultsstep";


export enum TestExecutionStateEnum {
    TestStateUnspecified = "TEST_STATE_UNSPECIFIED",
    Validating = "VALIDATING",
    Pending = "PENDING",
    Running = "RUNNING",
    Finished = "FINISHED",
    Error = "ERROR",
    UnsupportedEnvironment = "UNSUPPORTED_ENVIRONMENT",
    IncompatibleEnvironment = "INCOMPATIBLE_ENVIRONMENT",
    IncompatibleArchitecture = "INCOMPATIBLE_ARCHITECTURE",
    Cancelled = "CANCELLED",
    Invalid = "INVALID"
}


// TestExecution
/** 
 * A single test executed in a single environment.
**/
export class TestExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: Environment;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=matrixId" })
  matrixId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=shard" })
  shard?: Shard;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: TestExecutionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=testDetails" })
  testDetails?: TestDetails;

  @SpeakeasyMetadata({ data: "json, name=testSpecification" })
  testSpecification?: TestSpecification;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=toolResultsStep" })
  toolResultsStep?: ToolResultsStep;
}
