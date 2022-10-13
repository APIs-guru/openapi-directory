package shared

type GuestAttributesEntry struct {
	Key       *string `json:"key"`
	Namespace *string `json:"namespace"`
	Value     *string `json:"value"`
}
