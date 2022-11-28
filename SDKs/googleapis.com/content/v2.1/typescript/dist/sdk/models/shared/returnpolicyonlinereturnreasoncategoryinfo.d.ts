import { SpeakeasyBase } from "../../../internal/utils";
import { ReturnPolicyOnlineReturnShippingFee } from "./returnpolicyonlinereturnshippingfee";
export declare enum ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum {
    ReturnLabelSourceUnspecified = "RETURN_LABEL_SOURCE_UNSPECIFIED",
    DownloadAndPrint = "DOWNLOAD_AND_PRINT",
    InTheBox = "IN_THE_BOX",
    CustomerResponsibility = "CUSTOMER_RESPONSIBILITY"
}
export declare enum ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum {
    ReturnReasonCategoryUnspecified = "RETURN_REASON_CATEGORY_UNSPECIFIED",
    BuyerRemorse = "BUYER_REMORSE",
    ItemDefect = "ITEM_DEFECT"
}
/**
 * The return reason category info wrapper.
**/
export declare class ReturnPolicyOnlineReturnReasonCategoryInfo extends SpeakeasyBase {
    returnLabelSource?: ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum;
    returnReasonCategory?: ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum;
    returnShippingFee?: ReturnPolicyOnlineReturnShippingFee;
}
