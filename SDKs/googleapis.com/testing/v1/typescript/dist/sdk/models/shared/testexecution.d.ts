import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
import { Shard } from "./shard";
import { TestDetails } from "./testdetails";
import { TestSpecification } from "./testspecification";
import { ToolResultsStep } from "./toolresultsstep";
export declare enum TestExecutionStateEnum {
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
/**
 * A single test executed in a single environment.
**/
export declare class TestExecution extends SpeakeasyBase {
    environment?: Environment;
    id?: string;
    matrixId?: string;
    projectId?: string;
    shard?: Shard;
    state?: TestExecutionStateEnum;
    testDetails?: TestDetails;
    testSpecification?: TestSpecification;
    timestamp?: string;
    toolResultsStep?: ToolResultsStep;
}
