import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EnterpriseCrmEventbusProtoExecutionTraceInfo
/** 
 * Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.
**/
export class EnterpriseCrmEventbusProtoExecutionTraceInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=parentEventExecutionInfoId" })
  parentEventExecutionInfoId?: string;

  @Metadata({ data: "json, name=traceId" })
  traceId?: string;
}
