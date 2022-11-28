import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum {
    AppEngineIntegrationModeUnspecified = "APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED",
    Enabled = "ENABLED",
    Disabled = "DISABLED"
}

export enum GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum {
    ConcurrencyModeUnspecified = "CONCURRENCY_MODE_UNSPECIFIED",
    Optimistic = "OPTIMISTIC",
    Pessimistic = "PESSIMISTIC",
    OptimisticWithEntityGroups = "OPTIMISTIC_WITH_ENTITY_GROUPS"
}

export enum GoogleFirestoreAdminV1DatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED",
    FirestoreNative = "FIRESTORE_NATIVE",
    DatastoreMode = "DATASTORE_MODE"
}


// GoogleFirestoreAdminV1Database
/** 
 * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
**/
export class GoogleFirestoreAdminV1Database extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngineIntegrationMode" })
  appEngineIntegrationMode?: GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=concurrencyMode" })
  concurrencyMode?: GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleFirestoreAdminV1DatabaseTypeEnum;
}


// GoogleFirestoreAdminV1DatabaseInput
/** 
 * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
**/
export class GoogleFirestoreAdminV1DatabaseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngineIntegrationMode" })
  appEngineIntegrationMode?: GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum;

  @SpeakeasyMetadata({ data: "json, name=concurrencyMode" })
  concurrencyMode?: GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=locationId" })
  locationId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleFirestoreAdminV1DatabaseTypeEnum;
}
