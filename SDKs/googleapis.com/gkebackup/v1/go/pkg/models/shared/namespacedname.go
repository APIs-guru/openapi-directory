package shared

type NamespacedName struct {
	Name      *string `json:"name"`
	Namespace *string `json:"namespace"`
}
