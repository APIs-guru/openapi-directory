package shared

type DeidentifyDatasetRequest struct {
	Config             *DeidentifyConfig `json:"config"`
	DestinationDataset *string           `json:"destinationDataset"`
	GcsConfigURI       *string           `json:"gcsConfigUri"`
}
