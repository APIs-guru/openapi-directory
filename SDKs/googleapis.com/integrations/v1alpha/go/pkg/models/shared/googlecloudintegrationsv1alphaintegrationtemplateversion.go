package shared

type GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnumDatabasePersistencePolicyUnspecified GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum = "DATABASE_PERSISTENCE_POLICY_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnumDatabasePersistenceDisabled          GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum = "DATABASE_PERSISTENCE_DISABLED"
)

type GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnumUnknown  GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum = "UNKNOWN"
	GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnumDraft    GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum = "DRAFT"
	GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnumActive   GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum = "ACTIVE"
	GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnumArchived GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum = "ARCHIVED"
	GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnumSnapshot GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum = "SNAPSHOT"
)

type GoogleCloudIntegrationsV1alphaIntegrationTemplateVersion struct {
	CreateTime                 *string                                                                                `json:"createTime"`
	DatabasePersistencePolicy  *GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum `json:"databasePersistencePolicy"`
	Description                *string                                                                                `json:"description"`
	LastModifierEmail          *string                                                                                `json:"lastModifierEmail"`
	Name                       *string                                                                                `json:"name"`
	ParentIntegrationVersionID *string                                                                                `json:"parentIntegrationVersionId"`
	SnapshotNumber             *string                                                                                `json:"snapshotNumber"`
	Status                     *GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum                    `json:"status"`
	TaskConfigs                []EnterpriseCrmFrontendsEventbusProtoTaskConfig                                        `json:"taskConfigs"`
	Teardown                   *EnterpriseCrmEventbusProtoTeardown                                                    `json:"teardown"`
	TemplateParameters         *EnterpriseCrmFrontendsEventbusProtoWorkflowParameters                                 `json:"templateParameters"`
	TriggerConfigs             []EnterpriseCrmFrontendsEventbusProtoTriggerConfig                                     `json:"triggerConfigs"`
	UpdateTime                 *string                                                                                `json:"updateTime"`
	UserLabel                  *string                                                                                `json:"userLabel"`
}
