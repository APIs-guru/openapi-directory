package shared



type DeidentifyDatasetRequest struct {
    Config *DeidentifyConfig `json:"config,omitempty"`
    DestinationDataset *string `json:"destinationDataset,omitempty"`
    GcsConfigURI *string `json:"gcsConfigUri,omitempty"`
    
}

