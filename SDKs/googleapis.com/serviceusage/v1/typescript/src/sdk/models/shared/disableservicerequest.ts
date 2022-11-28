import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DisableServiceRequestCheckIfServiceHasUsageEnum {
    CheckIfServiceHasUsageUnspecified = "CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED",
    Skip = "SKIP",
    Check = "CHECK"
}


// DisableServiceRequest
/** 
 * Request message for the `DisableService` method.
**/
export class DisableServiceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkIfServiceHasUsage" })
  checkIfServiceHasUsage?: DisableServiceRequestCheckIfServiceHasUsageEnum;

  @SpeakeasyMetadata({ data: "json, name=disableDependentServices" })
  disableDependentServices?: boolean;
}
