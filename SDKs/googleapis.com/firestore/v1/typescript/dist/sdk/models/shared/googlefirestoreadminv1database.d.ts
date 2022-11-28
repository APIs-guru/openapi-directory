import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum {
    AppEngineIntegrationModeUnspecified = "APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}
export declare enum GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum {
    ConcurrencyModeUnspecified = "CONCURRENCY_MODE_UNSPECIFIED",
    Optimistic = "OPTIMISTIC",
    Pessimistic = "PESSIMISTIC",
    OptimisticWithEntityGroups = "OPTIMISTIC_WITH_ENTITY_GROUPS"
}
export declare enum GoogleFirestoreAdminV1DatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    FirestoreNative = "FIRESTORE_NATIVE",
    DatastoreMode = "DATASTORE_MODE"
}
/**
 * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
**/
export declare class GoogleFirestoreAdminV1Database extends SpeakeasyBase {
    appEngineIntegrationMode?: GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum;
    concurrencyMode?: GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum;
    etag?: string;
    keyPrefix?: string;
    locationId?: string;
    name?: string;
    type?: GoogleFirestoreAdminV1DatabaseTypeEnum;
}
/**
 * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
**/
export declare class GoogleFirestoreAdminV1DatabaseInput extends SpeakeasyBase {
    appEngineIntegrationMode?: GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum;
    concurrencyMode?: GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum;
    etag?: string;
    locationId?: string;
    name?: string;
    type?: GoogleFirestoreAdminV1DatabaseTypeEnum;
}
