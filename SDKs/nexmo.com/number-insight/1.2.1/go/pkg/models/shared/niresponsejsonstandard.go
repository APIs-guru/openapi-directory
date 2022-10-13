package shared

type NiResponseJSONStandardCallerTypeEnum string

const (
	NiResponseJSONStandardCallerTypeEnumBusiness NiResponseJSONStandardCallerTypeEnum = "business"
	NiResponseJSONStandardCallerTypeEnumConsumer NiResponseJSONStandardCallerTypeEnum = "consumer"
	NiResponseJSONStandardCallerTypeEnumUnknown  NiResponseJSONStandardCallerTypeEnum = "unknown"
)

type NiResponseJSONStandardCurrentCarrierNetworkTypeEnum string

const (
	NiResponseJSONStandardCurrentCarrierNetworkTypeEnumMobile           NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "mobile"
	NiResponseJSONStandardCurrentCarrierNetworkTypeEnumLandline         NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "landline"
	NiResponseJSONStandardCurrentCarrierNetworkTypeEnumLandlinePremium  NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "landline_premium"
	NiResponseJSONStandardCurrentCarrierNetworkTypeEnumLandlineTollfree NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "landline_tollfree"
	NiResponseJSONStandardCurrentCarrierNetworkTypeEnumVirtual          NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "virtual"
	NiResponseJSONStandardCurrentCarrierNetworkTypeEnumUnknown          NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "unknown"
	NiResponseJSONStandardCurrentCarrierNetworkTypeEnumPager            NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "pager"
	NiResponseJSONStandardCurrentCarrierNetworkTypeEnumNull             NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "null"
)

type NiResponseJSONStandardCurrentCarrier struct {
	Country     *string                                              `json:"country"`
	Name        *string                                              `json:"name"`
	NetworkCode *string                                              `json:"network_code"`
	NetworkType *NiResponseJSONStandardCurrentCarrierNetworkTypeEnum `json:"network_type"`
}

type NiResponseJSONStandardPortedEnum string

const (
	NiResponseJSONStandardPortedEnumUnknown          NiResponseJSONStandardPortedEnum = "unknown"
	NiResponseJSONStandardPortedEnumPorted           NiResponseJSONStandardPortedEnum = "ported"
	NiResponseJSONStandardPortedEnumNotPorted        NiResponseJSONStandardPortedEnum = "not_ported"
	NiResponseJSONStandardPortedEnumAssumedNotPorted NiResponseJSONStandardPortedEnum = "assumed_not_ported"
	NiResponseJSONStandardPortedEnumAssumedPorted    NiResponseJSONStandardPortedEnum = "assumed_ported"
	NiResponseJSONStandardPortedEnumNull             NiResponseJSONStandardPortedEnum = "null"
)

type NiResponseJSONStandard struct {
	CallerIdentity            *NiCallerIdentity                     `json:"caller_identity"`
	CallerName                *string                               `json:"caller_name"`
	CallerType                *NiResponseJSONStandardCallerTypeEnum `json:"caller_type"`
	CountryCode               *string                               `json:"country_code"`
	CountryCodeIso3           *string                               `json:"country_code_iso3"`
	CountryName               *string                               `json:"country_name"`
	CountryPrefix             *string                               `json:"country_prefix"`
	CurrentCarrier            *NiResponseJSONStandardCurrentCarrier `json:"current_carrier"`
	FirstName                 *string                               `json:"first_name"`
	InternationalFormatNumber *string                               `json:"international_format_number"`
	LastName                  *string                               `json:"last_name"`
	NationalFormatNumber      *string                               `json:"national_format_number"`
	OriginalCarrier           *NiInitialCarrierProperties           `json:"original_carrier"`
	Ported                    *NiResponseJSONStandardPortedEnum     `json:"ported"`
	RefundPrice               *string                               `json:"refund_price"`
	RemainingBalance          *string                               `json:"remaining_balance"`
	RequestID                 *string                               `json:"request_id"`
	RequestPrice              *string                               `json:"request_price"`
	Status                    *int64                                `json:"status"`
	StatusMessage             *string                               `json:"status_message"`
}
