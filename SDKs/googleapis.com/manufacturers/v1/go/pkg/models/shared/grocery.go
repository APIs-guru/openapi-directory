package shared

type Grocery struct {
	ActiveIngredients     *string  `json:"activeIngredients"`
	AlcoholByVolume       *float64 `json:"alcoholByVolume"`
	Allergens             *string  `json:"allergens"`
	DerivedNutritionClaim []string `json:"derivedNutritionClaim"`
	Directions            *string  `json:"directions"`
	Indications           *string  `json:"indications"`
	Ingredients           *string  `json:"ingredients"`
	NutritionClaim        []string `json:"nutritionClaim"`
	StorageInstructions   *string  `json:"storageInstructions"`
}
