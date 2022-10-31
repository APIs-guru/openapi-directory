package shared

type ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum string

const (
	ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnumReturnLabelSourceUnspecified ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum = "RETURN_LABEL_SOURCE_UNSPECIFIED"
	ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnumDownloadAndPrint             ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum = "DOWNLOAD_AND_PRINT"
	ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnumInTheBox                     ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum = "IN_THE_BOX"
	ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnumCustomerResponsibility       ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum = "CUSTOMER_RESPONSIBILITY"
)

type ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum string

const (
	ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnumReturnReasonCategoryUnspecified ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum = "RETURN_REASON_CATEGORY_UNSPECIFIED"
	ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnumBuyerRemorse                    ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum = "BUYER_REMORSE"
	ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnumItemDefect                      ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum = "ITEM_DEFECT"
)

type ReturnPolicyOnlineReturnReasonCategoryInfo struct {
	ReturnLabelSource    *ReturnPolicyOnlineReturnReasonCategoryInfoReturnLabelSourceEnum    `json:"returnLabelSource,omitempty"`
	ReturnReasonCategory *ReturnPolicyOnlineReturnReasonCategoryInfoReturnReasonCategoryEnum `json:"returnReasonCategory,omitempty"`
	ReturnShippingFee    *ReturnPolicyOnlineReturnShippingFee                                `json:"returnShippingFee,omitempty"`
}
