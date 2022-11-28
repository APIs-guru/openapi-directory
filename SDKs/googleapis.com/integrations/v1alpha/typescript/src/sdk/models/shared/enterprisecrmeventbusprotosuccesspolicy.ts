import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum {
    Unspecified = "UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Suspended = "SUSPENDED"
}


// EnterpriseCrmEventbusProtoSuccessPolicy
/** 
 * Policy that dictates the behavior for the task after it completes successfully.
**/
export class EnterpriseCrmEventbusProtoSuccessPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=finalState" })
  finalState?: EnterpriseCrmEventbusProtoSuccessPolicyFinalStateEnum;
}
