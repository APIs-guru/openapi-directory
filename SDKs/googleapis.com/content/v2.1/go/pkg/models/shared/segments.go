package shared




type SegmentsProgramEnum string

const (
    SegmentsProgramEnumProgramUnspecified SegmentsProgramEnum = "PROGRAM_UNSPECIFIED"
SegmentsProgramEnumShoppingAds SegmentsProgramEnum = "SHOPPING_ADS"
SegmentsProgramEnumFreeProductListing SegmentsProgramEnum = "FREE_PRODUCT_LISTING"
SegmentsProgramEnumFreeLocalProductListing SegmentsProgramEnum = "FREE_LOCAL_PRODUCT_LISTING"
SegmentsProgramEnumBuyOnGoogleListing SegmentsProgramEnum = "BUY_ON_GOOGLE_LISTING"
)


type Segments struct {
    Brand *string `json:"brand,omitempty"`
    CategoryL1 *string `json:"categoryL1,omitempty"`
    CategoryL2 *string `json:"categoryL2,omitempty"`
    CategoryL3 *string `json:"categoryL3,omitempty"`
    CategoryL4 *string `json:"categoryL4,omitempty"`
    CategoryL5 *string `json:"categoryL5,omitempty"`
    CurrencyCode *string `json:"currencyCode,omitempty"`
    CustomLabel0 *string `json:"customLabel0,omitempty"`
    CustomLabel1 *string `json:"customLabel1,omitempty"`
    CustomLabel2 *string `json:"customLabel2,omitempty"`
    CustomLabel3 *string `json:"customLabel3,omitempty"`
    CustomLabel4 *string `json:"customLabel4,omitempty"`
    CustomerCountryCode *string `json:"customerCountryCode,omitempty"`
    Date *Date `json:"date,omitempty"`
    OfferID *string `json:"offerId,omitempty"`
    ProductTypeL1 *string `json:"productTypeL1,omitempty"`
    ProductTypeL2 *string `json:"productTypeL2,omitempty"`
    ProductTypeL3 *string `json:"productTypeL3,omitempty"`
    ProductTypeL4 *string `json:"productTypeL4,omitempty"`
    ProductTypeL5 *string `json:"productTypeL5,omitempty"`
    Program *SegmentsProgramEnum `json:"program,omitempty"`
    Title *string `json:"title,omitempty"`
    Week *Date `json:"week,omitempty"`
    
}

