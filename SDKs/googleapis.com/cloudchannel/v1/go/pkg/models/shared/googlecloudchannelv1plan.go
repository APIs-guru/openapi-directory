package shared

type GoogleCloudChannelV1PlanPaymentPlanEnum string

const (
	GoogleCloudChannelV1PlanPaymentPlanEnumPaymentPlanUnspecified GoogleCloudChannelV1PlanPaymentPlanEnum = "PAYMENT_PLAN_UNSPECIFIED"
	GoogleCloudChannelV1PlanPaymentPlanEnumCommitment             GoogleCloudChannelV1PlanPaymentPlanEnum = "COMMITMENT"
	GoogleCloudChannelV1PlanPaymentPlanEnumFlexible               GoogleCloudChannelV1PlanPaymentPlanEnum = "FLEXIBLE"
	GoogleCloudChannelV1PlanPaymentPlanEnumFree                   GoogleCloudChannelV1PlanPaymentPlanEnum = "FREE"
	GoogleCloudChannelV1PlanPaymentPlanEnumTrial                  GoogleCloudChannelV1PlanPaymentPlanEnum = "TRIAL"
	GoogleCloudChannelV1PlanPaymentPlanEnumOffline                GoogleCloudChannelV1PlanPaymentPlanEnum = "OFFLINE"
)

type GoogleCloudChannelV1PlanPaymentTypeEnum string

const (
	GoogleCloudChannelV1PlanPaymentTypeEnumPaymentTypeUnspecified GoogleCloudChannelV1PlanPaymentTypeEnum = "PAYMENT_TYPE_UNSPECIFIED"
	GoogleCloudChannelV1PlanPaymentTypeEnumPrepay                 GoogleCloudChannelV1PlanPaymentTypeEnum = "PREPAY"
	GoogleCloudChannelV1PlanPaymentTypeEnumPostpay                GoogleCloudChannelV1PlanPaymentTypeEnum = "POSTPAY"
)

type GoogleCloudChannelV1Plan struct {
	BillingAccount *string                                  `json:"billingAccount"`
	PaymentCycle   *GoogleCloudChannelV1Period              `json:"paymentCycle"`
	PaymentPlan    *GoogleCloudChannelV1PlanPaymentPlanEnum `json:"paymentPlan"`
	PaymentType    *GoogleCloudChannelV1PlanPaymentTypeEnum `json:"paymentType"`
	TrialPeriod    *GoogleCloudChannelV1Period              `json:"trialPeriod"`
}
