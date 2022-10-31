package shared




type GoogleCloudDataplexV1JobServiceEnum string

const (
    GoogleCloudDataplexV1JobServiceEnumServiceUnspecified GoogleCloudDataplexV1JobServiceEnum = "SERVICE_UNSPECIFIED"
GoogleCloudDataplexV1JobServiceEnumDataproc GoogleCloudDataplexV1JobServiceEnum = "DATAPROC"
)



type GoogleCloudDataplexV1JobStateEnum string

const (
    GoogleCloudDataplexV1JobStateEnumStateUnspecified GoogleCloudDataplexV1JobStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDataplexV1JobStateEnumRunning GoogleCloudDataplexV1JobStateEnum = "RUNNING"
GoogleCloudDataplexV1JobStateEnumCancelling GoogleCloudDataplexV1JobStateEnum = "CANCELLING"
GoogleCloudDataplexV1JobStateEnumCancelled GoogleCloudDataplexV1JobStateEnum = "CANCELLED"
GoogleCloudDataplexV1JobStateEnumSucceeded GoogleCloudDataplexV1JobStateEnum = "SUCCEEDED"
GoogleCloudDataplexV1JobStateEnumFailed GoogleCloudDataplexV1JobStateEnum = "FAILED"
GoogleCloudDataplexV1JobStateEnumAborted GoogleCloudDataplexV1JobStateEnum = "ABORTED"
)


type GoogleCloudDataplexV1Job struct {
    EndTime *string `json:"endTime,omitempty"`
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    RetryCount *int64 `json:"retryCount,omitempty"`
    Service *GoogleCloudDataplexV1JobServiceEnum `json:"service,omitempty"`
    ServiceJob *string `json:"serviceJob,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    State *GoogleCloudDataplexV1JobStateEnum `json:"state,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

