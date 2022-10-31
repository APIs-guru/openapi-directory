package shared




type RecordingStatusEnum string

const (
    RecordingStatusEnumNew RecordingStatusEnum = "New"
RecordingStatusEnumInProgress RecordingStatusEnum = "InProgress"
RecordingStatusEnumCompleted RecordingStatusEnum = "Completed"
RecordingStatusEnumCancelled RecordingStatusEnum = "Cancelled"
RecordingStatusEnumConflictedOk RecordingStatusEnum = "ConflictedOk"
RecordingStatusEnumConflictedNotOk RecordingStatusEnum = "ConflictedNotOk"
RecordingStatusEnumError RecordingStatusEnum = "Error"
)


