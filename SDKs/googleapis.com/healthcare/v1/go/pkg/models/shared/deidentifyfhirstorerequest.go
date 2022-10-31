package shared

type DeidentifyFhirStoreRequest struct {
	Config                *DeidentifyConfig `json:"config,omitempty"`
	DestinationStore      *string           `json:"destinationStore,omitempty"`
	GcsConfigURI          *string           `json:"gcsConfigUri,omitempty"`
	ResourceFilter        *FhirFilter       `json:"resourceFilter,omitempty"`
	SkipModifiedResources *bool             `json:"skipModifiedResources,omitempty"`
}
