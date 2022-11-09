import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum {
    AppEngineIntegrationModeUnspecified = "APP_ENGINE_INTEGRATION_MODE_UNSPECIFIED"
,    Enabled = "ENABLED"
,    Disabled = "DISABLED"
}

export enum GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum {
    ConcurrencyModeUnspecified = "CONCURRENCY_MODE_UNSPECIFIED"
,    Optimistic = "OPTIMISTIC"
,    Pessimistic = "PESSIMISTIC"
,    OptimisticWithEntityGroups = "OPTIMISTIC_WITH_ENTITY_GROUPS"
}

export enum GoogleFirestoreAdminV1DatabaseTypeEnum {
    DatabaseTypeUnspecified = "DATABASE_TYPE_UNSPECIFIED"
,    FirestoreNative = "FIRESTORE_NATIVE"
,    DatastoreMode = "DATASTORE_MODE"
}


// GoogleFirestoreAdminV1Database
/** 
 * A Cloud Firestore Database. Currently only one database is allowed per cloud project; this database must have a `database_id` of '(default)'.
**/
export class GoogleFirestoreAdminV1Database extends SpeakeasyBase {
  @Metadata({ data: "json, name=appEngineIntegrationMode" })
  appEngineIntegrationMode?: GoogleFirestoreAdminV1DatabaseAppEngineIntegrationModeEnum;

  @Metadata({ data: "json, name=concurrencyMode" })
  concurrencyMode?: GoogleFirestoreAdminV1DatabaseConcurrencyModeEnum;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=keyPrefix" })
  keyPrefix?: string;

  @Metadata({ data: "json, name=locationId" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: GoogleFirestoreAdminV1DatabaseTypeEnum;
}
