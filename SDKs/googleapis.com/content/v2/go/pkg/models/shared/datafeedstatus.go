package shared

type DatafeedStatus struct {
	Country          *string               `json:"country"`
	DatafeedID       *string               `json:"datafeedId"`
	Errors           []DatafeedStatusError `json:"errors"`
	ItemsTotal       *string               `json:"itemsTotal"`
	ItemsValid       *string               `json:"itemsValid"`
	Kind             *string               `json:"kind"`
	Language         *string               `json:"language"`
	LastUploadDate   *string               `json:"lastUploadDate"`
	ProcessingStatus *string               `json:"processingStatus"`
	Warnings         []DatafeedStatusError `json:"warnings"`
}
