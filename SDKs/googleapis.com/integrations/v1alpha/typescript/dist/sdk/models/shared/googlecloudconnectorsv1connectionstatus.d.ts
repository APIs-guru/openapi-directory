import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudConnectorsV1ConnectionStatusStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Creating = "CREATING",
    Active = "ACTIVE",
    Inactive = "INACTIVE",
    Deleting = "DELETING",
    Updating = "UPDATING",
    Error = "ERROR"
}
/**
 * ConnectionStatus indicates the state of the connection.
**/
export declare class GoogleCloudConnectorsV1ConnectionStatus extends SpeakeasyBase {
    description?: string;
    state?: GoogleCloudConnectorsV1ConnectionStatusStateEnum;
    status?: string;
}
