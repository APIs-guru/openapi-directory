package shared

type NiResponseXMLStandardCallerIdentityCallerTypeEnum string

const (
	NiResponseXMLStandardCallerIdentityCallerTypeEnumBusiness NiResponseXMLStandardCallerIdentityCallerTypeEnum = "business"
	NiResponseXMLStandardCallerIdentityCallerTypeEnumConsumer NiResponseXMLStandardCallerIdentityCallerTypeEnum = "consumer"
	NiResponseXMLStandardCallerIdentityCallerTypeEnumUnknown  NiResponseXMLStandardCallerIdentityCallerTypeEnum = "unknown"
)

// NiResponseXMLStandardCallerIdentity
// Contains details of the number owner, if `cnam` was set to `true` in the request.
type NiResponseXMLStandardCallerIdentity struct {
	CallerName  *string
	CallerType  *NiResponseXMLStandardCallerIdentityCallerTypeEnum
	CallerName1 *string
	CallerType1 *NiResponseXMLStandardCallerIdentityCallerTypeEnum
	FirsName    *string
	FirstName   *string
	LastName    *string
	LastName1   *string
}

type NiResponseXMLStandardCurrentCarrierNetworkTypeEnum string

const (
	NiResponseXMLStandardCurrentCarrierNetworkTypeEnumMobile           NiResponseXMLStandardCurrentCarrierNetworkTypeEnum = "mobile"
	NiResponseXMLStandardCurrentCarrierNetworkTypeEnumLandline         NiResponseXMLStandardCurrentCarrierNetworkTypeEnum = "landline"
	NiResponseXMLStandardCurrentCarrierNetworkTypeEnumLandlinePremium  NiResponseXMLStandardCurrentCarrierNetworkTypeEnum = "landline_premium"
	NiResponseXMLStandardCurrentCarrierNetworkTypeEnumLandlineTollfree NiResponseXMLStandardCurrentCarrierNetworkTypeEnum = "landline_tollfree"
	NiResponseXMLStandardCurrentCarrierNetworkTypeEnumVirtual          NiResponseXMLStandardCurrentCarrierNetworkTypeEnum = "virtual"
	NiResponseXMLStandardCurrentCarrierNetworkTypeEnumUnknown          NiResponseXMLStandardCurrentCarrierNetworkTypeEnum = "unknown"
	NiResponseXMLStandardCurrentCarrierNetworkTypeEnumPager            NiResponseXMLStandardCurrentCarrierNetworkTypeEnum = "pager"
	NiResponseXMLStandardCurrentCarrierNetworkTypeEnumNull             NiResponseXMLStandardCurrentCarrierNetworkTypeEnum = "null"
)

type NiResponseXMLStandardCurrentCarrier struct {
	Country     *string
	Name        *string
	NetworkCode *string
	NetworkType *NiResponseXMLStandardCurrentCarrierNetworkTypeEnum
}

// NiResponseXMLStandardError
// The error code and status of your request
type NiResponseXMLStandardError struct {
	Code       *string
	StatusText *string
}

// NiResponseXMLStandardLocalNumber
// An object containing the `number` in your request in the format used by the country the number belongs to.
type NiResponseXMLStandardLocalNumber struct {
	CountryCode     *string
	CountryCodeIso3 *string
	CountryName     *string
	CountryPrefix   *string
	Number          *string
}

// NiResponseXMLStandard
// Standard
type NiResponseXMLStandard struct {
	CallerIdentity            *NiResponseXMLStandardCallerIdentity
	CurrentCarrier            *NiResponseXMLStandardCurrentCarrier
	Error                     *NiResponseXMLStandardError
	InternationalFormatNumber *string
	LocalNumber               *NiResponseXMLStandardLocalNumber
	OriginalCarrier           *NiInitialCarrierProperties
	Ported                    *interface{}
	RemainingBalance          *string
	RequestID                 *string
	RequestPrice              *string
}
