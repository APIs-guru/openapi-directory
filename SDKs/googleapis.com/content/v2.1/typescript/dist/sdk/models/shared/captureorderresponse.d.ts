import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CaptureOrderResponseExecutionStatusEnum {
    ExecutionStatusUnspecified = "EXECUTION_STATUS_UNSPECIFIED",
    Executed = "EXECUTED",
    Duplicate = "DUPLICATE"
}
/**
 * Response message for the CaptureOrder method.
**/
export declare class CaptureOrderResponse extends SpeakeasyBase {
    executionStatus?: CaptureOrderResponseExecutionStatusEnum;
}
