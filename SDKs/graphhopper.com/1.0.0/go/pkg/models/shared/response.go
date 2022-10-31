package shared




type ResponseStatusEnum string

const (
    ResponseStatusEnumWaitingInQueue ResponseStatusEnum = "waiting_in_queue"
ResponseStatusEnumProcessing ResponseStatusEnum = "processing"
ResponseStatusEnumFinished ResponseStatusEnum = "finished"
)


type Response struct {
    Copyrights []string `json:"copyrights,omitempty"`
    ProcessingTime *int64 `json:"processing_time,omitempty"`
    Solution *Solution `json:"solution,omitempty"`
    Status *ResponseStatusEnum `json:"status,omitempty"`
    WaitingTimeInQueue *int64 `json:"waiting_time_in_queue,omitempty"`
    
}

