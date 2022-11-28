package shared

// VoluntaryNutritionFact
// Voluntary Nutrition Facts.
type VoluntaryNutritionFact struct {
	DailyPercentage *float64   `json:"dailyPercentage,omitempty"`
	Name            *string    `json:"name,omitempty"`
	Value           *FloatUnit `json:"value,omitempty"`
}
