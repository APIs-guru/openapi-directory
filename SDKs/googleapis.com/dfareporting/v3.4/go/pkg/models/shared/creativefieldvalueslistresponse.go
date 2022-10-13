package shared

type CreativeFieldValuesListResponse struct {
	CreativeFieldValues []CreativeFieldValue `json:"creativeFieldValues"`
	Kind                *string              `json:"kind"`
	NextPageToken       *string              `json:"nextPageToken"`
}
