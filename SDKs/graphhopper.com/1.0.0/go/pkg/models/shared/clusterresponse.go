package shared




type ClusterResponseStatusEnum string

const (
    ClusterResponseStatusEnumWaitingInQueue ClusterResponseStatusEnum = "waiting_in_queue"
ClusterResponseStatusEnumProcessing ClusterResponseStatusEnum = "processing"
ClusterResponseStatusEnumFinished ClusterResponseStatusEnum = "finished"
)


type ClusterResponse struct {
    Clusters []Cluster `json:"clusters,omitempty"`
    Copyrights []string `json:"copyrights,omitempty"`
    ProcessingTime *float64 `json:"processing_time,omitempty"`
    Status *ClusterResponseStatusEnum `json:"status,omitempty"`
    WaitingTimeInQueue *float64 `json:"waiting_time_in_queue,omitempty"`
    
}

