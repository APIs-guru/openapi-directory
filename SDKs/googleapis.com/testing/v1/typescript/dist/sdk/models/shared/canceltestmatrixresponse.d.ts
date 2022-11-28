import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CancelTestMatrixResponseTestStateEnum {
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
 * Response containing the current state of the specified test matrix.
**/
export declare class CancelTestMatrixResponse extends SpeakeasyBase {
    testState?: CancelTestMatrixResponseTestStateEnum;
}
