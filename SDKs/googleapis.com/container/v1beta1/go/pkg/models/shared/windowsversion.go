package shared

type WindowsVersion struct {
	ImageType      *string `json:"imageType"`
	OsVersion      *string `json:"osVersion"`
	SupportEndDate *Date   `json:"supportEndDate"`
}
