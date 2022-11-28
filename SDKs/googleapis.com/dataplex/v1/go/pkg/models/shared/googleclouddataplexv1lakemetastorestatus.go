package shared

type GoogleCloudDataplexV1LakeMetastoreStatusStateEnum string

const (
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumStateUnspecified GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumNone             GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "NONE"
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumReady            GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "READY"
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumUpdating         GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "UPDATING"
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumError            GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "ERROR"
)

// GoogleCloudDataplexV1LakeMetastoreStatus
// Status of Lake and Dataproc Metastore service instance association.
type GoogleCloudDataplexV1LakeMetastoreStatus struct {
	Endpoint   *string                                            `json:"endpoint,omitempty"`
	Message    *string                                            `json:"message,omitempty"`
	State      *GoogleCloudDataplexV1LakeMetastoreStatusStateEnum `json:"state,omitempty"`
	UpdateTime *string                                            `json:"updateTime,omitempty"`
}
