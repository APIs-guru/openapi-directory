import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReturnPolicyOnlinePolicyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    NumberOfDaysAfterDelivery = "NUMBER_OF_DAYS_AFTER_DELIVERY",
    NoReturns = "NO_RETURNS",
    LifetimeReturns = "LIFETIME_RETURNS"
}


// ReturnPolicyOnlinePolicy
/** 
 * The available policies.
**/
export class ReturnPolicyOnlinePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=days" })
  days?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReturnPolicyOnlinePolicyTypeEnum;
}
