package shared




type GoogleCloudDataplexV1LakeStateEnum string

const (
    GoogleCloudDataplexV1LakeStateEnumStateUnspecified GoogleCloudDataplexV1LakeStateEnum = "STATE_UNSPECIFIED"
GoogleCloudDataplexV1LakeStateEnumActive GoogleCloudDataplexV1LakeStateEnum = "ACTIVE"
GoogleCloudDataplexV1LakeStateEnumCreating GoogleCloudDataplexV1LakeStateEnum = "CREATING"
GoogleCloudDataplexV1LakeStateEnumDeleting GoogleCloudDataplexV1LakeStateEnum = "DELETING"
GoogleCloudDataplexV1LakeStateEnumActionRequired GoogleCloudDataplexV1LakeStateEnum = "ACTION_REQUIRED"
)


type GoogleCloudDataplexV1Lake struct {
    AssetStatus *GoogleCloudDataplexV1AssetStatus `json:"assetStatus,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Metastore *GoogleCloudDataplexV1LakeMetastore `json:"metastore,omitempty"`
    MetastoreStatus *GoogleCloudDataplexV1LakeMetastoreStatus `json:"metastoreStatus,omitempty"`
    Name *string `json:"name,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    State *GoogleCloudDataplexV1LakeStateEnum `json:"state,omitempty"`
    UID *string `json:"uid,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

