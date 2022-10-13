package shared

type OperatingSystemVersionsListResponse struct {
	Kind                    *string                  `json:"kind"`
	OperatingSystemVersions []OperatingSystemVersion `json:"operatingSystemVersions"`
}
