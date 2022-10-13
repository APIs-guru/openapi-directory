package shared

type GoogleCloudDataplexV1AssetStateEnum string

const (
	GoogleCloudDataplexV1AssetStateEnumStateUnspecified GoogleCloudDataplexV1AssetStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1AssetStateEnumActive           GoogleCloudDataplexV1AssetStateEnum = "ACTIVE"
	GoogleCloudDataplexV1AssetStateEnumCreating         GoogleCloudDataplexV1AssetStateEnum = "CREATING"
	GoogleCloudDataplexV1AssetStateEnumDeleting         GoogleCloudDataplexV1AssetStateEnum = "DELETING"
	GoogleCloudDataplexV1AssetStateEnumActionRequired   GoogleCloudDataplexV1AssetStateEnum = "ACTION_REQUIRED"
)

type GoogleCloudDataplexV1Asset struct {
	CreateTime      *string                                    `json:"createTime"`
	Description     *string                                    `json:"description"`
	DiscoverySpec   *GoogleCloudDataplexV1AssetDiscoverySpec   `json:"discoverySpec"`
	DiscoveryStatus *GoogleCloudDataplexV1AssetDiscoveryStatus `json:"discoveryStatus"`
	DisplayName     *string                                    `json:"displayName"`
	Labels          map[string]string                          `json:"labels"`
	Name            *string                                    `json:"name"`
	ResourceSpec    *GoogleCloudDataplexV1AssetResourceSpec    `json:"resourceSpec"`
	ResourceStatus  *GoogleCloudDataplexV1AssetResourceStatus  `json:"resourceStatus"`
	SecurityStatus  *GoogleCloudDataplexV1AssetSecurityStatus  `json:"securityStatus"`
	State           *GoogleCloudDataplexV1AssetStateEnum       `json:"state"`
	UID             *string                                    `json:"uid"`
	UpdateTime      *string                                    `json:"updateTime"`
}
