import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ConnectionStatusStateEnum {
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
export declare class ConnectionStatus extends SpeakeasyBase {
    description?: string;
    state?: ConnectionStatusStateEnum;
    status?: string;
}
