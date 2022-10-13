package shared

type CreateWatchRequest struct {
	Watch   *Watch  `json:"watch"`
	WatchID *string `json:"watchId"`
}
