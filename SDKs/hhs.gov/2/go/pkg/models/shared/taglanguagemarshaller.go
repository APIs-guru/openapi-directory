package shared

type TagLanguageMarshaller struct {
	ID       *int64  `json:"id,omitempty"`
	IsActive *bool   `json:"isActive,omitempty"`
	IsoCode  *string `json:"isoCode,omitempty"`
	Name     *string `json:"name,omitempty"`
}
