import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReturnPolicyOnlineReturnShippingFee } from "./returnpolicyonlinereturnshippingfee";

export enum ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum {
    ReturnLabelSourceUnspecified = "RETURN_LABEL_SOURCE_UNSPECIFIED"
,    DownloadAndPrint = "DOWNLOAD_AND_PRINT"
,    InTheBox = "IN_THE_BOX"
,    CustomerResponsibility = "CUSTOMER_RESPONSIBILITY"
}

export enum ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum {
    ReturnReasonCategoryUnspecified = "RETURN_REASON_CATEGORY_UNSPECIFIED"
,    BuyerRemorse = "BUYER_REMORSE"
,    ItemDefect = "ITEM_DEFECT"
}


// ReturnPolicyOnlineReturnReasonCategoryInfo
/** 
 * The return reason category info wrapper.
**/
export class ReturnPolicyOnlineReturnReasonCategoryInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=returnLabelSource" })
  returnLabelSource?: ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum;

  @Metadata({ data: "json, name=returnReasonCategory" })
  returnReasonCategory?: ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum;

  @Metadata({ data: "json, name=returnShippingFee" })
  returnShippingFee?: ReturnPolicyOnlineReturnShippingFee;
}
