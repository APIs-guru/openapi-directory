package shared

type JobEventTypeEnum string

const (
	JobEventTypeEnumJobEventTypeUnspecified       JobEventTypeEnum = "JOB_EVENT_TYPE_UNSPECIFIED"
	JobEventTypeEnumImpression                    JobEventTypeEnum = "IMPRESSION"
	JobEventTypeEnumView                          JobEventTypeEnum = "VIEW"
	JobEventTypeEnumViewRedirect                  JobEventTypeEnum = "VIEW_REDIRECT"
	JobEventTypeEnumApplicationStart              JobEventTypeEnum = "APPLICATION_START"
	JobEventTypeEnumApplicationFinish             JobEventTypeEnum = "APPLICATION_FINISH"
	JobEventTypeEnumApplicationQuickSubmission    JobEventTypeEnum = "APPLICATION_QUICK_SUBMISSION"
	JobEventTypeEnumApplicationRedirect           JobEventTypeEnum = "APPLICATION_REDIRECT"
	JobEventTypeEnumApplicationStartFromSearch    JobEventTypeEnum = "APPLICATION_START_FROM_SEARCH"
	JobEventTypeEnumApplicationRedirectFromSearch JobEventTypeEnum = "APPLICATION_REDIRECT_FROM_SEARCH"
	JobEventTypeEnumApplicationCompanySubmit      JobEventTypeEnum = "APPLICATION_COMPANY_SUBMIT"
	JobEventTypeEnumBookmark                      JobEventTypeEnum = "BOOKMARK"
	JobEventTypeEnumNotification                  JobEventTypeEnum = "NOTIFICATION"
	JobEventTypeEnumHired                         JobEventTypeEnum = "HIRED"
	JobEventTypeEnumSentCv                        JobEventTypeEnum = "SENT_CV"
	JobEventTypeEnumInterviewGranted              JobEventTypeEnum = "INTERVIEW_GRANTED"
)

// JobEvent
// An event issued when a job seeker interacts with the application that implements Cloud Talent Solution.
type JobEvent struct {
	Jobs []string          `json:"jobs,omitempty"`
	Type *JobEventTypeEnum `json:"type,omitempty"`
}
