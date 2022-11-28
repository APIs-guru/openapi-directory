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

// GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport
// A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.
type GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport struct {
	AccountID             *string                                                                 `json:"accountId,omitempty"`
	AggregatorInfo        *GoogleAdsHomeservicesLocalservicesV1AggregatorInfo                     `json:"aggregatorInfo,omitempty"`
	BookingLead           *GoogleAdsHomeservicesLocalservicesV1BookingLead                        `json:"bookingLead,omitempty"`
	BusinessName          *string                                                                 `json:"businessName,omitempty"`
	ChargeStatus          *GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportChargeStatusEnum `json:"chargeStatus,omitempty"`
	CurrencyCode          *string                                                                 `json:"currencyCode,omitempty"`
	DisputeStatus         *string                                                                 `json:"disputeStatus,omitempty"`
	Geo                   *string                                                                 `json:"geo,omitempty"`
	LeadCategory          *string                                                                 `json:"leadCategory,omitempty"`
	LeadCreationTimestamp *string                                                                 `json:"leadCreationTimestamp,omitempty"`
	LeadID                *string                                                                 `json:"leadId,omitempty"`
	LeadPrice             *float64                                                                `json:"leadPrice,omitempty"`
	LeadType              *GoogleAdsHomeservicesLocalservicesV1DetailedLeadReportLeadTypeEnum     `json:"leadType,omitempty"`
	MessageLead           *GoogleAdsHomeservicesLocalservicesV1MessageLead                        `json:"messageLead,omitempty"`
	PhoneLead             *GoogleAdsHomeservicesLocalservicesV1PhoneLead                          `json:"phoneLead,omitempty"`
	Timezone              *GoogleTypeTimeZone                                                     `json:"timezone,omitempty"`
}
