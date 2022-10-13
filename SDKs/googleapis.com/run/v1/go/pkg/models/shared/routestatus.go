package shared

type RouteStatus struct {
	Address            *Addressable                `json:"address"`
	Conditions         []GoogleCloudRunV1Condition `json:"conditions"`
	ObservedGeneration *int32                      `json:"observedGeneration"`
	Traffic            []TrafficTarget             `json:"traffic"`
	URL                *string                     `json:"url"`
}
