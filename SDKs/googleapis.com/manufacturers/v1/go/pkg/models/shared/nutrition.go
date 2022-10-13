package shared

type Nutrition struct {
	AddedSugars                      *FloatUnit               `json:"addedSugars"`
	AddedSugarsDailyPercentage       *float64                 `json:"addedSugarsDailyPercentage"`
	Calcium                          *FloatUnit               `json:"calcium"`
	CalciumDailyPercentage           *float64                 `json:"calciumDailyPercentage"`
	Cholesterol                      *FloatUnit               `json:"cholesterol"`
	CholesterolDailyPercentage       *float64                 `json:"cholesterolDailyPercentage"`
	DietaryFiber                     *FloatUnit               `json:"dietaryFiber"`
	DietaryFiberDailyPercentage      *float64                 `json:"dietaryFiberDailyPercentage"`
	Energy                           *FloatUnit               `json:"energy"`
	EnergyFromFat                    *FloatUnit               `json:"energyFromFat"`
	FolateDailyPercentage            *float64                 `json:"folateDailyPercentage"`
	FolateFolicAcid                  *FloatUnit               `json:"folateFolicAcid"`
	FolateMcgDfe                     *float64                 `json:"folateMcgDfe"`
	Iron                             *FloatUnit               `json:"iron"`
	IronDailyPercentage              *float64                 `json:"ironDailyPercentage"`
	MonounsaturatedFat               *FloatUnit               `json:"monounsaturatedFat"`
	NutritionFactMeasure             *string                  `json:"nutritionFactMeasure"`
	Polyols                          *FloatUnit               `json:"polyols"`
	PolyunsaturatedFat               *FloatUnit               `json:"polyunsaturatedFat"`
	Potassium                        *FloatUnit               `json:"potassium"`
	PotassiumDailyPercentage         *float64                 `json:"potassiumDailyPercentage"`
	PreparedSizeDescription          *string                  `json:"preparedSizeDescription"`
	Protein                          *FloatUnit               `json:"protein"`
	ProteinDailyPercentage           *float64                 `json:"proteinDailyPercentage"`
	SaturatedFat                     *FloatUnit               `json:"saturatedFat"`
	SaturatedFatDailyPercentage      *float64                 `json:"saturatedFatDailyPercentage"`
	ServingSizeDescription           *string                  `json:"servingSizeDescription"`
	ServingSizeMeasure               *FloatUnit               `json:"servingSizeMeasure"`
	ServingsPerContainer             *string                  `json:"servingsPerContainer"`
	Sodium                           *FloatUnit               `json:"sodium"`
	SodiumDailyPercentage            *float64                 `json:"sodiumDailyPercentage"`
	Starch                           *FloatUnit               `json:"starch"`
	TotalCarbohydrate                *FloatUnit               `json:"totalCarbohydrate"`
	TotalCarbohydrateDailyPercentage *float64                 `json:"totalCarbohydrateDailyPercentage"`
	TotalFat                         *FloatUnit               `json:"totalFat"`
	TotalFatDailyPercentage          *float64                 `json:"totalFatDailyPercentage"`
	TotalSugars                      *FloatUnit               `json:"totalSugars"`
	TotalSugarsDailyPercentage       *float64                 `json:"totalSugarsDailyPercentage"`
	TransFat                         *FloatUnit               `json:"transFat"`
	TransFatDailyPercentage          *float64                 `json:"transFatDailyPercentage"`
	VitaminD                         *FloatUnit               `json:"vitaminD"`
	VitaminDDailyPercentage          *float64                 `json:"vitaminDDailyPercentage"`
	VoluntaryNutritionFact           []VoluntaryNutritionFact `json:"voluntaryNutritionFact"`
}
