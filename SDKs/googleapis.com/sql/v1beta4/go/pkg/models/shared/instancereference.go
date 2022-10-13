package shared

type InstanceReference struct {
	Name    *string `json:"name"`
	Project *string `json:"project"`
	Region  *string `json:"region"`
}
