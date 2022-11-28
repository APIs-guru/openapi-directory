import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EnterpriseCrmEventbusProtoExecutionTraceInfo
/** 
 * Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.
**/
export class EnterpriseCrmEventbusProtoExecutionTraceInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parentEventExecutionInfoId" })
  parentEventExecutionInfoId?: string;

  @SpeakeasyMetadata({ data: "json, name=traceId" })
  traceId?: string;
}
