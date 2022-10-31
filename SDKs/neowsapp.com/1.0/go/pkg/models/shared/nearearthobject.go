package shared

type NearEarthObject struct {
	AbsoluteMagnitudeH             *float64                    `json:"absolute_magnitude_h,omitempty"`
	CloseApproachData              []CloseApproachData         `json:"close_approach_data,omitempty"`
	Designation                    *string                     `json:"designation,omitempty"`
	EstimatedDiameter              *EstimatedDiameterContainer `json:"estimated_diameter,omitempty"`
	IsPotentiallyHazardousAsteroid *bool                       `json:"is_potentially_hazardous_asteroid,omitempty"`
	IsSentryObject                 *bool                       `json:"is_sentry_object,omitempty"`
	Name                           *string                     `json:"name,omitempty"`
	NameLimited                    *string                     `json:"name_limited,omitempty"`
	NasaJplURL                     *string                     `json:"nasa_jpl_url,omitempty"`
	NeoReferenceID                 *string                     `json:"neo_reference_id,omitempty"`
	OrbitalData                    *OrbitalData                `json:"orbital_data,omitempty"`
	SentryData                     *string                     `json:"sentry_data,omitempty"`
}
