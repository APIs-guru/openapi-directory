package shared

import (
	"time"
)

type BookInfo struct {
	IndexNumber         *int32            `json:"IndexNumber"`
	IsAutomated         *bool             `json:"IsAutomated"`
	MetadataCountryCode *string           `json:"MetadataCountryCode"`
	MetadataLanguage    *string           `json:"MetadataLanguage"`
	Name                *string           `json:"Name"`
	ParentIndexNumber   *int32            `json:"ParentIndexNumber"`
	Path                *string           `json:"Path"`
	PremiereDate        *time.Time        `json:"PremiereDate"`
	ProviderIds         map[string]string `json:"ProviderIds"`
	SeriesName          *string           `json:"SeriesName"`
	Year                *int32            `json:"Year"`
}
