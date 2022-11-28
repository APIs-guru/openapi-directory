package shared

// Categories
// A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
type Categories struct {
	AdditionalCategories []Category `json:"additionalCategories,omitempty"`
	PrimaryCategory      *Category  `json:"primaryCategory,omitempty"`
}

// CategoriesInput
// A collection of categories that describes the business. During updates, both fields must be set. Clients are prohibited from individually updating the primary or additional categories using the update mask.
type CategoriesInput struct {
	AdditionalCategories []CategoryInput `json:"additionalCategories,omitempty"`
	PrimaryCategory      *CategoryInput  `json:"primaryCategory,omitempty"`
}
