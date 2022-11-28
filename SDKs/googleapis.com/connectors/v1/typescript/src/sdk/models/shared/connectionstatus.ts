import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ConnectionStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING",
    Error = "ERROR"
}


// ConnectionStatus
/** 
 * ConnectionStatus indicates the state of the connection.
**/
export class ConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: ConnectionStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
