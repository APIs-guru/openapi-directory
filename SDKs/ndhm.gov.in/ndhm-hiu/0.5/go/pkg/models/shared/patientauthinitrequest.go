package shared

import (
	"time"
)

type PatientAuthInitRequestQueryRequesterTypeEnum string

const (
	PatientAuthInitRequestQueryRequesterTypeEnumHip PatientAuthInitRequestQueryRequesterTypeEnum = "HIP"
	PatientAuthInitRequestQueryRequesterTypeEnumHiu PatientAuthInitRequestQueryRequesterTypeEnum = "HIU"
)

// PatientAuthInitRequestQueryRequester
// identification of requester
type PatientAuthInitRequestQueryRequester struct {
	ID   string                                       `json:"id"`
	Type PatientAuthInitRequestQueryRequesterTypeEnum `json:"type"`
}

type PatientAuthInitRequestQuery struct {
	AuthMode  *AuthenticationModeEnum              `json:"authMode,omitempty"`
	ID        string                               `json:"id"`
	Purpose   PatientAuthPurposeEnum               `json:"purpose"`
	Requester PatientAuthInitRequestQueryRequester `json:"requester"`
}

type PatientAuthInitRequest struct {
	Query     PatientAuthInitRequestQuery `json:"query"`
	RequestID string                      `json:"requestId"`
	Timestamp time.Time                   `json:"timestamp"`
}
