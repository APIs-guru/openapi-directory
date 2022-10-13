package shared

type OrbitalData struct {
	AphelionDistance          *string     `json:"aphelion_distance"`
	AscendingNodeLongitude    *string     `json:"ascending_node_longitude"`
	DataArcInDays             *int64      `json:"data_arc_in_days"`
	Eccentricity              *string     `json:"eccentricity"`
	EpochOsculation           *string     `json:"epoch_osculation"`
	Equinox                   *string     `json:"equinox"`
	FirstObservationDate      *string     `json:"first_observation_date"`
	Inclination               *string     `json:"inclination"`
	JupiterTisserandInvariant *string     `json:"jupiter_tisserand_invariant"`
	LastObservationDate       *string     `json:"last_observation_date"`
	MeanAnomaly               *string     `json:"mean_anomaly"`
	MeanMotion                *string     `json:"mean_motion"`
	MinimumOrbitIntersection  *string     `json:"minimum_orbit_intersection"`
	ObservationsUsed          *int64      `json:"observations_used"`
	OrbitClass                *OrbitClass `json:"orbit_class"`
	OrbitDeterminationDate    *string     `json:"orbit_determination_date"`
	OrbitID                   *string     `json:"orbit_id"`
	OrbitUncertainty          *string     `json:"orbit_uncertainty"`
	OrbitalPeriod             *string     `json:"orbital_period"`
	PerihelionArgument        *string     `json:"perihelion_argument"`
	PerihelionDistance        *string     `json:"perihelion_distance"`
	PerihelionTime            *string     `json:"perihelion_time"`
	SemiMajorAxis             *string     `json:"semi_major_axis"`
}
