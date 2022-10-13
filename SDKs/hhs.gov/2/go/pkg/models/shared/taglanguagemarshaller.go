package shared

type TagLanguageMarshaller struct {
	ID       *int64  `json:"id"`
	IsActive *bool   `json:"isActive"`
	IsoCode  *string `json:"isoCode"`
	Name     *string `json:"name"`
}
