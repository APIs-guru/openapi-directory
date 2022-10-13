package shared

type ClusterResponseStatusEnum string

const (
	ClusterResponseStatusEnumWaitingInQueue ClusterResponseStatusEnum = "waiting_in_queue"
	ClusterResponseStatusEnumProcessing     ClusterResponseStatusEnum = "processing"
	ClusterResponseStatusEnumFinished       ClusterResponseStatusEnum = "finished"
)

type ClusterResponse struct {
	Clusters           []Cluster                  `json:"clusters"`
	Copyrights         []string                   `json:"copyrights"`
	ProcessingTime     *float64                   `json:"processing_time"`
	Status             *ClusterResponseStatusEnum `json:"status"`
	WaitingTimeInQueue *float64                   `json:"waiting_time_in_queue"`
}
