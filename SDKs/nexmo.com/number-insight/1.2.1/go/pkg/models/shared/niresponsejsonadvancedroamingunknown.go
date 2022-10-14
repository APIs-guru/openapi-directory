package shared

type NiResponseJSONAdvancedRoamingUnknownPortedEnum string

const (
	NiResponseJSONAdvancedRoamingUnknownPortedEnumUnknown          NiResponseJSONAdvancedRoamingUnknownPortedEnum = "unknown"
	NiResponseJSONAdvancedRoamingUnknownPortedEnumPorted           NiResponseJSONAdvancedRoamingUnknownPortedEnum = "ported"
	NiResponseJSONAdvancedRoamingUnknownPortedEnumNotPorted        NiResponseJSONAdvancedRoamingUnknownPortedEnum = "not_ported"
	NiResponseJSONAdvancedRoamingUnknownPortedEnumAssumedNotPorted NiResponseJSONAdvancedRoamingUnknownPortedEnum = "assumed_not_ported"
	NiResponseJSONAdvancedRoamingUnknownPortedEnumAssumedPorted    NiResponseJSONAdvancedRoamingUnknownPortedEnum = "assumed_ported"
	NiResponseJSONAdvancedRoamingUnknownPortedEnumNull             NiResponseJSONAdvancedRoamingUnknownPortedEnum = "null"
)

type NiResponseJSONAdvancedRoamingUnknownReachableEnum string

const (
	NiResponseJSONAdvancedRoamingUnknownReachableEnumUnknown       NiResponseJSONAdvancedRoamingUnknownReachableEnum = "unknown"
	NiResponseJSONAdvancedRoamingUnknownReachableEnumReachable     NiResponseJSONAdvancedRoamingUnknownReachableEnum = "reachable"
	NiResponseJSONAdvancedRoamingUnknownReachableEnumUndeliverable NiResponseJSONAdvancedRoamingUnknownReachableEnum = "undeliverable"
	NiResponseJSONAdvancedRoamingUnknownReachableEnumAbsent        NiResponseJSONAdvancedRoamingUnknownReachableEnum = "absent"
	NiResponseJSONAdvancedRoamingUnknownReachableEnumBadNumber     NiResponseJSONAdvancedRoamingUnknownReachableEnum = "bad_number"
	NiResponseJSONAdvancedRoamingUnknownReachableEnumBlacklisted   NiResponseJSONAdvancedRoamingUnknownReachableEnum = "blacklisted"
	NiResponseJSONAdvancedRoamingUnknownReachableEnumNull          NiResponseJSONAdvancedRoamingUnknownReachableEnum = "null"
)

type NiResponseJSONAdvancedRoamingUnknownRoamingEnum string

const (
	NiResponseJSONAdvancedRoamingUnknownRoamingEnumUnknown NiResponseJSONAdvancedRoamingUnknownRoamingEnum = "unknown"
)

type NiResponseJSONAdvancedRoamingUnknownValidNumberEnum string

const (
	NiResponseJSONAdvancedRoamingUnknownValidNumberEnumUnknown          NiResponseJSONAdvancedRoamingUnknownValidNumberEnum = "unknown"
	NiResponseJSONAdvancedRoamingUnknownValidNumberEnumValid            NiResponseJSONAdvancedRoamingUnknownValidNumberEnum = "valid"
	NiResponseJSONAdvancedRoamingUnknownValidNumberEnumNotValid         NiResponseJSONAdvancedRoamingUnknownValidNumberEnum = "not_valid"
	NiResponseJSONAdvancedRoamingUnknownValidNumberEnumInferred         NiResponseJSONAdvancedRoamingUnknownValidNumberEnum = "inferred"
	NiResponseJSONAdvancedRoamingUnknownValidNumberEnumInferredNotValid NiResponseJSONAdvancedRoamingUnknownValidNumberEnum = "inferred_not_valid"
)

type NiResponseJSONAdvancedRoamingUnknown struct {
	CallerIdentity            *NiCallerIdentity                                    `json:"caller_identity,omitempty"`
	CountryCode               string                                               `json:"country_code"`
	CountryCodeIso3           string                                               `json:"country_code_iso3"`
	CountryName               string                                               `json:"country_name"`
	CountryPrefix             string                                               `json:"country_prefix"`
	CurrentCarrier            *NiCurrentCarrierProperties                          `json:"current_carrier,omitempty"`
	InternationalFormatNumber string                                               `json:"international_format_number"`
	LookupOutcome             *int64                                               `json:"lookup_outcome,omitempty"`
	LookupOutcomeMessage      *string                                              `json:"lookup_outcome_message,omitempty"`
	NationalFormatNumber      string                                               `json:"national_format_number"`
	OriginalCarrier           *NiInitialCarrierProperties                          `json:"original_carrier,omitempty"`
	Ported                    *NiResponseJSONAdvancedRoamingUnknownPortedEnum      `json:"ported,omitempty"`
	Reachable                 *NiResponseJSONAdvancedRoamingUnknownReachableEnum   `json:"reachable,omitempty"`
	RefundPrice               *string                                              `json:"refund_price,omitempty"`
	RemainingBalance          *string                                              `json:"remaining_balance,omitempty"`
	RequestID                 string                                               `json:"request_id"`
	RequestPrice              *string                                              `json:"request_price,omitempty"`
	Roaming                   *NiResponseJSONAdvancedRoamingUnknownRoamingEnum     `json:"roaming,omitempty"`
	Status                    int64                                                `json:"status"`
	StatusMessage             string                                               `json:"status_message"`
	ValidNumber               *NiResponseJSONAdvancedRoamingUnknownValidNumberEnum `json:"valid_number,omitempty"`
}
