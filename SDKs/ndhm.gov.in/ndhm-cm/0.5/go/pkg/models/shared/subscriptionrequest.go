package shared

import (
	"time"
)

type SubscriptionRequestSubscription struct {
	Categories []SubscriptionCategoryEnum   `json:"categories"`
	Hips       []OrganizationRepresentation `json:"hips,omitempty"`
	Hiu        OrganizationRepresentation   `json:"hiu"`
	Patient    ConsentManagerPatientID      `json:"patient"`
	Period     SubscriptionPeriod           `json:"period"`
	Purpose    UsePurpose                   `json:"purpose"`
}

type SubscriptionRequest struct {
	RequestID    string                          `json:"requestId"`
	Subscription SubscriptionRequestSubscription `json:"subscription"`
	Timestamp    time.Time                       `json:"timestamp"`
}
