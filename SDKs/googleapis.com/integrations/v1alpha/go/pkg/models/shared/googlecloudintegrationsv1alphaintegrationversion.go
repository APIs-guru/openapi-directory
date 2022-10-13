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

type GoogleCloudIntegrationsV1alphaIntegrationVersion struct {
	CreateTime                    *string                                                                        `json:"createTime"`
	DatabasePersistencePolicy     *GoogleCloudIntegrationsV1alphaIntegrationVersionDatabasePersistencePolicyEnum `json:"databasePersistencePolicy"`
	Description                   *string                                                                        `json:"description"`
	IntegrationParameters         []GoogleCloudIntegrationsV1alphaIntegrationParameter                           `json:"integrationParameters"`
	IntegrationParametersInternal *EnterpriseCrmFrontendsEventbusProtoWorkflowParameters                         `json:"integrationParametersInternal"`
	LastModifierEmail             *string                                                                        `json:"lastModifierEmail"`
	LockHolder                    *string                                                                        `json:"lockHolder"`
	Name                          *string                                                                        `json:"name"`
	Origin                        *GoogleCloudIntegrationsV1alphaIntegrationVersionOriginEnum                    `json:"origin"`
	ParentTemplateID              *string                                                                        `json:"parentTemplateId"`
	SnapshotNumber                *string                                                                        `json:"snapshotNumber"`
	State                         *GoogleCloudIntegrationsV1alphaIntegrationVersionStateEnum                     `json:"state"`
	Status                        *GoogleCloudIntegrationsV1alphaIntegrationVersionStatusEnum                    `json:"status"`
	TaskConfigs                   []GoogleCloudIntegrationsV1alphaTaskConfig                                     `json:"taskConfigs"`
	TaskConfigsInternal           []EnterpriseCrmFrontendsEventbusProtoTaskConfig                                `json:"taskConfigsInternal"`
	Teardown                      *EnterpriseCrmEventbusProtoTeardown                                            `json:"teardown"`
	TriggerConfigs                []GoogleCloudIntegrationsV1alphaTriggerConfig                                  `json:"triggerConfigs"`
	TriggerConfigsInternal        []EnterpriseCrmFrontendsEventbusProtoTriggerConfig                             `json:"triggerConfigsInternal"`
	UpdateTime                    *string                                                                        `json:"updateTime"`
	UserLabel                     *string                                                                        `json:"userLabel"`
}
