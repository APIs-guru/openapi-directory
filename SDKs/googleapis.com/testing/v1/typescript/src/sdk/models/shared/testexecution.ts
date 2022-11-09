import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Environment } from "./environment";
import { Shard } from "./shard";
import { TestDetails } from "./testdetails";
import { TestSpecification } from "./testspecification";
import { ToolResultsStep } from "./toolresultsstep";

export enum TestExecutionStateEnum {
    TestStateUnspecified = "TEST_STATE_UNSPECIFIED"
,    Validating = "VALIDATING"
,    Pending = "PENDING"
,    Running = "RUNNING"
,    Finished = "FINISHED"
,    Error = "ERROR"
,    UnsupportedEnvironment = "UNSUPPORTED_ENVIRONMENT"
,    IncompatibleEnvironment = "INCOMPATIBLE_ENVIRONMENT"
,    IncompatibleArchitecture = "INCOMPATIBLE_ARCHITECTURE"
,    Cancelled = "CANCELLED"
,    Invalid = "INVALID"
}


// TestExecution
/** 
 * A single test executed in a single environment.
**/
export class TestExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=environment" })
  environment?: Environment;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=matrixId" })
  matrixId?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=shard" })
  shard?: Shard;

  @Metadata({ data: "json, name=state" })
  state?: TestExecutionStateEnum;

  @Metadata({ data: "json, name=testDetails" })
  testDetails?: TestDetails;

  @Metadata({ data: "json, name=testSpecification" })
  testSpecification?: TestSpecification;

  @Metadata({ data: "json, name=timestamp" })
  timestamp?: string;

  @Metadata({ data: "json, name=toolResultsStep" })
  toolResultsStep?: ToolResultsStep;
}
