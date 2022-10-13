package shared

type GoogleCloudDataplexV1LakeMetastoreStatusStateEnum string

const (
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumStateUnspecified GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumNone             GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "NONE"
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumReady            GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "READY"
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumUpdating         GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "UPDATING"
	GoogleCloudDataplexV1LakeMetastoreStatusStateEnumError            GoogleCloudDataplexV1LakeMetastoreStatusStateEnum = "ERROR"
)

type GoogleCloudDataplexV1LakeMetastoreStatus struct {
	Endpoint   *string                                            `json:"endpoint"`
	Message    *string                                            `json:"message"`
	State      *GoogleCloudDataplexV1LakeMetastoreStatusStateEnum `json:"state"`
	UpdateTime *string                                            `json:"updateTime"`
}
