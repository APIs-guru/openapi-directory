package shared

// NiResponseXMLBasicError
// The error code and status of your request
type NiResponseXMLBasicError struct {
	Code       *string
	StatusText *string
}

// NiResponseXMLBasicLocalNumber
// An object containing the `number` in your request in the format used by the country the number belongs to.
type NiResponseXMLBasicLocalNumber struct {
	CountryCode     *string
	CountryCodeIso3 *string
	CountryName     *string
	CountryPrefix   *string
	Number          *string
}

// NiResponseXMLBasic
// Basic
type NiResponseXMLBasic struct {
	Error                     *NiResponseXMLBasicError
	InternationalFormatNumber *string
	LocalNumber               *NiResponseXMLBasicLocalNumber
	RequestID                 *string
}
