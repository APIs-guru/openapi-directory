package shared

type SavedColumn struct {
	Kind            *string `json:"kind"`
	SavedColumnName *string `json:"savedColumnName"`
	Type            *string `json:"type"`
}
