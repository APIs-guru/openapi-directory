package shared

// CreativeFieldValuesListResponse
// Creative Field Value List Response
type CreativeFieldValuesListResponse struct {
	CreativeFieldValues []CreativeFieldValue `json:"creativeFieldValues,omitempty"`
	Kind                *string              `json:"kind,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
}
