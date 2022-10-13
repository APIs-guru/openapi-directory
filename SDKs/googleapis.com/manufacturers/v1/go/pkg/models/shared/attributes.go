package shared

type Attributes struct {
	AdditionalImageLink  []Image              `json:"additionalImageLink"`
	AgeGroup             *string              `json:"ageGroup"`
	Brand                *string              `json:"brand"`
	Capacity             *Capacity            `json:"capacity"`
	Color                *string              `json:"color"`
	Count                *Count               `json:"count"`
	Description          *string              `json:"description"`
	DisclosureDate       *string              `json:"disclosureDate"`
	ExcludedDestination  []string             `json:"excludedDestination"`
	FeatureDescription   []FeatureDescription `json:"featureDescription"`
	Flavor               *string              `json:"flavor"`
	Format               *string              `json:"format"`
	Gender               *string              `json:"gender"`
	Grocery              *Grocery             `json:"grocery"`
	Gtin                 []string             `json:"gtin"`
	ImageLink            *Image               `json:"imageLink"`
	IncludedDestination  []string             `json:"includedDestination"`
	ItemGroupID          *string              `json:"itemGroupId"`
	Material             *string              `json:"material"`
	Mpn                  *string              `json:"mpn"`
	Nutrition            *Nutrition           `json:"nutrition"`
	Pattern              *string              `json:"pattern"`
	ProductDetail        []ProductDetail      `json:"productDetail"`
	ProductHighlight     []string             `json:"productHighlight"`
	ProductLine          *string              `json:"productLine"`
	ProductName          *string              `json:"productName"`
	ProductPageURL       *string              `json:"productPageUrl"`
	ProductType          []string             `json:"productType"`
	ReleaseDate          *string              `json:"releaseDate"`
	RichProductContent   []string             `json:"richProductContent"`
	Scent                *string              `json:"scent"`
	Size                 *string              `json:"size"`
	SizeSystem           *string              `json:"sizeSystem"`
	SizeType             []string             `json:"sizeType"`
	SuggestedRetailPrice *Price               `json:"suggestedRetailPrice"`
	TargetClientID       *string              `json:"targetClientId"`
	Theme                *string              `json:"theme"`
	Title                *string              `json:"title"`
	VideoLink            []string             `json:"videoLink"`
}
