package shared

type GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum string

const (
	GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnumChargeStatusUnspecified GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum = "CHARGE_STATUS_UNSPECIFIED"
	GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnumCharged                 GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum = "CHARGED"
	GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnumNotCharged              GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum = "NOT_CHARGED"
)

type GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum string

const (
	GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnumLeadTypeUnspecified GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum = "LEAD_TYPE_UNSPECIFIED"
	GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnumMessage             GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum = "MESSAGE"
	GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnumPhoneCall           GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum = "PHONE_CALL"
	GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnumBooking             GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum = "BOOKING"
)

type GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport struct {
	AccountID             *string                                                                 `json:"accountId"`
	AggregatorInfo        *GoogleAdsHomeservicesLocalservicesV1AggregatorInfo                     `json:"aggregatorInfo"`
	BookingLead           *GoogleAdsHomeservicesLocalservicesV1BookingLead                        `json:"bookingLead"`
	BusinessName          *string                                                                 `json:"businessName"`
	ChargeStatus          *GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum `json:"chargeStatus"`
	CurrencyCode          *string                                                                 `json:"currencyCode"`
	DisputeStatus         *string                                                                 `json:"disputeStatus"`
	Geo                   *string                                                                 `json:"geo"`
	LeadCategory          *string                                                                 `json:"leadCategory"`
	LeadCreationTimestamp *string                                                                 `json:"leadCreationTimestamp"`
	LeadID                *string                                                                 `json:"leadId"`
	LeadPrice             *float64                                                                `json:"leadPrice"`
	LeadType              *GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum     `json:"leadType"`
	MessageLead           *GoogleAdsHomeservicesLocalservicesV1MessageLead                        `json:"messageLead"`
	PhoneLead             *GoogleAdsHomeservicesLocalservicesV1PhoneLead                          `json:"phoneLead"`
	Timezone              *GoogleTypeTimeZone                                                     `json:"timezone"`
}
