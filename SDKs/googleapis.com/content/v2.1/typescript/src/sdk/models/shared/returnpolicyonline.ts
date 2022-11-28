import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyOnlinePolicy } from "./returnpolicyonlinepolicy";
import { ReturnPolicyOnlineRestockingFee } from "./returnpolicyonlinerestockingfee";
import { ReturnPolicyOnlineReturnReasonCategoryInfo } from "./returnpolicyonlinereturnreasoncategoryinfo";


export enum ReturnPolicyOnlineItemConditionsEnum {
    ItemConditionUnspecified = "ITEM_CONDITION_UNSPECIFIED",
    New = "NEW",
    Used = "USED"
}

export enum ReturnPolicyOnlineReturnMethodsEnum {
    ReturnMethodUnspecified = "RETURN_METHOD_UNSPECIFIED",
    ByMail = "BY_MAIL",
    InStore = "IN_STORE",
    AtAKiosk = "AT_A_KIOSK"
}


// ReturnPolicyOnlineInput
/** 
 * Return policy online object. This is currently used to represent return policies for ads and free listings programs.
**/
export class ReturnPolicyOnlineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemConditions" })
  itemConditions?: ReturnPolicyOnlineItemConditionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: ReturnPolicyOnlinePolicy;

  @SpeakeasyMetadata({ data: "json, name=restockingFee" })
  restockingFee?: ReturnPolicyOnlineRestockingFee;

  @SpeakeasyMetadata({ data: "json, name=returnMethods" })
  returnMethods?: ReturnPolicyOnlineReturnMethodsEnum[];

  @SpeakeasyMetadata({ data: "json, name=returnPolicyUri" })
  returnPolicyUri?: string;

  @SpeakeasyMetadata({ data: "json, name=returnReasonCategoryInfo", elemType: ReturnPolicyOnlineReturnReasonCategoryInfo })
  returnReasonCategoryInfo?: ReturnPolicyOnlineReturnReasonCategoryInfo[];
}


// ReturnPolicyOnline
/** 
 * Return policy online object. This is currently used to represent return policies for ads and free listings programs.
**/
export class ReturnPolicyOnline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countries" })
  countries?: string[];

  @SpeakeasyMetadata({ data: "json, name=itemConditions" })
  itemConditions?: ReturnPolicyOnlineItemConditionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: ReturnPolicyOnlinePolicy;

  @SpeakeasyMetadata({ data: "json, name=restockingFee" })
  restockingFee?: ReturnPolicyOnlineRestockingFee;

  @SpeakeasyMetadata({ data: "json, name=returnMethods" })
  returnMethods?: ReturnPolicyOnlineReturnMethodsEnum[];

  @SpeakeasyMetadata({ data: "json, name=returnPolicyId" })
  returnPolicyId?: string;

  @SpeakeasyMetadata({ data: "json, name=returnPolicyUri" })
  returnPolicyUri?: string;

  @SpeakeasyMetadata({ data: "json, name=returnReasonCategoryInfo", elemType: ReturnPolicyOnlineReturnReasonCategoryInfo })
  returnReasonCategoryInfo?: ReturnPolicyOnlineReturnReasonCategoryInfo[];
}
