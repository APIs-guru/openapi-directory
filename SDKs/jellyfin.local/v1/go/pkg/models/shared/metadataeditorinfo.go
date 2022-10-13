package shared

type MetadataEditorInfo struct {
	ContentType           *string          `json:"ContentType"`
	ContentTypeOptions    []NameValuePair  `json:"ContentTypeOptions"`
	Countries             []CountryInfo    `json:"Countries"`
	Cultures              []CultureDto     `json:"Cultures"`
	ExternalIDInfos       []ExternalIDInfo `json:"ExternalIdInfos"`
	ParentalRatingOptions []ParentalRating `json:"ParentalRatingOptions"`
}
