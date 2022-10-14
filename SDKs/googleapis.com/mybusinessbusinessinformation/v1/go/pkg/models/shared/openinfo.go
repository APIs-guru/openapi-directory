package shared

type OpenInfoStatusEnum string

const (
	OpenInfoStatusEnumOpenForBusinessUnspecified OpenInfoStatusEnum = "OPEN_FOR_BUSINESS_UNSPECIFIED"
	OpenInfoStatusEnumOpen                       OpenInfoStatusEnum = "OPEN"
	OpenInfoStatusEnumClosedPermanently          OpenInfoStatusEnum = "CLOSED_PERMANENTLY"
	OpenInfoStatusEnumClosedTemporarily          OpenInfoStatusEnum = "CLOSED_TEMPORARILY"
)

type OpenInfo struct {
	CanReopen   *bool               `json:"canReopen,omitempty"`
	OpeningDate *Date               `json:"openingDate,omitempty"`
	Status      *OpenInfoStatusEnum `json:"status,omitempty"`
}
