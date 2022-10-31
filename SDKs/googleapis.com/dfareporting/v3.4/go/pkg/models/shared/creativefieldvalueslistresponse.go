package shared

type CreativeFieldValuesListResponse struct {
	CreativeFieldValues []CreativeFieldValue `json:"creativeFieldValues,omitempty"`
	Kind                *string              `json:"kind,omitempty"`
	NextPageToken       *string              `json:"nextPageToken,omitempty"`
}
