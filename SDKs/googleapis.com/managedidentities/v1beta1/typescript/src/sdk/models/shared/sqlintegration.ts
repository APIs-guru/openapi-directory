import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SqlIntegrationStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Deleting = "DELETING",
    Ready = "READY"
}


// SqlIntegration
/** 
 * Represents the Sql instance integrated with AD.
**/
export class SqlIntegration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sqlInstance" })
  sqlInstance?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: SqlIntegrationStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
