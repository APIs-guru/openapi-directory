package shared

type CloseApproachData struct {
	CloseApproachDate      *string       `json:"close_approach_date"`
	CloseApproachDateFull  *string       `json:"close_approach_date_full"`
	EpochDateCloseApproach *int64        `json:"epoch_date_close_approach"`
	MissDistance           *MissDistance `json:"miss_distance"`
	OrbitingBody           *string       `json:"orbiting_body"`
	RelativeVelocity       *RelVelocity  `json:"relative_velocity"`
}
