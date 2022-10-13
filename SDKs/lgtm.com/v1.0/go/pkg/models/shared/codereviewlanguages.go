package shared

type CodereviewLanguagesStatusEnum string

const (
	CodereviewLanguagesStatusEnumPending CodereviewLanguagesStatusEnum = "pending"
	CodereviewLanguagesStatusEnumFailure CodereviewLanguagesStatusEnum = "failure"
	CodereviewLanguagesStatusEnumSuccess CodereviewLanguagesStatusEnum = "success"
)

type CodereviewLanguages struct {
	Alerts        []CodereviewAlerts             `json:"alerts"`
	Fixed         *int32                         `json:"fixed"`
	Language      *string                        `json:"language"`
	New           *int32                         `json:"new"`
	Status        *CodereviewLanguagesStatusEnum `json:"status"`
	StatusMessage *string                        `json:"status-message"`
}
