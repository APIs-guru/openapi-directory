import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReturnPolicyOnlinePolicyTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    NumberOfDaysAfterDelivery = "NUMBER_OF_DAYS_AFTER_DELIVERY",
    NoReturns = "NO_RETURNS",
    LifetimeReturns = "LIFETIME_RETURNS"
}
/**
 * The available policies.
**/
export declare class ReturnPolicyOnlinePolicy extends SpeakeasyBase {
    days?: string;
    type?: ReturnPolicyOnlinePolicyTypeEnum;
}
