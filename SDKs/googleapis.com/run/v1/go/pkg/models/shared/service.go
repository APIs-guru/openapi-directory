package shared

type Service struct {
	APIVersion *string        `json:"apiVersion"`
	Kind       *string        `json:"kind"`
	Metadata   *ObjectMeta    `json:"metadata"`
	Spec       *ServiceSpec   `json:"spec"`
	Status     *ServiceStatus `json:"status"`
}
