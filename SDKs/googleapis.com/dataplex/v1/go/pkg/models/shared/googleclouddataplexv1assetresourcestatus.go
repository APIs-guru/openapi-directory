package shared

type GoogleCloudDataplexV1AssetResourceStatusStateEnum string

const (
	GoogleCloudDataplexV1AssetResourceStatusStateEnumStateUnspecified GoogleCloudDataplexV1AssetResourceStatusStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1AssetResourceStatusStateEnumReady            GoogleCloudDataplexV1AssetResourceStatusStateEnum = "READY"
	GoogleCloudDataplexV1AssetResourceStatusStateEnumError            GoogleCloudDataplexV1AssetResourceStatusStateEnum = "ERROR"
)

type GoogleCloudDataplexV1AssetResourceStatus struct {
	Message    *string                                            `json:"message"`
	State      *GoogleCloudDataplexV1AssetResourceStatusStateEnum `json:"state"`
	UpdateTime *string                                            `json:"updateTime"`
}
