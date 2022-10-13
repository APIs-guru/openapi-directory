package shared

type PhotoResponse struct {
	Photo  *Photo  `json:"photo"`
	Status *Status `json:"status"`
}
