package shared

type HiuSubscriptionEventContent struct {
	Context []EventCategoryDetail      `json:"context"`
	Hip     OrganizationRepresentation `json:"hip"`
	Patient ConsentManagerPatientID    `json:"patient"`
}
