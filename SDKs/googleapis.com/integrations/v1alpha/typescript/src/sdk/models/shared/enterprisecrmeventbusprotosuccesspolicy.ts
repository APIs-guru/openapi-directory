import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum {
    Unspecified = "UNSPECIFIED"
,    Succeeded = "SUCCEEDED"
,    Suspended = "SUSPENDED"
}


// EnterpriseCrmEventbusProtoSuccessPolicy
/** 
 * Policy that dictates the behavior for the task after it completes successfully.
**/
export class EnterpriseCrmEventbusProtoSuccessPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=finalState" })
  finalState?: EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum;
}
