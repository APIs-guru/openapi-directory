package shared

type VoluntaryNutritionFact struct {
	DailyPercentage *float64   `json:"dailyPercentage"`
	Name            *string    `json:"name"`
	Value           *FloatUnit `json:"value"`
}
