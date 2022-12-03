package shared

type AddressV1CountryCodeEnum string

const (
	AddressV1CountryCodeEnumUsa AddressV1CountryCodeEnum = "USA"
)

type AddressV1StateEnum string

const (
	AddressV1StateEnumAl AddressV1StateEnum = "AL"
	AddressV1StateEnumAk AddressV1StateEnum = "AK"
	AddressV1StateEnumAz AddressV1StateEnum = "AZ"
	AddressV1StateEnumAr AddressV1StateEnum = "AR"
	AddressV1StateEnumCa AddressV1StateEnum = "CA"
	AddressV1StateEnumCo AddressV1StateEnum = "CO"
	AddressV1StateEnumCt AddressV1StateEnum = "CT"
	AddressV1StateEnumDc AddressV1StateEnum = "DC"
	AddressV1StateEnumDe AddressV1StateEnum = "DE"
	AddressV1StateEnumFl AddressV1StateEnum = "FL"
	AddressV1StateEnumGa AddressV1StateEnum = "GA"
	AddressV1StateEnumHi AddressV1StateEnum = "HI"
	AddressV1StateEnumID AddressV1StateEnum = "ID"
	AddressV1StateEnumIl AddressV1StateEnum = "IL"
	AddressV1StateEnumIn AddressV1StateEnum = "IN"
	AddressV1StateEnumIa AddressV1StateEnum = "IA"
	AddressV1StateEnumKs AddressV1StateEnum = "KS"
	AddressV1StateEnumKy AddressV1StateEnum = "KY"
	AddressV1StateEnumLa AddressV1StateEnum = "LA"
	AddressV1StateEnumMe AddressV1StateEnum = "ME"
	AddressV1StateEnumMd AddressV1StateEnum = "MD"
	AddressV1StateEnumMa AddressV1StateEnum = "MA"
	AddressV1StateEnumMi AddressV1StateEnum = "MI"
	AddressV1StateEnumMn AddressV1StateEnum = "MN"
	AddressV1StateEnumMs AddressV1StateEnum = "MS"
	AddressV1StateEnumMo AddressV1StateEnum = "MO"
	AddressV1StateEnumMt AddressV1StateEnum = "MT"
	AddressV1StateEnumNe AddressV1StateEnum = "NE"
	AddressV1StateEnumNv AddressV1StateEnum = "NV"
	AddressV1StateEnumNh AddressV1StateEnum = "NH"
	AddressV1StateEnumNj AddressV1StateEnum = "NJ"
	AddressV1StateEnumNm AddressV1StateEnum = "NM"
	AddressV1StateEnumNy AddressV1StateEnum = "NY"
	AddressV1StateEnumNc AddressV1StateEnum = "NC"
	AddressV1StateEnumNd AddressV1StateEnum = "ND"
	AddressV1StateEnumOh AddressV1StateEnum = "OH"
	AddressV1StateEnumOk AddressV1StateEnum = "OK"
	AddressV1StateEnumOr AddressV1StateEnum = "OR"
	AddressV1StateEnumPa AddressV1StateEnum = "PA"
	AddressV1StateEnumRi AddressV1StateEnum = "RI"
	AddressV1StateEnumSc AddressV1StateEnum = "SC"
	AddressV1StateEnumSd AddressV1StateEnum = "SD"
	AddressV1StateEnumTn AddressV1StateEnum = "TN"
	AddressV1StateEnumTx AddressV1StateEnum = "TX"
	AddressV1StateEnumUt AddressV1StateEnum = "UT"
	AddressV1StateEnumVt AddressV1StateEnum = "VT"
	AddressV1StateEnumVa AddressV1StateEnum = "VA"
	AddressV1StateEnumWa AddressV1StateEnum = "WA"
	AddressV1StateEnumWv AddressV1StateEnum = "WV"
	AddressV1StateEnumWi AddressV1StateEnum = "WI"
	AddressV1StateEnumWy AddressV1StateEnum = "WY"
)

// AddressV1
// An address describes a location. `address` can be the [`input_type`](https://www.heraldapi.com/docs/input-types) of a parameter on an [application](https://www.heraldapi.com/docs/application).
type AddressV1 struct {
	City         string                   `json:"city"`
	CountryCode  AddressV1CountryCodeEnum `json:"country_code"`
	Line1        string                   `json:"line1"`
	Line2        *string                  `json:"line2,omitempty"`
	Line3        *string                  `json:"line3,omitempty"`
	Organization *string                  `json:"organization,omitempty"`
	PostalCode   string                   `json:"postal_code"`
	State        AddressV1StateEnum       `json:"state"`
}
