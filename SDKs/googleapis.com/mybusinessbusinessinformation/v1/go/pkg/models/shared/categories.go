package shared



type Categories struct {
    AdditionalCategories []Category `json:"additionalCategories,omitempty"`
    PrimaryCategory *Category `json:"primaryCategory,omitempty"`
    
}

