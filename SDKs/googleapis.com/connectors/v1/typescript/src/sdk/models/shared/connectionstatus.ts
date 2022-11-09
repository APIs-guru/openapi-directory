import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ConnectionStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Creating = "CREATING"
,    Active = "ACTIVE"
,    Inactive = "INACTIVE"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
,    Error = "ERROR"
}


// ConnectionStatus
/** 
 * ConnectionStatus indicates the state of the connection.
**/
export class ConnectionStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=state" })
  state?: ConnectionStatusStateEnum;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
