package shared

type GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum string

const (
	GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnumAppEngineIntegrationModeUnspecified GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum = "APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED"
	GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnumEnabled                             GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum = "ENABLED"
	GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnumDisabled                            GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum = "DISABLED"
)

type GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum string

const (
	GoogleFirestoreAdminV1DatabaseConcurrencyModeEnumConcurrencyModeUnspecified GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum = "CONCURRENCY_MODE_UNSPECIFIED"
	GoogleFirestoreAdminV1DatabaseConcurrencyModeEnumOptimistic                 GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum = "OPTIMISTIC"
	GoogleFirestoreAdminV1DatabaseConcurrencyModeEnumPessimistic                GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum = "PESSIMISTIC"
	GoogleFirestoreAdminV1DatabaseConcurrencyModeEnumOptimisticWithEntityGroups GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum = "OPTIMISTIC_WITH_ENTITY_GROUPS"
)

type GoogleFirestoreAdminV1DatabaseTypeEnum string

const (
	GoogleFirestoreAdminV1DatabaseTypeEnumDatabaseTypeUnspecified GoogleFirestoreAdminV1DatabaseTypeEnum = "DATABASE_TYPE_UNSPECIFIED"
	GoogleFirestoreAdminV1DatabaseTypeEnumFirestoreNative         GoogleFirestoreAdminV1DatabaseTypeEnum = "FIRESTORE_NATIVE"
	GoogleFirestoreAdminV1DatabaseTypeEnumDatastoreMode           GoogleFirestoreAdminV1DatabaseTypeEnum = "DATASTORE_MODE"
)

// GoogleFirestoreAdminV1DatabaseInput
// A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
type GoogleFirestoreAdminV1DatabaseInput struct {
	AppEngineIntegrationMode *GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum `json:"appEngineIntegrationMode,omitempty"`
	ConcurrencyMode          *GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum          `json:"concurrencyMode,omitempty"`
	Etag                     *string                                                     `json:"etag,omitempty"`
	LocationID               *string                                                     `json:"locationId,omitempty"`
	Name                     *string                                                     `json:"name,omitempty"`
	Type                     *GoogleFirestoreAdminV1DatabaseTypeEnum                     `json:"type,omitempty"`
}

// GoogleFirestoreAdminV1Database
// A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
type GoogleFirestoreAdminV1Database struct {
	AppEngineIntegrationMode *GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum `json:"appEngineIntegrationMode,omitempty"`
	ConcurrencyMode          *GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum          `json:"concurrencyMode,omitempty"`
	Etag                     *string                                                     `json:"etag,omitempty"`
	KeyPrefix                *string                                                     `json:"keyPrefix,omitempty"`
	LocationID               *string                                                     `json:"locationId,omitempty"`
	Name                     *string                                                     `json:"name,omitempty"`
	Type                     *GoogleFirestoreAdminV1DatabaseTypeEnum                     `json:"type,omitempty"`
}
