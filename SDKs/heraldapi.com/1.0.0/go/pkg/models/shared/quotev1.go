package shared

type QuoteV1BindStatusEnum string

const (
	QuoteV1BindStatusEnumReady       QuoteV1BindStatusEnum = "ready"
	QuoteV1BindStatusEnumUnavailable QuoteV1BindStatusEnum = "unavailable"
	QuoteV1BindStatusEnumRequested   QuoteV1BindStatusEnum = "requested"
)

type QuoteV1StatusEnum string

const (
	QuoteV1StatusEnumPending      QuoteV1StatusEnum = "pending"
	QuoteV1StatusEnumReferral     QuoteV1StatusEnum = "referral"
	QuoteV1StatusEnumReferred     QuoteV1StatusEnum = "referred"
	QuoteV1StatusEnumDeclined     QuoteV1StatusEnum = "declined"
	QuoteV1StatusEnumActive       QuoteV1StatusEnum = "active"
	QuoteV1StatusEnumExpired      QuoteV1StatusEnum = "expired"
	QuoteV1StatusEnumUnresponsive QuoteV1StatusEnum = "unresponsive"
)

// QuoteV1
// A quote declares an institution's willingness to sell an insurance policy to a customer. Active quotes contain details about a policy the customer can purchase and related prices.
//
// Read more about [quotes](https://www.heraldapi.com/docs/quotes).
type QuoteV1 struct {
	BindStatus     QuoteV1BindStatusEnum  `json:"bind_status"`
	CoverageValues []CoverageValueWriteV1 `json:"coverage_values,omitempty"`
	Files          []FileMiniV1           `json:"files,omitempty"`
	ID             string                 `json:"id"`
	NaicCode       *string                `json:"naic_code,omitempty"`
	PortalLink     *string                `json:"portal_link,omitempty"`
	Prices         *QuotePriceV1          `json:"prices,omitempty"`
	ProductID      string                 `json:"product_id"`
	Status         QuoteV1StatusEnum      `json:"status"`
	StatusReasons  *StatusReason          `json:"status_reasons,omitempty"`
	SubmissionID   string                 `json:"submission_id"`
}
