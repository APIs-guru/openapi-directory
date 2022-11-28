package shared

type CheckDataAccessRequestResponseViewEnum string

const (
	CheckDataAccessRequestResponseViewEnumResponseViewUnspecified CheckDataAccessRequestResponseViewEnum = "RESPONSE_VIEW_UNSPECIFIED"
	CheckDataAccessRequestResponseViewEnumBasic                   CheckDataAccessRequestResponseViewEnum = "BASIC"
	CheckDataAccessRequestResponseViewEnumFull                    CheckDataAccessRequestResponseViewEnum = "FULL"
)

// CheckDataAccessRequest
// Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
type CheckDataAccessRequest struct {
	ConsentList       *ConsentList                            `json:"consentList,omitempty"`
	DataID            *string                                 `json:"dataId,omitempty"`
	RequestAttributes map[string]string                       `json:"requestAttributes,omitempty"`
	ResponseView      *CheckDataAccessRequestResponseViewEnum `json:"responseView,omitempty"`
}
