import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CloudSqlConnectionProfile } from "./cloudsqlconnectionprofile";
import { Status } from "./status";
import { MySqlConnectionProfile } from "./mysqlconnectionprofile";
import { CloudSqlConnectionProfileInput } from "./cloudsqlconnectionprofile";
import { MySqlConnectionProfileInput } from "./mysqlconnectionprofile";


export enum ConnectionProfileProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED",
    Cloudsql = "CLOUDSQL",
    Rds = "RDS"
}

export enum ConnectionProfileStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Draft = "DRAFT",
    Creating = "CREATING",
    Ready = "READY",
    Updating = "UPDATING",
    Deleting = "DELETING",
    Deleted = "DELETED",
    Failed = "FAILED"
}


// ConnectionProfile
/** 
 * A connection profile definition.
**/
export class ConnectionProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudsql" })
  cloudsql?: CloudSqlConnectionProfile;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mysql" })
  mysql?: MySqlConnectionProfile;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: ConnectionProfileProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConnectionProfileStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}


// ConnectionProfileInput
/** 
 * A connection profile definition.
**/
export class ConnectionProfileInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloudsql" })
  cloudsql?: CloudSqlConnectionProfileInput;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: Status;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=mysql" })
  mysql?: MySqlConnectionProfileInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=provider" })
  provider?: ConnectionProfileProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConnectionProfileStateEnum;
}
