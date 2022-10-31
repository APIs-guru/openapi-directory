package shared

type HiuSubscription struct {
	Hiu     OrganizationRepresentation `json:"hiu"`
	ID      string                     `json:"id"`
	Patient ConsentManagerPatientID    `json:"patient"`
	Sources []HiuSubscriptionContext   `json:"sources"`
}
