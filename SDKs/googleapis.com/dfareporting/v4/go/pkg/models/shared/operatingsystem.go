package shared

type OperatingSystem struct {
	DartID  *string `json:"dartId"`
	Desktop *bool   `json:"desktop"`
	Kind    *string `json:"kind"`
	Mobile  *bool   `json:"mobile"`
	Name    *string `json:"name"`
}
