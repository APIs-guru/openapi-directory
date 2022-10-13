package shared

type DeidentifyFhirStoreRequest struct {
	Config                *DeidentifyConfig `json:"config"`
	DestinationStore      *string           `json:"destinationStore"`
	GcsConfigURI          *string           `json:"gcsConfigUri"`
	ResourceFilter        *FhirFilter       `json:"resourceFilter"`
	SkipModifiedResources *bool             `json:"skipModifiedResources"`
}
