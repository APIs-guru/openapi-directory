package shared



type CloseApproachData struct {
    CloseApproachDate *string `json:"close_approach_date,omitempty"`
    CloseApproachDateFull *string `json:"close_approach_date_full,omitempty"`
    EpochDateCloseApproach *int64 `json:"epoch_date_close_approach,omitempty"`
    MissDistance *MissDistance `json:"miss_distance,omitempty"`
    OrbitingBody *string `json:"orbiting_body,omitempty"`
    RelativeVelocity *RelVelocity `json:"relative_velocity,omitempty"`
    
}

