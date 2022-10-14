package shared

type Nutrition struct {
	AddedSugars                      *FloatUnit               `json:"addedSugars,omitempty"`
	AddedSugarsDailyPercentage       *float64                 `json:"addedSugarsDailyPercentage,omitempty"`
	Calcium                          *FloatUnit               `json:"calcium,omitempty"`
	CalciumDailyPercentage           *float64                 `json:"calciumDailyPercentage,omitempty"`
	Cholesterol                      *FloatUnit               `json:"cholesterol,omitempty"`
	CholesterolDailyPercentage       *float64                 `json:"cholesterolDailyPercentage,omitempty"`
	DietaryFiber                     *FloatUnit               `json:"dietaryFiber,omitempty"`
	DietaryFiberDailyPercentage      *float64                 `json:"dietaryFiberDailyPercentage,omitempty"`
	Energy                           *FloatUnit               `json:"energy,omitempty"`
	EnergyFromFat                    *FloatUnit               `json:"energyFromFat,omitempty"`
	FolateDailyPercentage            *float64                 `json:"folateDailyPercentage,omitempty"`
	FolateFolicAcid                  *FloatUnit               `json:"folateFolicAcid,omitempty"`
	FolateMcgDfe                     *float64                 `json:"folateMcgDfe,omitempty"`
	Iron                             *FloatUnit               `json:"iron,omitempty"`
	IronDailyPercentage              *float64                 `json:"ironDailyPercentage,omitempty"`
	MonounsaturatedFat               *FloatUnit               `json:"monounsaturatedFat,omitempty"`
	NutritionFactMeasure             *string                  `json:"nutritionFactMeasure,omitempty"`
	Polyols                          *FloatUnit               `json:"polyols,omitempty"`
	PolyunsaturatedFat               *FloatUnit               `json:"polyunsaturatedFat,omitempty"`
	Potassium                        *FloatUnit               `json:"potassium,omitempty"`
	PotassiumDailyPercentage         *float64                 `json:"potassiumDailyPercentage,omitempty"`
	PreparedSizeDescription          *string                  `json:"preparedSizeDescription,omitempty"`
	Protein                          *FloatUnit               `json:"protein,omitempty"`
	ProteinDailyPercentage           *float64                 `json:"proteinDailyPercentage,omitempty"`
	SaturatedFat                     *FloatUnit               `json:"saturatedFat,omitempty"`
	SaturatedFatDailyPercentage      *float64                 `json:"saturatedFatDailyPercentage,omitempty"`
	ServingSizeDescription           *string                  `json:"servingSizeDescription,omitempty"`
	ServingSizeMeasure               *FloatUnit               `json:"servingSizeMeasure,omitempty"`
	ServingsPerContainer             *string                  `json:"servingsPerContainer,omitempty"`
	Sodium                           *FloatUnit               `json:"sodium,omitempty"`
	SodiumDailyPercentage            *float64                 `json:"sodiumDailyPercentage,omitempty"`
	Starch                           *FloatUnit               `json:"starch,omitempty"`
	TotalCarbohydrate                *FloatUnit               `json:"totalCarbohydrate,omitempty"`
	TotalCarbohydrateDailyPercentage *float64                 `json:"totalCarbohydrateDailyPercentage,omitempty"`
	TotalFat                         *FloatUnit               `json:"totalFat,omitempty"`
	TotalFatDailyPercentage          *float64                 `json:"totalFatDailyPercentage,omitempty"`
	TotalSugars                      *FloatUnit               `json:"totalSugars,omitempty"`
	TotalSugarsDailyPercentage       *float64                 `json:"totalSugarsDailyPercentage,omitempty"`
	TransFat                         *FloatUnit               `json:"transFat,omitempty"`
	TransFatDailyPercentage          *float64                 `json:"transFatDailyPercentage,omitempty"`
	VitaminD                         *FloatUnit               `json:"vitaminD,omitempty"`
	VitaminDDailyPercentage          *float64                 `json:"vitaminDDailyPercentage,omitempty"`
	VoluntaryNutritionFact           []VoluntaryNutritionFact `json:"voluntaryNutritionFact,omitempty"`
}
