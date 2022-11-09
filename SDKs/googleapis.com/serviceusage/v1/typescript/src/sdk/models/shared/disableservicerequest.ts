import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DisableServiceRequestCheckIfServiceHasUsageEnum {
    CheckIfServiceHasUsageUnspecified = "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED"
,    Skip = "SKIP"
,    Check = "CHECK"
}


// DisableServiceRequest
/** 
 * Request message for the `DisableService` method.
**/
export class DisableServiceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkIfServiceHasUsage" })
  checkIfServiceHasUsage?: DisableServiceRequestCheckIfServiceHasUsageEnum;

  @Metadata({ data: "json, name=disableDependentServices" })
  disableDependentServices?: boolean;
}
