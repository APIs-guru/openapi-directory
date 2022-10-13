package shared

type OperatingSystemsListResponse struct {
	Kind             *string           `json:"kind"`
	OperatingSystems []OperatingSystem `json:"operatingSystems"`
}
