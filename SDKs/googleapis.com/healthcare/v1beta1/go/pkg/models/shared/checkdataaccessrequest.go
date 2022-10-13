package shared

type CheckDataAccessRequestResponseViewEnum string

const (
	CheckDataAccessRequestResponseViewEnumResponseViewUnspecified CheckDataAccessRequestResponseViewEnum = "RESPONSE_VIEW_UNSPECIFIED"
	CheckDataAccessRequestResponseViewEnumBasic                   CheckDataAccessRequestResponseViewEnum = "BASIC"
	CheckDataAccessRequestResponseViewEnumFull                    CheckDataAccessRequestResponseViewEnum = "FULL"
)

type CheckDataAccessRequest struct {
	ConsentList       *ConsentList                            `json:"consentList"`
	DataID            *string                                 `json:"dataId"`
	RequestAttributes map[string]string                       `json:"requestAttributes"`
	ResponseView      *CheckDataAccessRequestResponseViewEnum `json:"responseView"`
}
