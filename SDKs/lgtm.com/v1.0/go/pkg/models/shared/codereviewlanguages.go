package shared




type CodereviewLanguagesStatusEnum string

const (
    CodereviewLanguagesStatusEnumPending CodereviewLanguagesStatusEnum = "pending"
CodereviewLanguagesStatusEnumFailure CodereviewLanguagesStatusEnum = "failure"
CodereviewLanguagesStatusEnumSuccess CodereviewLanguagesStatusEnum = "success"
)


type CodereviewLanguages struct {
    Alerts []CodereviewAlerts `json:"alerts,omitempty"`
    Fixed *int32 `json:"fixed,omitempty"`
    Language *string `json:"language,omitempty"`
    New *int32 `json:"new,omitempty"`
    Status *CodereviewLanguagesStatusEnum `json:"status,omitempty"`
    StatusMessage *string `json:"status-message,omitempty"`
    
}

