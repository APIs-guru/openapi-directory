package shared

type MetadataEditorInfo struct {
	ContentType           *string          `json:"ContentType,omitempty"`
	ContentTypeOptions    []NameValuePair  `json:"ContentTypeOptions,omitempty"`
	Countries             []CountryInfo    `json:"Countries,omitempty"`
	Cultures              []CultureDto     `json:"Cultures,omitempty"`
	ExternalIDInfos       []ExternalIDInfo `json:"ExternalIdInfos,omitempty"`
	ParentalRatingOptions []ParentalRating `json:"ParentalRatingOptions,omitempty"`
}
