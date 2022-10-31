package shared

type GuestAttributesEntry struct {
	Key       *string `json:"key,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	Value     *string `json:"value,omitempty"`
}
