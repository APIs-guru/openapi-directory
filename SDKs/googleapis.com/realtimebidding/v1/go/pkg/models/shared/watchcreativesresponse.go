package shared

type WatchCreativesResponse struct {
	Subscription *string `json:"subscription"`
	Topic        *string `json:"topic"`
}
