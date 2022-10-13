package shared

type NiResponseJSONAdvancedSyncPortedEnum string

const (
	NiResponseJSONAdvancedSyncPortedEnumUnknown          NiResponseJSONAdvancedSyncPortedEnum = "unknown"
	NiResponseJSONAdvancedSyncPortedEnumPorted           NiResponseJSONAdvancedSyncPortedEnum = "ported"
	NiResponseJSONAdvancedSyncPortedEnumNotPorted        NiResponseJSONAdvancedSyncPortedEnum = "not_ported"
	NiResponseJSONAdvancedSyncPortedEnumAssumedNotPorted NiResponseJSONAdvancedSyncPortedEnum = "assumed_not_ported"
	NiResponseJSONAdvancedSyncPortedEnumAssumedPorted    NiResponseJSONAdvancedSyncPortedEnum = "assumed_ported"
	NiResponseJSONAdvancedSyncPortedEnumNull             NiResponseJSONAdvancedSyncPortedEnum = "null"
)

type NiResponseJSONAdvancedSyncReachableEnum string

const (
	NiResponseJSONAdvancedSyncReachableEnumUnknown       NiResponseJSONAdvancedSyncReachableEnum = "unknown"
	NiResponseJSONAdvancedSyncReachableEnumReachable     NiResponseJSONAdvancedSyncReachableEnum = "reachable"
	NiResponseJSONAdvancedSyncReachableEnumUndeliverable NiResponseJSONAdvancedSyncReachableEnum = "undeliverable"
	NiResponseJSONAdvancedSyncReachableEnumAbsent        NiResponseJSONAdvancedSyncReachableEnum = "absent"
	NiResponseJSONAdvancedSyncReachableEnumBadNumber     NiResponseJSONAdvancedSyncReachableEnum = "bad_number"
	NiResponseJSONAdvancedSyncReachableEnumBlacklisted   NiResponseJSONAdvancedSyncReachableEnum = "blacklisted"
	NiResponseJSONAdvancedSyncReachableEnumNull          NiResponseJSONAdvancedSyncReachableEnum = "null"
)

type NiResponseJSONAdvancedSyncValidNumberEnum string

const (
	NiResponseJSONAdvancedSyncValidNumberEnumUnknown          NiResponseJSONAdvancedSyncValidNumberEnum = "unknown"
	NiResponseJSONAdvancedSyncValidNumberEnumValid            NiResponseJSONAdvancedSyncValidNumberEnum = "valid"
	NiResponseJSONAdvancedSyncValidNumberEnumNotValid         NiResponseJSONAdvancedSyncValidNumberEnum = "not_valid"
	NiResponseJSONAdvancedSyncValidNumberEnumInferred         NiResponseJSONAdvancedSyncValidNumberEnum = "inferred"
	NiResponseJSONAdvancedSyncValidNumberEnumInferredNotValid NiResponseJSONAdvancedSyncValidNumberEnum = "inferred_not_valid"
)

type NiResponseJSONAdvancedSync struct {
	CallerIdentity            *NiCallerIdentity                          `json:"caller_identity"`
	CountryCode               string                                     `json:"country_code"`
	CountryCodeIso3           string                                     `json:"country_code_iso3"`
	CountryName               string                                     `json:"country_name"`
	CountryPrefix             string                                     `json:"country_prefix"`
	CurrentCarrier            *NiCurrentCarrierProperties                `json:"current_carrier"`
	InternationalFormatNumber string                                     `json:"international_format_number"`
	LookupOutcome             *int64                                     `json:"lookup_outcome"`
	LookupOutcomeMessage      *string                                    `json:"lookup_outcome_message"`
	NationalFormatNumber      string                                     `json:"national_format_number"`
	OriginalCarrier           *NiInitialCarrierProperties                `json:"original_carrier"`
	Ported                    *NiResponseJSONAdvancedSyncPortedEnum      `json:"ported"`
	Reachable                 *NiResponseJSONAdvancedSyncReachableEnum   `json:"reachable"`
	RealTimeData              *NiRealtimeData                            `json:"real_time_data"`
	RefundPrice               *string                                    `json:"refund_price"`
	RemainingBalance          *string                                    `json:"remaining_balance"`
	RequestID                 string                                     `json:"request_id"`
	RequestPrice              *string                                    `json:"request_price"`
	Roaming                   *NiRoaming                                 `json:"roaming"`
	Status                    int64                                      `json:"status"`
	StatusMessage             string                                     `json:"status_message"`
	ValidNumber               *NiResponseJSONAdvancedSyncValidNumberEnum `json:"valid_number"`
}
