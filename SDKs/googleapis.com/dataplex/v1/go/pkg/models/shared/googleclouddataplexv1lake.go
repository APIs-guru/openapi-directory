package shared

type GoogleCloudDataplexV1LakeStateEnum string

const (
	GoogleCloudDataplexV1LakeStateEnumStateUnspecified GoogleCloudDataplexV1LakeStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1LakeStateEnumActive           GoogleCloudDataplexV1LakeStateEnum = "ACTIVE"
	GoogleCloudDataplexV1LakeStateEnumCreating         GoogleCloudDataplexV1LakeStateEnum = "CREATING"
	GoogleCloudDataplexV1LakeStateEnumDeleting         GoogleCloudDataplexV1LakeStateEnum = "DELETING"
	GoogleCloudDataplexV1LakeStateEnumActionRequired   GoogleCloudDataplexV1LakeStateEnum = "ACTION_REQUIRED"
)

// GoogleCloudDataplexV1LakeInput
// A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
type GoogleCloudDataplexV1LakeInput struct {
	AssetStatus     *GoogleCloudDataplexV1AssetStatus         `json:"assetStatus,omitempty"`
	Description     *string                                   `json:"description,omitempty"`
	DisplayName     *string                                   `json:"displayName,omitempty"`
	Labels          map[string]string                         `json:"labels,omitempty"`
	Metastore       *GoogleCloudDataplexV1LakeMetastore       `json:"metastore,omitempty"`
	MetastoreStatus *GoogleCloudDataplexV1LakeMetastoreStatus `json:"metastoreStatus,omitempty"`
}

// GoogleCloudDataplexV1Lake
// A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.
type GoogleCloudDataplexV1Lake struct {
	AssetStatus     *GoogleCloudDataplexV1AssetStatus         `json:"assetStatus,omitempty"`
	CreateTime      *string                                   `json:"createTime,omitempty"`
	Description     *string                                   `json:"description,omitempty"`
	DisplayName     *string                                   `json:"displayName,omitempty"`
	Labels          map[string]string                         `json:"labels,omitempty"`
	Metastore       *GoogleCloudDataplexV1LakeMetastore       `json:"metastore,omitempty"`
	MetastoreStatus *GoogleCloudDataplexV1LakeMetastoreStatus `json:"metastoreStatus,omitempty"`
	Name            *string                                   `json:"name,omitempty"`
	ServiceAccount  *string                                   `json:"serviceAccount,omitempty"`
	State           *GoogleCloudDataplexV1LakeStateEnum       `json:"state,omitempty"`
	UID             *string                                   `json:"uid,omitempty"`
	UpdateTime      *string                                   `json:"updateTime,omitempty"`
}
