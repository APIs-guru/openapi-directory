package shared

type SpotSetCreate struct {
	CreatedBy   *string `json:"created_by"`
	ID          *string `json:"id"`
	Setid       *int64  `json:"setid"`
	SpotID      *string `json:"spot_id"`
	TimeCreated *string `json:"time_created"`
	TimeUpdated *string `json:"time_updated"`
}
