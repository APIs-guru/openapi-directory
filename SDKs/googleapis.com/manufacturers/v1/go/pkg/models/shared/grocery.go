package shared

type Grocery struct {
	ActiveIngredients     *string  `json:"activeIngredients,omitempty"`
	AlcoholByVolume       *float64 `json:"alcoholByVolume,omitempty"`
	Allergens             *string  `json:"allergens,omitempty"`
	DerivedNutritionClaim []string `json:"derivedNutritionClaim,omitempty"`
	Directions            *string  `json:"directions,omitempty"`
	Indications           *string  `json:"indications,omitempty"`
	Ingredients           *string  `json:"ingredients,omitempty"`
	NutritionClaim        []string `json:"nutritionClaim,omitempty"`
	StorageInstructions   *string  `json:"storageInstructions,omitempty"`
}
