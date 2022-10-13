package shared

type ListenRequest struct {
	AddTarget    *Target           `json:"addTarget"`
	Labels       map[string]string `json:"labels"`
	RemoveTarget *int32            `json:"removeTarget"`
}
