package shared

type NiResponseXMLAdvancedCallerTypeEnum string

const (
	NiResponseXMLAdvancedCallerTypeEnumBusiness NiResponseXMLAdvancedCallerTypeEnum = "business"
	NiResponseXMLAdvancedCallerTypeEnumConsumer NiResponseXMLAdvancedCallerTypeEnum = "consumer"
	NiResponseXMLAdvancedCallerTypeEnumUnknown  NiResponseXMLAdvancedCallerTypeEnum = "unknown"
)

// NiResponseXMLAdvancedError
// The error code and status of your request
type NiResponseXMLAdvancedError struct {
	Code       *string
	StatusText *string
}

// NiResponseXMLAdvancedLocalNumber
// An object containing the `number` in your request in the format used by the country the number belongs to.
type NiResponseXMLAdvancedLocalNumber struct {
	CountryCode     *string
	CountryCodeIso3 *string
	CountryName     *string
	CountryPrefix   *string
	Number          *string
}

// NiResponseXMLAdvancedLookupOutcome
// An object indicating whether all information about a phone number has been returned.
type NiResponseXMLAdvancedLookupOutcome struct {
	Code                 *interface{}
	LookupOutcomeMessage *string
}

type NiResponseXMLAdvancedReachableEnum string

const (
	NiResponseXMLAdvancedReachableEnumUnknown       NiResponseXMLAdvancedReachableEnum = "unknown"
	NiResponseXMLAdvancedReachableEnumReachable     NiResponseXMLAdvancedReachableEnum = "reachable"
	NiResponseXMLAdvancedReachableEnumUndeliverable NiResponseXMLAdvancedReachableEnum = "undeliverable"
	NiResponseXMLAdvancedReachableEnumAbsent        NiResponseXMLAdvancedReachableEnum = "absent"
	NiResponseXMLAdvancedReachableEnumBadNumber     NiResponseXMLAdvancedReachableEnum = "bad_number"
	NiResponseXMLAdvancedReachableEnumBlacklisted   NiResponseXMLAdvancedReachableEnum = "blacklisted"
	NiResponseXMLAdvancedReachableEnumNull          NiResponseXMLAdvancedReachableEnum = "null"
)

type NiResponseXMLAdvancedValidNumberEnum string

const (
	NiResponseXMLAdvancedValidNumberEnumUnknown          NiResponseXMLAdvancedValidNumberEnum = "unknown"
	NiResponseXMLAdvancedValidNumberEnumValid            NiResponseXMLAdvancedValidNumberEnum = "valid"
	NiResponseXMLAdvancedValidNumberEnumNotValid         NiResponseXMLAdvancedValidNumberEnum = "not_valid"
	NiResponseXMLAdvancedValidNumberEnumInferredNotValid NiResponseXMLAdvancedValidNumberEnum = "inferred_not_valid"
)

// NiResponseXMLAdvanced
// Advanced
type NiResponseXMLAdvanced struct {
	CallerIdentity            *interface{}
	CallerName                *string
	CallerType                *NiResponseXMLAdvancedCallerTypeEnum
	CurrentCarrier            *NiCurrentCarrierProperties
	Error                     *NiResponseXMLAdvancedError
	FirsName                  *string
	InternationalFormatNumber *string
	IPWarnings                *string
	LastName                  *string
	LocalNumber               *NiResponseXMLAdvancedLocalNumber
	LookupOutcome             *NiResponseXMLAdvancedLookupOutcome
	OriginalCarrier           *NiInitialCarrierProperties
	Ported                    *interface{}
	Reachable                 *NiResponseXMLAdvancedReachableEnum
	RemainingBalance          *string
	RequestID                 *string
	RequestPrice              *string
	Roaming                   *NiRoaming
	ValidNumber               *NiResponseXMLAdvancedValidNumberEnum
}
