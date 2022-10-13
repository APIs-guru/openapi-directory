package shared

type WatchVariableRequest struct {
	NewerThan *string `json:"newerThan"`
}
