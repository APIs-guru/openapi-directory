package shared

type JobMessageMessageImportanceEnum string

const (
	JobMessageMessageImportanceEnumJobMessageImportanceUnknown JobMessageMessageImportanceEnum = "JOB_MESSAGE_IMPORTANCE_UNKNOWN"
	JobMessageMessageImportanceEnumJobMessageDebug             JobMessageMessageImportanceEnum = "JOB_MESSAGE_DEBUG"
	JobMessageMessageImportanceEnumJobMessageDetailed          JobMessageMessageImportanceEnum = "JOB_MESSAGE_DETAILED"
	JobMessageMessageImportanceEnumJobMessageBasic             JobMessageMessageImportanceEnum = "JOB_MESSAGE_BASIC"
	JobMessageMessageImportanceEnumJobMessageWarning           JobMessageMessageImportanceEnum = "JOB_MESSAGE_WARNING"
	JobMessageMessageImportanceEnumJobMessageError             JobMessageMessageImportanceEnum = "JOB_MESSAGE_ERROR"
)

// JobMessage
// A particular message pertaining to a Dataflow job.
type JobMessage struct {
	ID                *string                          `json:"id,omitempty"`
	MessageImportance *JobMessageMessageImportanceEnum `json:"messageImportance,omitempty"`
	MessageText       *string                          `json:"messageText,omitempty"`
	Time              *string                          `json:"time,omitempty"`
}
