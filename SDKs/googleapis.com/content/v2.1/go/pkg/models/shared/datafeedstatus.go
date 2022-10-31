package shared

type DatafeedStatus struct {
	Country          *string               `json:"country,omitempty"`
	DatafeedID       *string               `json:"datafeedId,omitempty"`
	Errors           []DatafeedStatusError `json:"errors,omitempty"`
	ItemsTotal       *string               `json:"itemsTotal,omitempty"`
	ItemsValid       *string               `json:"itemsValid,omitempty"`
	Kind             *string               `json:"kind,omitempty"`
	Language         *string               `json:"language,omitempty"`
	LastUploadDate   *string               `json:"lastUploadDate,omitempty"`
	ProcessingStatus *string               `json:"processingStatus,omitempty"`
	Warnings         []DatafeedStatusError `json:"warnings,omitempty"`
}
