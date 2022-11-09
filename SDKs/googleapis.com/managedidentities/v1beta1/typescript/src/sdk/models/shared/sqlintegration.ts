import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SqlIntegrationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Deleting = "DELETING"
,    Ready = "READY"
}


// SqlIntegration
/** 
 * Represents the Sql instance integrated with AD.
**/
export class SqlIntegration extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sqlInstance" })
  sqlInstance?: string;

  @Metadata({ data: "json, name=state" })
  state?: SqlIntegrationStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
