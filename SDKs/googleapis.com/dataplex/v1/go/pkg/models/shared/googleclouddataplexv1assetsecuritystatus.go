package shared

type GoogleCloudDataplexV1AssetSecurityStatusStateEnum string

const (
	GoogleCloudDataplexV1AssetSecurityStatusStateEnumStateUnspecified GoogleCloudDataplexV1AssetSecurityStatusStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1AssetSecurityStatusStateEnumReady            GoogleCloudDataplexV1AssetSecurityStatusStateEnum = "READY"
	GoogleCloudDataplexV1AssetSecurityStatusStateEnumApplying         GoogleCloudDataplexV1AssetSecurityStatusStateEnum = "APPLYING"
	GoogleCloudDataplexV1AssetSecurityStatusStateEnumError            GoogleCloudDataplexV1AssetSecurityStatusStateEnum = "ERROR"
)

type GoogleCloudDataplexV1AssetSecurityStatus struct {
	Message    *string                                            `json:"message"`
	State      *GoogleCloudDataplexV1AssetSecurityStatusStateEnum `json:"state"`
	UpdateTime *string                                            `json:"updateTime"`
}
