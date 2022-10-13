package shared

type Categories struct {
	AdditionalCategories []Category `json:"additionalCategories"`
	PrimaryCategory      *Category  `json:"primaryCategory"`
}
