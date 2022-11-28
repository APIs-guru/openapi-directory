import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Message that helps aggregate all sub-executions triggered by one execution and keeps track of child-parent relationships.
**/
export declare class EnterpriseCrmEventbusProtoExecutionTraceInfo extends SpeakeasyBase {
    parentEventExecutionInfoId?: string;
    traceId?: string;
}
