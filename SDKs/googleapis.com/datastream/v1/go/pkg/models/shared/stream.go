package shared

type StreamStateEnum string

const (
	StreamStateEnumStateUnspecified  StreamStateEnum = "STATE_UNSPECIFIED"
	StreamStateEnumNotStarted        StreamStateEnum = "NOT_STARTED"
	StreamStateEnumRunning           StreamStateEnum = "RUNNING"
	StreamStateEnumPaused            StreamStateEnum = "PAUSED"
	StreamStateEnumMaintenance       StreamStateEnum = "MAINTENANCE"
	StreamStateEnumFailed            StreamStateEnum = "FAILED"
	StreamStateEnumFailedPermanently StreamStateEnum = "FAILED_PERMANENTLY"
	StreamStateEnumStarting          StreamStateEnum = "STARTING"
	StreamStateEnumDraining          StreamStateEnum = "DRAINING"
)

type Stream struct {
	BackfillAll                  *BackfillAllStrategy   `json:"backfillAll"`
	BackfillNone                 map[string]interface{} `json:"backfillNone"`
	CreateTime                   *string                `json:"createTime"`
	CustomerManagedEncryptionKey *string                `json:"customerManagedEncryptionKey"`
	DestinationConfig            *DestinationConfig     `json:"destinationConfig"`
	DisplayName                  *string                `json:"displayName"`
	Errors                       []Error                `json:"errors"`
	Labels                       map[string]string      `json:"labels"`
	Name                         *string                `json:"name"`
	SourceConfig                 *SourceConfig          `json:"sourceConfig"`
	State                        *StreamStateEnum       `json:"state"`
	UpdateTime                   *string                `json:"updateTime"`
}
