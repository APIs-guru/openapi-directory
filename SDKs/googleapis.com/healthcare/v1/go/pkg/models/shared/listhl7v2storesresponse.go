package shared

// ListHl7V2StoresResponse
// Lists the HL7v2 stores in the given dataset.
type ListHl7V2StoresResponse struct {
	Hl7V2Stores   []Hl7V2Store `json:"hl7V2Stores,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
