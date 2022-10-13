package shared

type GoogleCloudDataplexV1LakeStateEnum string

const (
	GoogleCloudDataplexV1LakeStateEnumStateUnspecified GoogleCloudDataplexV1LakeStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1LakeStateEnumActive           GoogleCloudDataplexV1LakeStateEnum = "ACTIVE"
	GoogleCloudDataplexV1LakeStateEnumCreating         GoogleCloudDataplexV1LakeStateEnum = "CREATING"
	GoogleCloudDataplexV1LakeStateEnumDeleting         GoogleCloudDataplexV1LakeStateEnum = "DELETING"
	GoogleCloudDataplexV1LakeStateEnumActionRequired   GoogleCloudDataplexV1LakeStateEnum = "ACTION_REQUIRED"
)

type GoogleCloudDataplexV1Lake struct {
	AssetStatus     *GoogleCloudDataplexV1AssetStatus         `json:"assetStatus"`
	CreateTime      *string                                   `json:"createTime"`
	Description     *string                                   `json:"description"`
	DisplayName     *string                                   `json:"displayName"`
	Labels          map[string]string                         `json:"labels"`
	Metastore       *GoogleCloudDataplexV1LakeMetastore       `json:"metastore"`
	MetastoreStatus *GoogleCloudDataplexV1LakeMetastoreStatus `json:"metastoreStatus"`
	Name            *string                                   `json:"name"`
	ServiceAccount  *string                                   `json:"serviceAccount"`
	State           *GoogleCloudDataplexV1LakeStateEnum       `json:"state"`
	UID             *string                                   `json:"uid"`
	UpdateTime      *string                                   `json:"updateTime"`
}
