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

type JobMessage struct {
	ID                *string                          `json:"id"`
	MessageImportance *JobMessageMessageImportanceEnum `json:"messageImportance"`
	MessageText       *string                          `json:"messageText"`
	Time              *string                          `json:"time"`
}
