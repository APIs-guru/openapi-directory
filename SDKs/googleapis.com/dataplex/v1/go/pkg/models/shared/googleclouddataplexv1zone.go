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
	AssetStatus   *GoogleCloudDataplexV1AssetStatus       `json:"assetStatus"`
	CreateTime    *string                                 `json:"createTime"`
	Description   *string                                 `json:"description"`
	DiscoverySpec *GoogleCloudDataplexV1ZoneDiscoverySpec `json:"discoverySpec"`
	DisplayName   *string                                 `json:"displayName"`
	Labels        map[string]string                       `json:"labels"`
	Name          *string                                 `json:"name"`
	ResourceSpec  *GoogleCloudDataplexV1ZoneResourceSpec  `json:"resourceSpec"`
	State         *GoogleCloudDataplexV1ZoneStateEnum     `json:"state"`
	Type          *GoogleCloudDataplexV1ZoneTypeEnum      `json:"type"`
	UID           *string                                 `json:"uid"`
	UpdateTime    *string                                 `json:"updateTime"`
}
