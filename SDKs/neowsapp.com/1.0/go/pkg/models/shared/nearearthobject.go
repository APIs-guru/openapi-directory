package shared

type NearEarthObject struct {
	AbsoluteMagnitudeH             *float64                    `json:"absolute_magnitude_h"`
	CloseApproachData              []CloseApproachData         `json:"close_approach_data"`
	Designation                    *string                     `json:"designation"`
	EstimatedDiameter              *EstimatedDiameterContainer `json:"estimated_diameter"`
	IsPotentiallyHazardousAsteroid *bool                       `json:"is_potentially_hazardous_asteroid"`
	IsSentryObject                 *bool                       `json:"is_sentry_object"`
	Name                           *string                     `json:"name"`
	NameLimited                    *string                     `json:"name_limited"`
	NasaJplURL                     *string                     `json:"nasa_jpl_url"`
	NeoReferenceID                 *string                     `json:"neo_reference_id"`
	OrbitalData                    *OrbitalData                `json:"orbital_data"`
	SentryData                     *string                     `json:"sentry_data"`
}
