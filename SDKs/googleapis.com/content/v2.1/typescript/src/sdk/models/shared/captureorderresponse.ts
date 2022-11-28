import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CaptureOrderResponseExecutionStatusEnum {
    ExecutionStatusUnspecified = "EXECUTION_STATUS_UNSPECIFIED",
    Executed = "EXECUTED",
    Duplicate = "DUPLICATE"
}


// CaptureOrderResponse
/** 
 * Response message for the CaptureOrder method.
**/
export class CaptureOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionStatus" })
  executionStatus?: CaptureOrderResponseExecutionStatusEnum;
}
