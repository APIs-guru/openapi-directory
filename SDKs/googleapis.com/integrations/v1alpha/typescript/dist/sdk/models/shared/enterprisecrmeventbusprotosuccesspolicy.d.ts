import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum {
    Unspecified = "UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Suspended = "SUSPENDED"
}
/**
 * Policy that dictates the behavior for the task after it completes successfully.
**/
export declare class EnterpriseCrmEventbusProtoSuccessPolicy extends SpeakeasyBase {
    finalState?: EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum;
}
