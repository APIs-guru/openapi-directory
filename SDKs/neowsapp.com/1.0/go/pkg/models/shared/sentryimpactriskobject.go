package shared

type SentryImpactRiskObject struct {
	PalermoScaleMax      *string  `json:"Palermo_scale_max"`
	AbsoluteMagnitude    *string  `json:"absolute_magnitude"`
	AverageLunarDistance *float64 `json:"average_lunar_distance"`
	Designation          *string  `json:"designation"`
	EstimatedDiameter    *string  `json:"estimated_diameter"`
	Fullname             *string  `json:"fullname"`
	ImpactProbability    *string  `json:"impact_probability"`
	IsActiveSentryObject *bool    `json:"is_active_sentry_object"`
	LastObs              *string  `json:"last_obs"`
	LastObsJd            *string  `json:"last_obs_jd"`
	PalermoScaleAve      *string  `json:"palermo_scale_ave"`
	PotentialImpacts     *string  `json:"potential_impacts"`
	RemovalDate          *string  `json:"removal_date"`
	SentryID             *string  `json:"sentryId"`
	TorinoScale          *string  `json:"torino_scale"`
	VInfinity            *string  `json:"v_infinity"`
	YearRangeMax         *string  `json:"year_range_max"`
	YearRangeMin         *string  `json:"year_range_min"`
}
