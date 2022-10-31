package shared




type GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum string

const (
    GoogleCloudDataplexV1AssetDiscoveryStatusStateEnumStateUnspecified GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDataplexV1AssetDiscoveryStatusStateEnumScheduled GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum = "SCHEDULED"
GoogleCloudDataplexV1AssetDiscoveryStatusStateEnumInProgress GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum = "IN_PROGRESS"
GoogleCloudDataplexV1AssetDiscoveryStatusStateEnumPaused GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum = "PAUSED"
GoogleCloudDataplexV1AssetDiscoveryStatusStateEnumDisabled GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum = "DISABLED"
)


type GoogleCloudDataplexV1AssetDiscoveryStatus struct {
    LastRunDuration *string `json:"lastRunDuration,omitempty"`
    LastRunTime *string `json:"lastRunTime,omitempty"`
    Message *string `json:"message,omitempty"`
    State *GoogleCloudDataplexV1AssetDiscoveryStatusStateEnum `json:"state,omitempty"`
    Stats *GoogleCloudDataplexV1AssetDiscoveryStatusStats `json:"stats,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

