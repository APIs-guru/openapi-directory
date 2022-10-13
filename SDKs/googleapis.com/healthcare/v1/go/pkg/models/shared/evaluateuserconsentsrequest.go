package shared

type EvaluateUserConsentsRequestResponseViewEnum string

const (
	EvaluateUserConsentsRequestResponseViewEnumResponseViewUnspecified EvaluateUserConsentsRequestResponseViewEnum = "RESPONSE_VIEW_UNSPECIFIED"
	EvaluateUserConsentsRequestResponseViewEnumBasic                   EvaluateUserConsentsRequestResponseViewEnum = "BASIC"
	EvaluateUserConsentsRequestResponseViewEnumFull                    EvaluateUserConsentsRequestResponseViewEnum = "FULL"
)

type EvaluateUserConsentsRequest struct {
	ConsentList        *ConsentList                                 `json:"consentList"`
	PageSize           *int32                                       `json:"pageSize"`
	PageToken          *string                                      `json:"pageToken"`
	RequestAttributes  map[string]string                            `json:"requestAttributes"`
	ResourceAttributes map[string]string                            `json:"resourceAttributes"`
	ResponseView       *EvaluateUserConsentsRequestResponseViewEnum `json:"responseView"`
	UserID             *string                                      `json:"userId"`
}
