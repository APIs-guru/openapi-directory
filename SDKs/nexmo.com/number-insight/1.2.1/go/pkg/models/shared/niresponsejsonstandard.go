package shared




type NiResponseJSONStandardCallerTypeEnum string

const (
    NiResponseJSONStandardCallerTypeEnumBusiness NiResponseJSONStandardCallerTypeEnum = "business"
NiResponseJSONStandardCallerTypeEnumConsumer NiResponseJSONStandardCallerTypeEnum = "consumer"
NiResponseJSONStandardCallerTypeEnumUnknown NiResponseJSONStandardCallerTypeEnum = "unknown"
)



type NiResponseJSONStandardCurrentCarrierNetworkTypeEnum string

const (
    NiResponseJSONStandardCurrentCarrierNetworkTypeEnumMobile NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "mobile"
NiResponseJSONStandardCurrentCarrierNetworkTypeEnumLandline NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "landline"
NiResponseJSONStandardCurrentCarrierNetworkTypeEnumLandlinePremium NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "landline_premium"
NiResponseJSONStandardCurrentCarrierNetworkTypeEnumLandlineTollfree NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "landline_tollfree"
NiResponseJSONStandardCurrentCarrierNetworkTypeEnumVirtual NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "virtual"
NiResponseJSONStandardCurrentCarrierNetworkTypeEnumUnknown NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "unknown"
NiResponseJSONStandardCurrentCarrierNetworkTypeEnumPager NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "pager"
NiResponseJSONStandardCurrentCarrierNetworkTypeEnumNull NiResponseJSONStandardCurrentCarrierNetworkTypeEnum = "null"
)


type NiResponseJSONStandardCurrentCarrier struct {
    Country *string `json:"country,omitempty"`
    Name *string `json:"name,omitempty"`
    NetworkCode *string `json:"network_code,omitempty"`
    NetworkType *NiResponseJSONStandardCurrentCarrierNetworkTypeEnum `json:"network_type,omitempty"`
    
}


type NiResponseJSONStandardPortedEnum string

const (
    NiResponseJSONStandardPortedEnumUnknown NiResponseJSONStandardPortedEnum = "unknown"
NiResponseJSONStandardPortedEnumPorted NiResponseJSONStandardPortedEnum = "ported"
NiResponseJSONStandardPortedEnumNotPorted NiResponseJSONStandardPortedEnum = "not_ported"
NiResponseJSONStandardPortedEnumAssumedNotPorted NiResponseJSONStandardPortedEnum = "assumed_not_ported"
NiResponseJSONStandardPortedEnumAssumedPorted NiResponseJSONStandardPortedEnum = "assumed_ported"
NiResponseJSONStandardPortedEnumNull NiResponseJSONStandardPortedEnum = "null"
)


type NiResponseJSONStandard struct {
    CallerIdentity *NiCallerIdentity `json:"caller_identity,omitempty"`
    CallerName *string `json:"caller_name,omitempty"`
    CallerType *NiResponseJSONStandardCallerTypeEnum `json:"caller_type,omitempty"`
    CountryCode *string `json:"country_code,omitempty"`
    CountryCodeIso3 *string `json:"country_code_iso3,omitempty"`
    CountryName *string `json:"country_name,omitempty"`
    CountryPrefix *string `json:"country_prefix,omitempty"`
    CurrentCarrier *NiResponseJSONStandardCurrentCarrier `json:"current_carrier,omitempty"`
    FirstName *string `json:"first_name,omitempty"`
    InternationalFormatNumber *string `json:"international_format_number,omitempty"`
    LastName *string `json:"last_name,omitempty"`
    NationalFormatNumber *string `json:"national_format_number,omitempty"`
    OriginalCarrier *NiInitialCarrierProperties `json:"original_carrier,omitempty"`
    Ported *NiResponseJSONStandardPortedEnum `json:"ported,omitempty"`
    RefundPrice *string `json:"refund_price,omitempty"`
    RemainingBalance *string `json:"remaining_balance,omitempty"`
    RequestID *string `json:"request_id,omitempty"`
    RequestPrice *string `json:"request_price,omitempty"`
    Status *int64 `json:"status,omitempty"`
    StatusMessage *string `json:"status_message,omitempty"`
    
}

