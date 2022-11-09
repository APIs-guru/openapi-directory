import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CancelTestMatrixResponseTestStateEnum {
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


// CancelTestMatrixResponse
/** 
 * Response containing the current state of the specified test matrix.
**/
export class CancelTestMatrixResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=testState" })
  testState?: CancelTestMatrixResponseTestStateEnum;
}
