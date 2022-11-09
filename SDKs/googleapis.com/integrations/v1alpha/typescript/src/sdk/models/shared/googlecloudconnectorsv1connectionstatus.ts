import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudConnectorsV1ConnectionStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
,    Error = "ERROR"
}


// GoogleCloudConnectorsV1ConnectionStatus
/** 
 * ConnectionStatus indicates the state of the connection.
**/
export class GoogleCloudConnectorsV1ConnectionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudConnectorsV1ConnectionStatusStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
