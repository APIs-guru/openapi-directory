package shared

import (
	"time"
)

type ConsentRequestConsentHip struct {
	ID string `json:"id"`
}

type ConsentRequestConsentHiu struct {
	ID string `json:"id"`
}

type ConsentRequestConsentPatient struct {
	ID string `json:"id"`
}

type ConsentRequestConsent struct {
	CareContexts []CareContextDefinition      `json:"careContexts,omitempty"`
	HiTypes      []HiTypeEnumEnum             `json:"hiTypes"`
	Hip          *ConsentRequestConsentHip    `json:"hip,omitempty"`
	Hiu          ConsentRequestConsentHiu     `json:"hiu"`
	Patient      ConsentRequestConsentPatient `json:"patient"`
	Permission   Permission                   `json:"permission"`
	Purpose      UsePurpose                   `json:"purpose"`
	Requester    Requester                    `json:"requester"`
}

type ConsentRequest struct {
	Consent   ConsentRequestConsent `json:"consent"`
	RequestID string                `json:"requestId"`
	Timestamp time.Time             `json:"timestamp"`
}
