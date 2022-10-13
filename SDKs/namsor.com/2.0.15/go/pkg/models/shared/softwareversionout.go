package shared

type SoftwareVersionOut struct {
	SoftwareNameAndVersion *string `json:"softwareNameAndVersion"`
	SoftwareVersion        []int32 `json:"softwareVersion"`
}
