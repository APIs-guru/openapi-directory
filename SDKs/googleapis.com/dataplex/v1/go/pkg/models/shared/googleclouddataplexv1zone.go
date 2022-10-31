package shared

type GoogleCloudDataplexV1ZoneStateEnum string

const (
	GoogleCloudDataplexV1ZoneStateEnumStateUnspecified GoogleCloudDataplexV1ZoneStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1ZoneStateEnumActive           GoogleCloudDataplexV1ZoneStateEnum = "ACTIVE"
	GoogleCloudDataplexV1ZoneStateEnumCreating         GoogleCloudDataplexV1ZoneStateEnum = "CREATING"
	GoogleCloudDataplexV1ZoneStateEnumDeleting         GoogleCloudDataplexV1ZoneStateEnum = "DELETING"
	GoogleCloudDataplexV1ZoneStateEnumActionRequired   GoogleCloudDataplexV1ZoneStateEnum = "ACTION_REQUIRED"
)

type GoogleCloudDataplexV1ZoneTypeEnum string

const (
	GoogleCloudDataplexV1ZoneTypeEnumTypeUnspecified GoogleCloudDataplexV1ZoneTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDataplexV1ZoneTypeEnumRaw             GoogleCloudDataplexV1ZoneTypeEnum = "RAW"
	GoogleCloudDataplexV1ZoneTypeEnumCurated         GoogleCloudDataplexV1ZoneTypeEnum = "CURATED"
)

type GoogleCloudDataplexV1Zone struct {
	AssetStatus   *GoogleCloudDataplexV1AssetStatus       `json:"assetStatus,omitempty"`
	CreateTime    *string                                 `json:"createTime,omitempty"`
	Description   *string                                 `json:"description,omitempty"`
	DiscoverySpec *GoogleCloudDataplexV1ZoneDiscoverySpec `json:"discoverySpec,omitempty"`
	DisplayName   *string                                 `json:"displayName,omitempty"`
	Labels        map[string]string                       `json:"labels,omitempty"`
	Name          *string                                 `json:"name,omitempty"`
	ResourceSpec  *GoogleCloudDataplexV1ZoneResourceSpec  `json:"resourceSpec,omitempty"`
	State         *GoogleCloudDataplexV1ZoneStateEnum     `json:"state,omitempty"`
	Type          *GoogleCloudDataplexV1ZoneTypeEnum      `json:"type,omitempty"`
	UID           *string                                 `json:"uid,omitempty"`
	UpdateTime    *string                                 `json:"updateTime,omitempty"`
}
