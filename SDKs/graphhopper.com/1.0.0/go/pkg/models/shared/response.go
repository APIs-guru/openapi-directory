package shared

type ResponseStatusEnum string

const (
	ResponseStatusEnumWaitingInQueue ResponseStatusEnum = "waiting_in_queue"
	ResponseStatusEnumProcessing     ResponseStatusEnum = "processing"
	ResponseStatusEnumFinished       ResponseStatusEnum = "finished"
)

type Response struct {
	Copyrights         []string            `json:"copyrights"`
	ProcessingTime     *int64              `json:"processing_time"`
	Solution           *Solution           `json:"solution"`
	Status             *ResponseStatusEnum `json:"status"`
	WaitingTimeInQueue *int64              `json:"waiting_time_in_queue"`
}
