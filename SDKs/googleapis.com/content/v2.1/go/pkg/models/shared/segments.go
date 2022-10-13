package shared

type SegmentsProgramEnum string

const (
	SegmentsProgramEnumProgramUnspecified      SegmentsProgramEnum = "PROGRAM_UNSPECIFIED"
	SegmentsProgramEnumShoppingAds             SegmentsProgramEnum = "SHOPPING_ADS"
	SegmentsProgramEnumFreeProductListing      SegmentsProgramEnum = "FREE_PRODUCT_LISTING"
	SegmentsProgramEnumFreeLocalProductListing SegmentsProgramEnum = "FREE_LOCAL_PRODUCT_LISTING"
	SegmentsProgramEnumBuyOnGoogleListing      SegmentsProgramEnum = "BUY_ON_GOOGLE_LISTING"
)

type Segments struct {
	Brand               *string              `json:"brand"`
	CategoryL1          *string              `json:"categoryL1"`
	CategoryL2          *string              `json:"categoryL2"`
	CategoryL3          *string              `json:"categoryL3"`
	CategoryL4          *string              `json:"categoryL4"`
	CategoryL5          *string              `json:"categoryL5"`
	CurrencyCode        *string              `json:"currencyCode"`
	CustomLabel0        *string              `json:"customLabel0"`
	CustomLabel1        *string              `json:"customLabel1"`
	CustomLabel2        *string              `json:"customLabel2"`
	CustomLabel3        *string              `json:"customLabel3"`
	CustomLabel4        *string              `json:"customLabel4"`
	CustomerCountryCode *string              `json:"customerCountryCode"`
	Date                *Date                `json:"date"`
	OfferID             *string              `json:"offerId"`
	ProductTypeL1       *string              `json:"productTypeL1"`
	ProductTypeL2       *string              `json:"productTypeL2"`
	ProductTypeL3       *string              `json:"productTypeL3"`
	ProductTypeL4       *string              `json:"productTypeL4"`
	ProductTypeL5       *string              `json:"productTypeL5"`
	Program             *SegmentsProgramEnum `json:"program"`
	Title               *string              `json:"title"`
	Week                *Date                `json:"week"`
}
