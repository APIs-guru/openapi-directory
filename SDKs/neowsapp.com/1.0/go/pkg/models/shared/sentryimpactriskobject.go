package shared

type SentryImpactRiskObject struct {
	PalermoScaleMax      *string  `json:"Palermo_scale_max,omitempty"`
	AbsoluteMagnitude    *string  `json:"absolute_magnitude,omitempty"`
	AverageLunarDistance *float64 `json:"average_lunar_distance,omitempty"`
	Designation          *string  `json:"designation,omitempty"`
	EstimatedDiameter    *string  `json:"estimated_diameter,omitempty"`
	Fullname             *string  `json:"fullname,omitempty"`
	ImpactProbability    *string  `json:"impact_probability,omitempty"`
	IsActiveSentryObject *bool    `json:"is_active_sentry_object,omitempty"`
	LastObs              *string  `json:"last_obs,omitempty"`
	LastObsJd            *string  `json:"last_obs_jd,omitempty"`
	PalermoScaleAve      *string  `json:"palermo_scale_ave,omitempty"`
	PotentialImpacts     *string  `json:"potential_impacts,omitempty"`
	RemovalDate          *string  `json:"removal_date,omitempty"`
	SentryID             *string  `json:"sentryId,omitempty"`
	TorinoScale          *string  `json:"torino_scale,omitempty"`
	VInfinity            *string  `json:"v_infinity,omitempty"`
	YearRangeMax         *string  `json:"year_range_max,omitempty"`
	YearRangeMin         *string  `json:"year_range_min,omitempty"`
}
