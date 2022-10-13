package shared

import (
	"time"
)

type HiuConsentNotificationEventNotification struct {
	ConsentArtefacts []ConsentArtefactReference `json:"consentArtefacts"`
	ConsentRequestID string                     `json:"consentRequestId"`
	Status           ConsentStatusEnum          `json:"status"`
}

type HiuConsentNotificationEvent struct {
	Notification HiuConsentNotificationEventNotification `json:"notification"`
	RequestID    string                                  `json:"requestId"`
	Timestamp    time.Time                               `json:"timestamp"`
}
