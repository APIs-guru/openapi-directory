package shared

type PublicationType struct {
	Description *string `json:"description,omitempty"`
	ID          *int32  `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
}
