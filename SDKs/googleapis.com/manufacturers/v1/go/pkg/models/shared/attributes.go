package shared



type Attributes struct {
    AdditionalImageLink []Image `json:"additionalImageLink,omitempty"`
    AgeGroup *string `json:"ageGroup,omitempty"`
    Brand *string `json:"brand,omitempty"`
    Capacity *Capacity `json:"capacity,omitempty"`
    Color *string `json:"color,omitempty"`
    Count *Count `json:"count,omitempty"`
    Description *string `json:"description,omitempty"`
    DisclosureDate *string `json:"disclosureDate,omitempty"`
    ExcludedDestination []string `json:"excludedDestination,omitempty"`
    FeatureDescription []FeatureDescription `json:"featureDescription,omitempty"`
    Flavor *string `json:"flavor,omitempty"`
    Format *string `json:"format,omitempty"`
    Gender *string `json:"gender,omitempty"`
    Grocery *Grocery `json:"grocery,omitempty"`
    Gtin []string `json:"gtin,omitempty"`
    ImageLink *Image `json:"imageLink,omitempty"`
    IncludedDestination []string `json:"includedDestination,omitempty"`
    ItemGroupID *string `json:"itemGroupId,omitempty"`
    Material *string `json:"material,omitempty"`
    Mpn *string `json:"mpn,omitempty"`
    Nutrition *Nutrition `json:"nutrition,omitempty"`
    Pattern *string `json:"pattern,omitempty"`
    ProductDetail []ProductDetail `json:"productDetail,omitempty"`
    ProductHighlight []string `json:"productHighlight,omitempty"`
    ProductLine *string `json:"productLine,omitempty"`
    ProductName *string `json:"productName,omitempty"`
    ProductPageURL *string `json:"productPageUrl,omitempty"`
    ProductType []string `json:"productType,omitempty"`
    ReleaseDate *string `json:"releaseDate,omitempty"`
    RichProductContent []string `json:"richProductContent,omitempty"`
    Scent *string `json:"scent,omitempty"`
    Size *string `json:"size,omitempty"`
    SizeSystem *string `json:"sizeSystem,omitempty"`
    SizeType []string `json:"sizeType,omitempty"`
    SuggestedRetailPrice *Price `json:"suggestedRetailPrice,omitempty"`
    TargetClientID *string `json:"targetClientId,omitempty"`
    Theme *string `json:"theme,omitempty"`
    Title *string `json:"title,omitempty"`
    VideoLink []string `json:"videoLink,omitempty"`
    
}

