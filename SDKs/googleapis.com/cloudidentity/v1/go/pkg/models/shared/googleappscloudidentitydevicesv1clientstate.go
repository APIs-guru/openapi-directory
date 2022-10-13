package shared

type GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum string

const (
	GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnumComplianceStateUnspecified GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum = "COMPLIANCE_STATE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnumCompliant                  GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum = "COMPLIANT"
	GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnumNonCompliant               GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum = "NON_COMPLIANT"
)

type GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum string

const (
	GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnumHealthScoreUnspecified GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum = "HEALTH_SCORE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnumVeryPoor               GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum = "VERY_POOR"
	GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnumPoor                   GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum = "POOR"
	GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnumNeutral                GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum = "NEUTRAL"
	GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnumGood                   GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum = "GOOD"
	GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnumVeryGood               GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum = "VERY_GOOD"
)

type GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum string

const (
	GoogleAppsCloudidentityDevicesV1ClientStateManagedEnumManagedStateUnspecified GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum = "MANAGED_STATE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1ClientStateManagedEnumManaged                 GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum = "MANAGED"
	GoogleAppsCloudidentityDevicesV1ClientStateManagedEnumUnmanaged               GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum = "UNMANAGED"
)

type GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum string

const (
	GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnumOwnerTypeUnspecified GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum = "OWNER_TYPE_UNSPECIFIED"
	GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnumOwnerTypeCustomer    GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum = "OWNER_TYPE_CUSTOMER"
	GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnumOwnerTypePartner     GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum = "OWNER_TYPE_PARTNER"
)

type GoogleAppsCloudidentityDevicesV1ClientState struct {
	AssetTags       []string                                                        `json:"assetTags"`
	ComplianceState *GoogleAppsCloudidentityDevicesV1ClientStateComplianceStateEnum `json:"complianceState"`
	CreateTime      *string                                                         `json:"createTime"`
	CustomID        *string                                                         `json:"customId"`
	Etag            *string                                                         `json:"etag"`
	HealthScore     *GoogleAppsCloudidentityDevicesV1ClientStateHealthScoreEnum     `json:"healthScore"`
	KeyValuePairs   map[string]GoogleAppsCloudidentityDevicesV1CustomAttributeValue `json:"keyValuePairs"`
	LastUpdateTime  *string                                                         `json:"lastUpdateTime"`
	Managed         *GoogleAppsCloudidentityDevicesV1ClientStateManagedEnum         `json:"managed"`
	Name            *string                                                         `json:"name"`
	OwnerType       *GoogleAppsCloudidentityDevicesV1ClientStateOwnerTypeEnum       `json:"ownerType"`
	ScoreReason     *string                                                         `json:"scoreReason"`
}
