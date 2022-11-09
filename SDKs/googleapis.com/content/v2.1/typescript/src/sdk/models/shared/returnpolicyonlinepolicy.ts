import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReturnPolicyOnlinePolicyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    NumberOfDaysAfterDelivery = "NUMBER_OF_DAYS_AFTER_DELIVERY"
,    NoReturns = "NO_RETURNS"
,    LifetimeReturns = "LIFETIME_RETURNS"
}


// ReturnPolicyOnlinePolicy
/** 
 * The available policies.
**/
export class ReturnPolicyOnlinePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=days" })
  days?: string;

  @Metadata({ data: "json, name=type" })
  type?: ReturnPolicyOnlinePolicyTypeEnum;
}
