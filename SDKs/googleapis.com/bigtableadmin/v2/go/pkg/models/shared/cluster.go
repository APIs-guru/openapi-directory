package shared

type ClusterDefaultStorageTypeEnum string

const (
	ClusterDefaultStorageTypeEnumStorageTypeUnspecified ClusterDefaultStorageTypeEnum = "STORAGE_TYPE_UNSPECIFIED"
	ClusterDefaultStorageTypeEnumSsd                    ClusterDefaultStorageTypeEnum = "SSD"
	ClusterDefaultStorageTypeEnumHdd                    ClusterDefaultStorageTypeEnum = "HDD"
)

type ClusterStateEnum string

const (
	ClusterStateEnumStateNotKnown ClusterStateEnum = "STATE_NOT_KNOWN"
	ClusterStateEnumReady         ClusterStateEnum = "READY"
	ClusterStateEnumCreating      ClusterStateEnum = "CREATING"
	ClusterStateEnumResizing      ClusterStateEnum = "RESIZING"
	ClusterStateEnumDisabled      ClusterStateEnum = "DISABLED"
)

type Cluster struct {
	ClusterConfig      *ClusterConfig                 `json:"clusterConfig"`
	DefaultStorageType *ClusterDefaultStorageTypeEnum `json:"defaultStorageType"`
	EncryptionConfig   *EncryptionConfig              `json:"encryptionConfig"`
	Location           *string                        `json:"location"`
	Name               *string                        `json:"name"`
	ServeNodes         *int32                         `json:"serveNodes"`
	State              *ClusterStateEnum              `json:"state"`
}
