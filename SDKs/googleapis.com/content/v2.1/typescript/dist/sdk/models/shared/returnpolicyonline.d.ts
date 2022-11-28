import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyOnlinePolicy } from "./returnpolicyonlinepolicy";
import { ReturnPolicyOnlineRestockingFee } from "./returnpolicyonlinerestockingfee";
import { ReturnPolicyOnlineReturnReasonCategoryInfo } from "./returnpolicyonlinereturnreasoncategoryinfo";
export declare enum ReturnPolicyOnlineItemConditionsEnum {
    ItemConditionUnspecified = "ITEM_CONDITION_UNSPECIFIED",
    New = "NEW",
    Used = "USED"
}
export declare enum ReturnPolicyOnlineReturnMethodsEnum {
    ReturnMethodUnspecified = "RETURN_METHOD_UNSPECIFIED",
    ByMail = "BY_MAIL",
    InStore = "IN_STORE",
    AtAKiosk = "AT_A_KIOSK"
}
/**
 * Return policy online object. This is currently used to represent return policies for ads and free listings programs.
**/
export declare class ReturnPolicyOnlineInput extends SpeakeasyBase {
    countries?: string[];
    itemConditions?: ReturnPolicyOnlineItemConditionsEnum[];
    label?: string;
    name?: string;
    policy?: ReturnPolicyOnlinePolicy;
    restockingFee?: ReturnPolicyOnlineRestockingFee;
    returnMethods?: ReturnPolicyOnlineReturnMethodsEnum[];
    returnPolicyUri?: string;
    returnReasonCategoryInfo?: ReturnPolicyOnlineReturnReasonCategoryInfo[];
}
/**
 * Return policy online object. This is currently used to represent return policies for ads and free listings programs.
**/
export declare class ReturnPolicyOnline extends SpeakeasyBase {
    countries?: string[];
    itemConditions?: ReturnPolicyOnlineItemConditionsEnum[];
    label?: string;
    name?: string;
    policy?: ReturnPolicyOnlinePolicy;
    restockingFee?: ReturnPolicyOnlineRestockingFee;
    returnMethods?: ReturnPolicyOnlineReturnMethodsEnum[];
    returnPolicyId?: string;
    returnPolicyUri?: string;
    returnReasonCategoryInfo?: ReturnPolicyOnlineReturnReasonCategoryInfo[];
}
