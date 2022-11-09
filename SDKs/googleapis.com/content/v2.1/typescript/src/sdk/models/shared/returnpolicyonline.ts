import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReturnPolicyOnlinePolicy } from "./returnpolicyonlinepolicy";
import { ReturnPolicyOnlineRestockingFee } from "./returnpolicyonlinerestockingfee";
import { ReturnPolicyOnlineReturnReasonCategoryInfo } from "./returnpolicyonlinereturnreasoncategoryinfo";

export enum ReturnPolicyOnlineItemConditionsEnum {
    ItemConditionUnspecified = "ITEM_CONDITION_UNSPECIFIED"
,    New = "NEW"
,    Used = "USED"
}

export enum ReturnPolicyOnlineReturnMethodsEnum {
    ReturnMethodUnspecified = "RETURN_METHOD_UNSPECIFIED"
,    ByMail = "BY_MAIL"
,    InStore = "IN_STORE"
,    AtAKiosk = "AT_A_KIOSK"
}


// ReturnPolicyOnline
/** 
 * Return policy online object. This is currently used to represent return policies for ads and free listings programs.
**/
export class ReturnPolicyOnline extends SpeakeasyBase {
  @Metadata({ data: "json, name=countries" })
  countries?: string[];

  @Metadata({ data: "json, name=itemConditions" })
  itemConditions?: ReturnPolicyOnlineItemConditionsEnum[];

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=policy" })
  policy?: ReturnPolicyOnlinePolicy;

  @Metadata({ data: "json, name=restockingFee" })
  restockingFee?: ReturnPolicyOnlineRestockingFee;

  @Metadata({ data: "json, name=returnMethods" })
  returnMethods?: ReturnPolicyOnlineReturnMethodsEnum[];

  @Metadata({ data: "json, name=returnPolicyId" })
  returnPolicyId?: string;

  @Metadata({ data: "json, name=returnPolicyUri" })
  returnPolicyUri?: string;

  @Metadata({ data: "json, name=returnReasonCategoryInfo", elemType: shared.ReturnPolicyOnlineReturnReasonCategoryInfo })
  returnReasonCategoryInfo?: ReturnPolicyOnlineReturnReasonCategoryInfo[];
}
