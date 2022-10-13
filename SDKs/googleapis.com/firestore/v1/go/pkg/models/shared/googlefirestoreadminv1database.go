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

type GoogleFirestoreAdminV1Database struct {
	AppEngineIntegrationMode *GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum `json:"appEngineIntegrationMode"`
	ConcurrencyMode          *GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum          `json:"concurrencyMode"`
	Etag                     *string                                                     `json:"etag"`
	KeyPrefix                *string                                                     `json:"keyPrefix"`
	LocationID               *string                                                     `json:"locationId"`
	Name                     *string                                                     `json:"name"`
	Type                     *GoogleFirestoreAdminV1DatabaseTypeEnum                     `json:"type"`
}
