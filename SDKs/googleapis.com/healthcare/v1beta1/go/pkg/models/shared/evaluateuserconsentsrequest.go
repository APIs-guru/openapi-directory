package shared

type EvaluateUserConsentsRequestResponseViewEnum string

const (
	EvaluateUserConsentsRequestResponseViewEnumResponseViewUnspecified EvaluateUserConsentsRequestResponseViewEnum = "RESPONSE_VIEW_UNSPECIFIED"
	EvaluateUserConsentsRequestResponseViewEnumBasic                   EvaluateUserConsentsRequestResponseViewEnum = "BASIC"
	EvaluateUserConsentsRequestResponseViewEnumFull                    EvaluateUserConsentsRequestResponseViewEnum = "FULL"
)

// EvaluateUserConsentsRequest
// Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results.
type EvaluateUserConsentsRequest struct {
	ConsentList        *ConsentList                                 `json:"consentList,omitempty"`
	PageSize           *int32                                       `json:"pageSize,omitempty"`
	PageToken          *string                                      `json:"pageToken,omitempty"`
	RequestAttributes  map[string]string                            `json:"requestAttributes,omitempty"`
	ResourceAttributes map[string]string                            `json:"resourceAttributes,omitempty"`
	ResponseView       *EvaluateUserConsentsRequestResponseViewEnum `json:"responseView,omitempty"`
	UserID             *string                                      `json:"userId,omitempty"`
}
