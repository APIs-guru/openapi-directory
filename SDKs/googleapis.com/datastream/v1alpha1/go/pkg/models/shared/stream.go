package shared

type StreamStateEnum string

const (
	StreamStateEnumStateUnspecified  StreamStateEnum = "STATE_UNSPECIFIED"
	StreamStateEnumCreated           StreamStateEnum = "CREATED"
	StreamStateEnumRunning           StreamStateEnum = "RUNNING"
	StreamStateEnumPaused            StreamStateEnum = "PAUSED"
	StreamStateEnumMaintenance       StreamStateEnum = "MAINTENANCE"
	StreamStateEnumFailed            StreamStateEnum = "FAILED"
	StreamStateEnumFailedPermanently StreamStateEnum = "FAILED_PERMANENTLY"
	StreamStateEnumStarting          StreamStateEnum = "STARTING"
	StreamStateEnumDraining          StreamStateEnum = "DRAINING"
)

type StreamInput struct {
	BackfillAll                  *BackfillAllStrategy   `json:"backfillAll,omitempty"`
	BackfillNone                 map[string]interface{} `json:"backfillNone,omitempty"`
	CustomerManagedEncryptionKey *string                `json:"customerManagedEncryptionKey,omitempty"`
	DestinationConfig            *DestinationConfig     `json:"destinationConfig,omitempty"`
	DisplayName                  *string                `json:"displayName,omitempty"`
	Labels                       map[string]string      `json:"labels,omitempty"`
	SourceConfig                 *SourceConfig          `json:"sourceConfig,omitempty"`
	State                        *StreamStateEnum       `json:"state,omitempty"`
}

type Stream struct {
	BackfillAll                  *BackfillAllStrategy   `json:"backfillAll,omitempty"`
	BackfillNone                 map[string]interface{} `json:"backfillNone,omitempty"`
	CreateTime                   *string                `json:"createTime,omitempty"`
	CustomerManagedEncryptionKey *string                `json:"customerManagedEncryptionKey,omitempty"`
	DestinationConfig            *DestinationConfig     `json:"destinationConfig,omitempty"`
	DisplayName                  *string                `json:"displayName,omitempty"`
	Errors                       []Error                `json:"errors,omitempty"`
	Labels                       map[string]string      `json:"labels,omitempty"`
	Name                         *string                `json:"name,omitempty"`
	SourceConfig                 *SourceConfig          `json:"sourceConfig,omitempty"`
	State                        *StreamStateEnum       `json:"state,omitempty"`
	UpdateTime                   *string                `json:"updateTime,omitempty"`
}
