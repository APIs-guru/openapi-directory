package shared

type PolicyStatusEnum string

const (
	PolicyStatusEnumPending      PolicyStatusEnum = "pending"
	PolicyStatusEnumUnderReview  PolicyStatusEnum = "under_review"
	PolicyStatusEnumActive       PolicyStatusEnum = "active"
	PolicyStatusEnumExpired      PolicyStatusEnum = "expired"
	PolicyStatusEnumCancelled    PolicyStatusEnum = "cancelled"
	PolicyStatusEnumUnresponsive PolicyStatusEnum = "unresponsive"
)

type Policy struct {
	ID         *string           `json:"id,omitempty"`
	PortalLink *string           `json:"portal_link,omitempty"`
	QuoteID    *string           `json:"quote_id,omitempty"`
	Status     *PolicyStatusEnum `json:"status,omitempty"`
}
