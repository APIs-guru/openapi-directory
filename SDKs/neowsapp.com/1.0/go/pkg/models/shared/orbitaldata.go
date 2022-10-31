package shared



type OrbitalData struct {
    AphelionDistance *string `json:"aphelion_distance,omitempty"`
    AscendingNodeLongitude *string `json:"ascending_node_longitude,omitempty"`
    DataArcInDays *int64 `json:"data_arc_in_days,omitempty"`
    Eccentricity *string `json:"eccentricity,omitempty"`
    EpochOsculation *string `json:"epoch_osculation,omitempty"`
    Equinox *string `json:"equinox,omitempty"`
    FirstObservationDate *string `json:"first_observation_date,omitempty"`
    Inclination *string `json:"inclination,omitempty"`
    JupiterTisserandInvariant *string `json:"jupiter_tisserand_invariant,omitempty"`
    LastObservationDate *string `json:"last_observation_date,omitempty"`
    MeanAnomaly *string `json:"mean_anomaly,omitempty"`
    MeanMotion *string `json:"mean_motion,omitempty"`
    MinimumOrbitIntersection *string `json:"minimum_orbit_intersection,omitempty"`
    ObservationsUsed *int64 `json:"observations_used,omitempty"`
    OrbitClass *OrbitClass `json:"orbit_class,omitempty"`
    OrbitDeterminationDate *string `json:"orbit_determination_date,omitempty"`
    OrbitID *string `json:"orbit_id,omitempty"`
    OrbitUncertainty *string `json:"orbit_uncertainty,omitempty"`
    OrbitalPeriod *string `json:"orbital_period,omitempty"`
    PerihelionArgument *string `json:"perihelion_argument,omitempty"`
    PerihelionDistance *string `json:"perihelion_distance,omitempty"`
    PerihelionTime *string `json:"perihelion_time,omitempty"`
    SemiMajorAxis *string `json:"semi_major_axis,omitempty"`
    
}

