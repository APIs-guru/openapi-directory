import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleCloudConnectorsV1ConnectionStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING",
    Error = "ERROR"
}


// GoogleCloudConnectorsV1ConnectionStatus
/** 
 * ConnectionStatus indicates the state of the connection.
**/
export class GoogleCloudConnectorsV1ConnectionStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudConnectorsV1ConnectionStatusStateEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
