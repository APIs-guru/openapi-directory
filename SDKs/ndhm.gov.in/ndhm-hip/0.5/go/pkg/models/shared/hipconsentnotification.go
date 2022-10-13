package shared

import (
	"time"
)

type HipConsentNotificationNotificationConsentDetailCareContexts struct {
	CareContextReference string `json:"careContextReference"`
	PatientReference     string `json:"patientReference"`
}

type HipConsentNotificationNotificationConsentDetailConsentManager struct {
	ID string `json:"id"`
}

type HipConsentNotificationNotificationConsentDetailHip struct {
	ID string `json:"id"`
}

type HipConsentNotificationNotificationConsentDetail struct {
	CareContexts   []HipConsentNotificationNotificationConsentDetailCareContexts `json:"careContexts"`
	ConsentID      string                                                        `json:"consentId"`
	ConsentManager HipConsentNotificationNotificationConsentDetailConsentManager `json:"consentManager"`
	CreatedAt      time.Time                                                     `json:"createdAt"`
	HiTypes        []HiTypeEnumEnum                                              `json:"hiTypes"`
	Hip            HipConsentNotificationNotificationConsentDetailHip            `json:"hip"`
	Patient        ConsentManagerPatientID                                       `json:"patient"`
	Permission     Permission                                                    `json:"permission"`
	Purpose        UsePurpose                                                    `json:"purpose"`
	SchemaVersion  *string                                                       `json:"schemaVersion"`
}

type HipConsentNotificationNotification struct {
	ConsentDetail HipConsentNotificationNotificationConsentDetail `json:"consentDetail"`
	ConsentID     string                                          `json:"consentId"`
	Signature     string                                          `json:"signature"`
	Status        ConsentStatusEnum                               `json:"status"`
}

type HipConsentNotification struct {
	Notification HipConsentNotificationNotification `json:"notification"`
	RequestID    string                             `json:"requestId"`
	Timestamp    time.Time                          `json:"timestamp"`
}
