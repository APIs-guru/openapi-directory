package shared

type ContactGroupMetadata struct {
	Deleted    *bool   `json:"deleted,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
