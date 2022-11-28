package shared

type GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnumDatabasePersistencePolicyUnspecified GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnumDatabasePersistenceDisabled          GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum = "DATABASE_PERSISTENCE_DISABLED"
)

type GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnumUnspecified               GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum = "UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnumUI                        GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum = "UI"
	GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnumPiperV2                   GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum = "PIPER_V2"
	GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnumPiperV3                   GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum = "PIPER_V3"
	GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnumApplicationIPProvisioning GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum = "APPLICATION_IP_PROVISIONING"
)

type GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnumIntegrationStateUnspecified GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum = "INTEGRATION_STATE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnumDraft                       GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum = "DRAFT"
	GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnumActive                      GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum = "ACTIVE"
	GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnumArchived                    GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum = "ARCHIVED"
	GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnumSnapshot                    GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum = "SNAPSHOT"
)

type GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnumUnknown  GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum = "UNKNOWN"
	GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnumDraft    GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum = "DRAFT"
	GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnumActive   GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum = "ACTIVE"
	GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnumArchived GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum = "ARCHIVED"
	GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnumSnapshot GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum = "SNAPSHOT"
)

// GoogleCloudIntegrationsV1alphaIntegrationVersion
// The integration version definition.
type GoogleCloudIntegrationsV1alphaIntegrationVersion struct {
	CreateTime                    *string                                                                        `json:"createTime,omitempty"`
	DatabasePersistencePolicy     *GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum `json:"databasePersistencePolicy,omitempty"`
	Description                   *string                                                                        `json:"description,omitempty"`
	IntegrationParameters         []GoogleCloudIntegrationsV1alphaIntegrationParameter                           `json:"integrationParameters,omitempty"`
	IntegrationParametersInternal *EnterpriseCrmFrontendsEventbusProtoWorkflowParameters                         `json:"integrationParametersInternal,omitempty"`
	LastModifierEmail             *string                                                                        `json:"lastModifierEmail,omitempty"`
	LockHolder                    *string                                                                        `json:"lockHolder,omitempty"`
	Name                          *string                                                                        `json:"name,omitempty"`
	Origin                        *GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum                    `json:"origin,omitempty"`
	ParentTemplateID              *string                                                                        `json:"parentTemplateId,omitempty"`
	SnapshotNumber                *string                                                                        `json:"snapshotNumber,omitempty"`
	State                         *GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum                     `json:"state,omitempty"`
	Status                        *GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum                    `json:"status,omitempty"`
	TaskConfigs                   []GoogleCloudIntegrationsV1alphaTaskConfig                                     `json:"taskConfigs,omitempty"`
	TaskConfigsInternal           []EnterpriseCrmFrontendsEventbusProtoTaskConfig                                `json:"taskConfigsInternal,omitempty"`
	Teardown                      *EnterpriseCrmEventbusProtoTeardown                                            `json:"teardown,omitempty"`
	TriggerConfigs                []GoogleCloudIntegrationsV1alphaTriggerConfig                                  `json:"triggerConfigs,omitempty"`
	TriggerConfigsInternal        []EnterpriseCrmFrontendsEventbusProtoTriggerConfig                             `json:"triggerConfigsInternal,omitempty"`
	UpdateTime                    *string                                                                        `json:"updateTime,omitempty"`
	UserLabel                     *string                                                                        `json:"userLabel,omitempty"`
}
