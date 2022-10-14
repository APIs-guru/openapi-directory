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
	CreateTime                 *string                                                                                `json:"createTime,omitempty"`
	DatabasePersistencePolicy  *GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionDatabasePersistencePolicyEnum `json:"databasePersistencePolicy,omitempty"`
	Description                *string                                                                                `json:"description,omitempty"`
	LastModifierEmail          *string                                                                                `json:"lastModifierEmail,omitempty"`
	Name                       *string                                                                                `json:"name,omitempty"`
	ParentIntegrationVersionID *string                                                                                `json:"parentIntegrationVersionId,omitempty"`
	SnapshotNumber             *string                                                                                `json:"snapshotNumber,omitempty"`
	Status                     *GoogleCloudIntegrationsV1alphaIntegrationTemplateVersionStatusEnum                    `json:"status,omitempty"`
	TaskConfigs                []EnterpriseCrmFrontendsEventbusProtoTaskConfig                                        `json:"taskConfigs,omitempty"`
	Teardown                   *EnterpriseCrmEventbusProtoTeardown                                                    `json:"teardown,omitempty"`
	TemplateParameters         *EnterpriseCrmFrontendsEventbusProtoWorkflowParameters                                 `json:"templateParameters,omitempty"`
	TriggerConfigs             []EnterpriseCrmFrontendsEventbusProtoTriggerConfig                                     `json:"triggerConfigs,omitempty"`
	UpdateTime                 *string                                                                                `json:"updateTime,omitempty"`
	UserLabel                  *string                                                                                `json:"userLabel,omitempty"`
}
