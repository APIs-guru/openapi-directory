import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DatabaseInstanceStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Disabled = "DISABLED"
,    Deleted = "DELETED"
}

export enum DatabaseInstanceTypeEnum {
    DatabaseInstanceTypeUnspecified = "DATABASE_INSTANCE_TYPE_UNSPECIFIED"
,    DefaultDatabase = "DEFAULT_DATABASE"
,    UserDatabase = "USER_DATABASE"
}


// DatabaseInstance
/** 
 * Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
**/
export class DatabaseInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=databaseUrl" })
  databaseUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=project" })
  project?: string;

  @Metadata({ data: "json, name=state" })
  state?: DatabaseInstanceStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: DatabaseInstanceTypeEnum;
}
