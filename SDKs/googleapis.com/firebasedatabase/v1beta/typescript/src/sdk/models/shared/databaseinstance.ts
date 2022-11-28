import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DatabaseInstanceStateEnum {
    LifecycleStateUnspecified = "LIFECYCLE_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Disabled = "DISABLED",
    Deleted = "DELETED"
}

export enum DatabaseInstanceTypeEnum {
    DatabaseInstanceTypeUnspecified = "DATABASE_INSTANCE_TYPE_UNSPECIFIED",
    DefaultDatabase = "DEFAULT_DATABASE",
    UserDatabase = "USER_DATABASE"
}


// DatabaseInstance
/** 
 * Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
**/
export class DatabaseInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=databaseUrl" })
  databaseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DatabaseInstanceStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DatabaseInstanceTypeEnum;
}


// DatabaseInstanceInput
/** 
 * Representation of a Realtime Database instance. Details on interacting with contents of a DatabaseInstance can be found at: https://firebase.google.com/docs/database/rest/start.
**/
export class DatabaseInstanceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: DatabaseInstanceTypeEnum;
}
