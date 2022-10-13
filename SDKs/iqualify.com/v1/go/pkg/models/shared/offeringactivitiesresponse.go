package shared

type OfferingActivitiesResponse struct {
	ActivityID *string  `json:"activityId"`
	Time       *float64 `json:"time"`
	Title      *string  `json:"title"`
}
