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
	CreateTime      *string                                    `json:"createTime,omitempty"`
	Description     *string                                    `json:"description,omitempty"`
	DiscoverySpec   *GoogleCloudDataplexV1AssetDiscoverySpec   `json:"discoverySpec,omitempty"`
	DiscoveryStatus *GoogleCloudDataplexV1AssetDiscoveryStatus `json:"discoveryStatus,omitempty"`
	DisplayName     *string                                    `json:"displayName,omitempty"`
	Labels          map[string]string                          `json:"labels,omitempty"`
	Name            *string                                    `json:"name,omitempty"`
	ResourceSpec    *GoogleCloudDataplexV1AssetResourceSpec    `json:"resourceSpec,omitempty"`
	ResourceStatus  *GoogleCloudDataplexV1AssetResourceStatus  `json:"resourceStatus,omitempty"`
	SecurityStatus  *GoogleCloudDataplexV1AssetSecurityStatus  `json:"securityStatus,omitempty"`
	State           *GoogleCloudDataplexV1AssetStateEnum       `json:"state,omitempty"`
	UID             *string                                    `json:"uid,omitempty"`
	UpdateTime      *string                                    `json:"updateTime,omitempty"`
}
