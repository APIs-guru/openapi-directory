import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CaptureOrderResponseExecutionStatusEnum {
    ExecutionStatusUnspecified = "EXECUTION_STATUS_UNSPECIFIED"
,    Executed = "EXECUTED"
,    Duplicate = "DUPLICATE"
}


// CaptureOrderResponse
/** 
 * Response message for the CaptureOrder method.
**/
export class CaptureOrderResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=executionStatus" })
  executionStatus?: CaptureOrderResponseExecutionStatusEnum;
}
