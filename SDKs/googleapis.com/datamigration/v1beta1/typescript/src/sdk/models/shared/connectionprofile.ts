import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CloudSqlConnectionProfile } from "./cloudsqlconnectionprofile";
import { Status } from "./status";
import { MySqlConnectionProfile } from "./mysqlconnectionprofile";

export enum ConnectionProfileProviderEnum {
    DatabaseProviderUnspecified = "DATABASE_PROVIDER_UNSPECIFIED"
,    Cloudsql = "CLOUDSQL"
,    Rds = "RDS"
}

export enum ConnectionProfileStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Draft = "DRAFT"
,    Creating = "CREATING"
,    Ready = "READY"
,    Updating = "UPDATING"
,    Deleting = "DELETING"
,    Deleted = "DELETED"
,    Failed = "FAILED"
}


// ConnectionProfile
/** 
 * A connection profile definition.
**/
export class ConnectionProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=cloudsql" })
  cloudsql?: CloudSqlConnectionProfile;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=error" })
  error?: Status;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=mysql" })
  mysql?: MySqlConnectionProfile;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=provider" })
  provider?: ConnectionProfileProviderEnum;

  @Metadata({ data: "json, name=state" })
  state?: ConnectionProfileStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
