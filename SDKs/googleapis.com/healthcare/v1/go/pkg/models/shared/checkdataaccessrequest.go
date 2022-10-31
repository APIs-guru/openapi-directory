package shared




type CheckDataAccessRequestResponseViewEnum string

const (
    CheckDataAccessRequestResponseViewEnumResponseViewUnspecified CheckDataAccessRequestResponseViewEnum = "RESPONSE_VIEW_UNSPECIFIED"
CheckDataAccessRequestResponseViewEnumBasic CheckDataAccessRequestResponseViewEnum = "BASIC"
CheckDataAccessRequestResponseViewEnumFull CheckDataAccessRequestResponseViewEnum = "FULL"
)


type CheckDataAccessRequest struct {
    ConsentList *ConsentList `json:"consentList,omitempty"`
    DataID *string `json:"dataId,omitempty"`
    RequestAttributes map[string]string `json:"requestAttributes,omitempty"`
    ResponseView *CheckDataAccessRequestResponseViewEnum `json:"responseView,omitempty"`
    
}

